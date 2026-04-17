import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { projects } from "../data/site";

function ProjectsSection() {
  return (
    <ParallaxSection id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that blends motion, usability, and solid full stack execution."
          description="Each project is built to solve real interaction problems while still feeling polished, modern, and visually distinctive. The focus is not just building features, but building experiences people remember."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <TiltCard className="group h-full">
                <article className="gradient-border glass-panel flex h-full flex-col rounded-[2rem] p-5">
                  <div
                    className={`relative mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.color} p-5`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.06),_transparent)]" />
                    {project.image ? (
                      <motion.a
                        href={project.imageHref || project.links?.[0]?.href}
                        target={project.imageHref || project.links?.[0]?.external ? "_blank" : undefined}
                        rel={project.imageHref || project.links?.[0]?.external ? "noreferrer" : undefined}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.35 }}
                        className="relative block overflow-hidden rounded-[1.15rem]"
                      >
                        <motion.img
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.5 }}
                          src={project.image}
                          alt={project.title}
                          className="relative h-56 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-xl">
                          Open Live
                        </div>
                      </motion.a>
                    ) : (
                      <motion.a
                        href={project.imageHref || project.links?.[0]?.href}
                        target={project.imageHref || project.links?.[0]?.external ? "_blank" : undefined}
                        rel={project.imageHref || project.links?.[0]?.external ? "noreferrer" : undefined}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.35 }}
                        className="relative block overflow-hidden rounded-[1.15rem]"
                      >
                        <div className="relative flex h-56 flex-col justify-between rounded-[1.15rem] border border-white/10 bg-black/20 p-5">
                          <div className="flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-violet-300/90" />
                            <span className="h-3 w-3 rounded-full bg-fuchsia-300/70" />
                            <span className="h-3 w-3 rounded-full bg-cyan-300/70" />
                          </div>
                          <div>
                            <p className="font-display text-2xl font-semibold text-white">{project.preview}</p>
                            <p className="mt-2 max-w-[14rem] text-sm text-white/60">
                              Premium UI surface designed to hint at the product before you even open it.
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/75 backdrop-blur-xl">
                              Open Live
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p className="text-sm uppercase tracking-[0.24em] text-violet-200/75">{project.subtitle}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <MagneticButton
                          key={link.label}
                          href={link.href}
                          external={link.external}
                          variant={link.label === "Source Code" ? "ghost" : "primary"}
                          className="px-5 py-3 text-xs"
                        >
                          {link.label}
                        </MagneticButton>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}

export default ProjectsSection;
