import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  icon = true,
  ...props
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const smoothX = useSpring(offsetX, {
    stiffness: 260,
    damping: 20,
    mass: 0.35,
  });
  const smoothY = useSpring(offsetY, {
    stiffness: 260,
    damping: 20,
    mass: 0.35,
  });
  const Component = href ? motion.a : motion.button;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    offsetX.set(x * 0.18);
    offsetY.set(y * 0.18);
  };

  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const variantClasses =
    variant === "ghost"
      ? "border border-white/12 bg-white/5 text-white hover:border-violet-400/60 hover:bg-white/8"
      : "bg-gradient-to-r from-electric to-orchid text-white shadow-neon hover:from-violet-500 hover:to-fuchsia-500";

  return (
    <Component
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      style={{ x: smoothX, y: smoothY, willChange: "transform" }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        offsetX.set(0);
        offsetY.set(0);
      }}
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </Component>
  );
}

export default MagneticButton;
