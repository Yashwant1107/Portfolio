import { useEffect, useRef } from "react";

function MouseGlow({ mouse }) {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const frameRef = useRef(0);
  const trailLifetime = 180;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.lineCap = "round";
      context.lineJoin = "round";
    };

    const drawTrail = () => {
      const now = performance.now();
      pointsRef.current = pointsRef.current.filter(
        (point) => now - point.time < trailLifetime
      );

      context.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;

      if (points.length > 1) {
        context.save();
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);

        for (let index = 1; index < points.length - 1; index += 1) {
          const current = points[index];
          const next = points[index + 1];
          const controlX = (current.x + next.x) / 2;
          const controlY = (current.y + next.y) / 2;
          context.quadraticCurveTo(current.x, current.y, controlX, controlY);
        }

        const last = points[points.length - 1];
        context.lineTo(last.x, last.y);

        const age = now - points[0].time;
        const fade = Math.max(0.12, 1 - age / trailLifetime);
        const widthBoost = mouse.isMoving ? Math.min(mouse.velocity / 28, 1.1) : 0;

        context.strokeStyle = `rgba(176, 132, 255, ${0.18 * fade})`;
        context.shadowColor = "rgba(124, 58, 237, 0.12)";
        context.shadowBlur = 6;
        context.lineWidth = 2.6 + widthBoost;
        context.stroke();

        context.strokeStyle = `rgba(231, 221, 255, ${0.05 * fade})`;
        context.shadowBlur = 0;
        context.lineWidth = 0.8 + widthBoost * 0.12;
        context.stroke();
        context.restore();
      }

      frameRef.current = window.requestAnimationFrame(drawTrail);
    };

    resizeCanvas();
    context.clearRect(0, 0, canvas.width, canvas.height);
    frameRef.current = window.requestAnimationFrame(drawTrail);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouse.isMoving, mouse.velocity]);

  useEffect(() => {
    if (!mouse.isMoving) {
      return;
    }

    pointsRef.current = [
      ...pointsRef.current,
      {
        x: mouse.x,
        y: mouse.y,
        time: performance.now(),
      },
    ].slice(-12);
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[53] hidden md:block"
      aria-hidden="true"
    />
  );
}

export default MouseGlow;
