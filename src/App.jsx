import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import MouseGlow from "./components/MouseGlow";
import ScrollProgress from "./components/ScrollProgress";
import StarField from "./components/StarField";
import { useMousePosition } from "./hooks/useMousePosition";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const mouse = useMousePosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative min-h-screen bg-midnight text-white"
    >
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.16),_transparent_18%),linear-gradient(180deg,_#0b0f1a_0%,_#060816_100%)]" />
      <div className="fixed inset-0 -z-20 bg-hero-grid bg-[length:80px_80px] opacity-[0.06]" />
      <StarField />
      <MouseGlow mouse={mouse} />
      <ScrollProgress />
      <Navbar items={sections} />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </motion.div>
  );
}

export default App;
