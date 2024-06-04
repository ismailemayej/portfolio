import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/sub/HeroContent";
import Blogs from "./blog/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContent />
        <Education />
        <Skills />
        <Projects />
        <Blogs />
      </div>
    </main>
  );
}
