import { motion } from "framer-motion";
import { ArrowDownRight, BriefcaseBusiness, Sparkles, Zap } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { heroPills } from "../data/site";
import { useTypingEffect } from "../hooks/useTypingEffect";

const typingWords = [
  "real-time web apps",
  "immersive 3D interfaces",
  "premium developer experiences",
];

function HeroSection() {
  const typedText = useTypingEffect(typingWords);

  return (
    <ParallaxSection id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <Sparkles className="h-4 w-4 text-orchid" />
                Full Stack Developer crafting standout digital experiences
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-bold leading-[0.98] text-white text-glow sm:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-gradient">Yashwant</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-base text-white/60 sm:text-lg">
                <span>I build</span>
                <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 font-medium text-violet-100 shadow-neon">
                  {typedText}
                  <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-violet-300" />
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                I combine frontend finesse, motion design, and full stack engineering to build products that feel fast,
                polished, and memorable. From real-time chat to immersive 3D interfaces, I focus on experiences that
                stand out instantly.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="#projects">Explore Projects</MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
                  Let&apos;s Collaborate
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-3">
                {heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-[520px]"
            >
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />
              <div className="absolute -right-12 bottom-12 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <TiltCard className="group">
                <div className="gradient-border glass-panel relative overflow-hidden rounded-[2rem] p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/80 to-transparent" />

                  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-[#101827] to-cyan-400/10 p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.25),_transparent_28%),radial-gradient(circle_at_80%_0%,_rgba(34,211,238,0.12),_transparent_20%),linear-gradient(180deg,_rgba(255,255,255,0.06),_transparent)]" />
                    <div className="absolute inset-0 bg-hero-grid bg-[length:70px_70px] opacity-[0.07]" />

                    <div className="relative">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Portfolio Preview</p>
                          <p className="mt-2 text-lg font-semibold text-white">Interactive Web Presence</p>
                        </div>
                        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-3 text-violet-100">
                          <Zap className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="relative mx-auto aspect-[4/4.6] max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-intense">
                        <motion.img
                          src="/images/profile.jpg"
                          alt="Yashwant Verma"
                          animate={{ scale: [1.02, 1.04, 1.02] }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-transparent to-transparent" />

                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl"
                        >
                          <p className="text-xs uppercase tracking-[0.26em] text-white/50">Focus</p>
                          <p className="mt-1 text-sm text-white">Frontend + Motion + Backend</p>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 7, 0] }}
                          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-violet-500/15 p-2 text-violet-100">
                              <BriefcaseBusiness className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs text-white/50">Specialty</p>
                              <p className="text-sm text-white">Premium portfolio builds</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute -bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
              >
                Scroll down
                <ArrowDownRight className="h-4 w-4 text-orchid" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default HeroSection;
