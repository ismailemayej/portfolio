import ProjectCard from "../sub/ProjectCard";
import Heading from "./Heading";

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
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <Heading text="Projects" />
      <div className="h-full grid lg:grid-cols-3 grid-cols-1 gap-10 px-10">
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
