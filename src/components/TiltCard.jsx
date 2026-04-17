import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../utils/cn";

function TiltCard({ children, className = "" }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shiftX = useMotionValue(0);
  const shiftY = useMotionValue(0);
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 210,
    damping: 26,
    mass: 0.5,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 210,
    damping: 26,
    mass: 0.5,
  });
  const smoothShiftX = useSpring(shiftX, {
    stiffness: 185,
    damping: 26,
    mass: 0.56,
  });
  const smoothShiftY = useSpring(shiftY, {
    stiffness: 185,
    damping: 26,
    mass: 0.56,
  });
  const shineBackground = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.18), transparent 34%)`;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - py) * 12);
    rotateY.set((px - 0.5) * 14);
    shiftX.set((px - 0.5) * 8);
    shiftY.set((py - 0.5) * 8);
    shineX.set(px * 100);
    shineY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    shiftX.set(0);
    shiftY.set(0);
    shineX.set(50);
    shineY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.5 }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        x: smoothShiftX,
        y: smoothShiftY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        willChange: "transform",
      }}
      className={cn("relative motion-gpu", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: shineBackground }}
      />
      <div className="relative h-full" style={{ transform: "translateZ(0)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default TiltCard;
