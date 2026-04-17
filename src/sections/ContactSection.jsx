import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import MagneticButton from "../components/MagneticButton";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contactCards } from "../data/site";

const iconMap = {
  Email: Mail,
  Phone: Phone,
  "Based In": MapPin,
};

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <ParallaxSection id="contact" className="pb-24 pt-20 sm:pt-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that feels unforgettable from the first click."
          description="Whether you want a sharp portfolio, a real-time product, or a visually richer frontend, I'm open to collaborations where product quality and presentation both matter."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-5">
            {contactCards.map((card) => {
              const Icon = iconMap[card.label];

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="gradient-border glass-panel flex items-center gap-4 rounded-[1.7rem] p-5 transition hover:border-violet-300/30 hover:shadow-neon"
                >
                  <div className="rounded-2xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">{card.label}</p>
                    <p className="mt-1 text-base text-white">{card.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="gradient-border glass-panel rounded-[1.8rem] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-violet-200/75">Availability</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Open to impactful frontend and full stack work.</h3>
              <p className="mt-4 leading-7 text-white/60">
                I'm especially interested in product-focused roles, visually polished frontend projects, and builds
                where interaction quality is part of the value.
              </p>
            </div>
          </Reveal>

          <Reveal className="gradient-border glass-panel rounded-[2rem] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-white/60">Your Name</span>
                  <input
                    type="text"
                    placeholder="Yashwant-inspired ideas start here"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-violet-400/50 focus:shadow-[0_0_28px_rgba(168,85,247,0.22)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white/60">Your Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-violet-400/50 focus:shadow-[0_0_28px_rgba(168,85,247,0.22)]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-white/60">Project Type</span>
                <input
                  type="text"
                  placeholder="Portfolio, product UI, MERN app, landing page..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-violet-400/50 focus:shadow-[0_0_28px_rgba(168,85,247,0.22)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/60">Message</span>
                <textarea
                  rows="6"
                  placeholder="Tell me about the experience you want to create."
                  required
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-violet-400/50 focus:shadow-[0_0_28px_rgba(168,85,247,0.22)]"
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-white/45">
                  Clean code, motion polish, and strong first impressions are part of the package.
                </div>
                <MagneticButton type="submit" icon={false}>
                  Send Message
                </MagneticButton>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Message captured. The form is frontend-only right now, so wire it to EmailJS, Formspree, or your own API next.
                </motion.div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default ContactSection;
