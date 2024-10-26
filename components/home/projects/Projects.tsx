import Heading from "@/components/main/Heading";
import ProjectCard from "@/components/sub/ProjectCard";

const Projects = async () => {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/projects",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div id="projects" className="rounded-lg w-full bg-slate-900 p-2">
      <Heading text="Projects" />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2">
        {data?.data
          .reverse()
          .map(
            (project: {
              image: string;
              id: string;
              livelink: string;
              githublink: string;
              title: string;
              overview: string;
            }) => (
              <ProjectCard
                key={project.id}
                src={project.image}
                title={project.title}
                overview={project.overview}
                livelink={project.livelink || "#"}
                githublink={project.githublink || "#"}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
