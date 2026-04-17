import { motion } from "framer-motion";
import { GraduationCap, Palette, Rocket } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { aboutCards } from "../data/site";

const icons = [Rocket, Palette, GraduationCap];

function AboutSection() {
  return (
    <ParallaxSection id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Building digital experiences with clean engineering and cinematic motion."
          description="I'm a full stack developer with a strong bias toward premium UI, modern web performance, and interactive experiences that feel distinctly crafted. My background blends product thinking, design awareness, and practical engineering."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="gradient-border glass-panel rounded-[2rem] p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-200/80">Snapshot</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  Modern web products with premium interaction design.
                </h3>
              </div>
              <div className="space-y-4 text-white/65">
                <p>
                  I enjoy shipping interfaces that feel alive, not static. That means better motion, stronger visual
                  hierarchy, faster interactions, and frontend architecture that stays maintainable.
                </p>
                <p>
                  My recent work spans MERN applications, real-time communication systems, 3D scroll experiences, and
                  polished responsive UI builds for interview-ready portfolios and product demos.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "7.2", label: "CPI in B.Tech" },
                { value: "2025", label: "B.Tech completion" },
                { value: "100%", label: "Hands-on mindset" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5">
            {aboutCards.map((card, index) => {
              const Icon = icons[index];

              return (
                <TiltCard key={card.title} className="group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="gradient-border glass-panel h-full rounded-[1.75rem] p-6"
                  >
                    <div className="mb-5 inline-flex rounded-2xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-100 shadow-neon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 leading-7 text-white/60">{card.description}</p>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default AboutSection;
