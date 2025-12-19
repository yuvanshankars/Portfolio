const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// Public route: save contact messages (no auth required)
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });
    // capture token (if present), verify payload if possible, and store only a hash of the token
    let tokenHash = null;
    let tokenPayload = null;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader) {
      const parts = authHeader.split(' ');
      if (parts.length === 2 && parts[0] === 'Bearer') {
        const token = parts[1];
        // compute SHA-256 hash of the token (do not store raw token)
        tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        try {
          if (process.env.JWT_SECRET) {
            tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
          } else {
            tokenPayload = { verified: false };
          }
        } catch (err) {
          tokenPayload = { invalid: true };
        }
      }
    }

    let msg = new Message({ name, email, message, tokenHash, tokenPayload });
    await msg.save();

    // Generate a server-side token for this message and store only its SHA-256 hash.
    // Use JWT if a secret is configured, otherwise create a UUID token.
    let serverToken;
    let serverPayload = null;
    // Make server token deterministic per sender email so repeated messages
    // from the same email produce the same token id.
    if (email) {
      if (process.env.JWT_SECRET) {
        // Use HMAC-SHA256 with the server secret to derive a deterministic token from the email
        serverToken = crypto.createHmac('sha256', process.env.JWT_SECRET).update(email).digest('hex');
        serverPayload = { email };
      } else {
        // No secret configured — fallback to simple SHA-256 of the email (deterministic)
        serverToken = crypto.createHash('sha256').update(email).digest('hex');
        serverPayload = { email };
      }
    } else {
      // If email is missing, fall back to previous behavior (non-deterministic)
      if (process.env.JWT_SECRET) {
        serverPayload = { messageId: msg._id.toString() };
        serverToken = jwt.sign(serverPayload, process.env.JWT_SECRET, { noTimestamp: true });
      } else {
        serverToken = (crypto.randomUUID && crypto.randomUUID()) || crypto.randomBytes(16).toString('hex');
        serverPayload = { uuid: true };
      }
    }

    const serverTokenHash = crypto.createHash('sha256').update(serverToken).digest('hex');
    // update the saved message with the server token hash and payload
    msg.tokenHash = serverTokenHash;
    msg.tokenPayload = serverPayload;
    await msg.save();

    // Return the raw token to the client (store only the hash server-side)
    res.json({ ok: true, token: serverToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Optional: list messages (public)
router.get('/', async (req, res) => {
  try {
    const list = await Message.find().sort({ createdAt: -1 }).limit(100);
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
