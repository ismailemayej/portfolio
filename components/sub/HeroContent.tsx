import Hero from "../main/Hero";

const HeroContent = async () => {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/resume"
  );

  const resume = await res.json();

  return <Hero resumelink={resume.data[0].resumelink} />;
};
export default HeroContent;
