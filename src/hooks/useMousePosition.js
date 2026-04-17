import { useEffect, useRef, useState } from "react";

export function useMousePosition() {
  const timeoutRef = useRef(null);
  const previousRef = useRef({ x: -200, y: -200 });
  const [mouse, setMouse] = useState({
    x: -200,
    y: -200,
    velocity: 0,
    isMoving: false,
    deltaX: 0,
    deltaY: 0,
  });

  useEffect(() => {
    const handleMove = (event) => {
      const dx = event.clientX - previousRef.current.x;
      const dy = event.clientY - previousRef.current.y;
      const velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 48);

      previousRef.current = { x: event.clientX, y: event.clientY };

      setMouse({
        x: event.clientX,
        y: event.clientY,
        velocity,
        isMoving: true,
        deltaX: dx,
        deltaY: dy,
      });

      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setMouse((prev) => ({
          ...prev,
          velocity: 0,
          isMoving: false,
          deltaX: 0,
          deltaY: 0,
        }));
      }, 90);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return mouse;
}
