const Heading = ({ text }: any) => {
  return (
    <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 px-20 text-center underline">
      {text}
    </h1>
  );
};

export default Heading;
