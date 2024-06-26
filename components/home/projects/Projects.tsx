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
    <div
      className="flex flex-col items-center justify-center py-12"
      id="projects"
    >
      <Heading text="Projects" />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 lg:px-10 px-0">
        {data?.data.map(
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
              livelink={project.livelink}
              githublink={project.githublink}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
