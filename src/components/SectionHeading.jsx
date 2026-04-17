import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}

export default SectionHeading;

