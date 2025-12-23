import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css';

function Loader({ onComplete }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.children;

        const tl = gsap.timeline({
            onComplete: () => {
                // Exit Animation: Fly Through
                const exitTl = gsap.timeline({
                    onComplete: onComplete
                });

                exitTl.to(textRef.current, {
                    scale: 5,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.8,
                    ease: "power2.in"
                })
                    .to(containerRef.current, {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.inOut"
                    }, "<0.1");
            }
        });

        // Initial State: Blurred, lowered, transparent
        gsap.set(letters, {
            y: 50,
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.5
        });

        tl.to(letters, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
            stagger: 0.1, // Classic GSAP Stagger
            ease: "power3.out"
        })
            .to(letters, {
                color: "#fff", // Flash white briefly
                duration: 0.1,
                yoyo: true,
                repeat: 1
            })
            .to({}, { duration: 0.5 });

    }, [onComplete]);

    // Split text functionality
    const name = "Yuvanshankar";
    const splitName = name.split("").map((char, index) => (
        <span key={index} className="loader-char">{char}</span>
    ));

    return (
        <div className="loader-container" ref={containerRef}>
            <div className="loader-content">
                <h1 className="loader-text" ref={textRef}>
                    {splitName}
                </h1>
            </div>
        </div>
    );
}

export default Loader;
