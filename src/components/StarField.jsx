import { motion } from "framer-motion";
import { useMemo } from "react";

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, (_, index) => ({
        id: index,
        size: Math.random() * 3 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 3,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white/80"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.95, 0.25], scale: [0.9, 1.15, 0.95] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

export default StarField;

