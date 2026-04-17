import { motion } from "framer-motion";
import { Code2, Database, Layers3 } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { skills } from "../data/site";

const icons = [Code2, Layers3, Database];

function SkillsSection() {
  return (
    <ParallaxSection id="skills" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit focused on responsive products, scalable APIs, and standout frontend detail."
          description="I work across the full web stack, but I put extra care into interface quality, animation systems, and developer experiences that feel premium from the first interaction."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={skill.title} delay={index * 0.08}>
                <TiltCard className="group h-full">
                  <div className="gradient-border glass-panel h-full rounded-[1.8rem] p-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-violet-100 shadow-neon transition group-hover:bg-violet-500/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium text-white/55">{skill.value}%</span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">{skill.title}</h3>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-electric via-orchid to-cyan-400 shadow-neon"
                      />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-violet-400/15 bg-violet-500/10 px-4 py-2 text-sm text-violet-100/90 transition hover:border-violet-300/40 hover:shadow-neon"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </ParallaxSection>
  );
}

export default SkillsSection;
