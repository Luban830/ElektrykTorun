'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLit, setIsLit] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    let animationFrame: number;
    
    const updateCursor = (e: MouseEvent) => {
      if (isDesktop) {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      }
    };

    const handleClick = () => {
      if (isDesktop) {
        setIsLit(true);
        setTimeout(() => setIsLit(false), 500);
      }
    };

    if (isDesktop) {
      document.addEventListener('mousemove', updateCursor, { passive: true });
      document.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDesktop]);

  // Don't render on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className={`cursor-bulb ${isLit ? 'lit' : ''}`} />
    </div>
  );
}
