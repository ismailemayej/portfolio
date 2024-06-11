import Projects from "@/components/home/projects/Projects";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/sub/HeroContent";
import Blogs from "./blog/page";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroContent />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}
