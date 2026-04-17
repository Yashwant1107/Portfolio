import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

function Navbar({ items }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-shell pt-4">
        <div
          className={`glass-panel gradient-border rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled ? "bg-white/8 shadow-neon" : "bg-white/[0.03]"
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <a href="#home" className="font-display text-lg font-bold tracking-wide text-white">
              Yashwant<span className="text-orchid">.</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <MagneticButton href="#contact" className="px-5 py-2.5 text-xs">
                Start a Conversation
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                  <MagneticButton href="#contact" className="mt-2 w-full justify-center">
                    Start a Conversation
                  </MagneticButton>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

