import React from 'react';

function NavItem({ id, label, active, onClick }) {
  return (
    <li>
      <button
        className={`navitem__btn ${active === id ? 'active' : ''}`}
        onClick={() => onClick(id)}
        aria-current={active === id ? 'page' : undefined}
      >
        {label}
      </button>
    </li>
  );
}

export default NavItem;
