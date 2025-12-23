import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CricketCursor.css';

const CricketCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';
        const links = document.querySelectorAll('a, button, .clickable');

        // Add hover effect listeners
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursorRef.current, { scale: 1.5, duration: 0.2 });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
            });
        });

        const onMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', () => { });
                link.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    return (
        <div className="cricket-cursor" ref={cursorRef}>
            <div className="cricket-cursor__seam"></div>
        </div>
    );
};

export default CricketCursor;
