import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  livelink: string;
  githublink: string;
}

const ProjectCard = ({ src, title, livelink, githublink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border transition delay-150 duration-300 ease-in-out hover:skew-y-12 hover: hover:scale-100 border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="flex gap-3 relative p-4 text-white">
        <Link className="px-4 rounded-md bg-slate-600" href={livelink} passHref>
          Live
        </Link>
        <Link
          className="px-4 rounded-md bg-amber-700"
          href={githublink}
          passHref
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
