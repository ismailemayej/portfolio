import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
  className: string;
};

const Container = ({ children }: TContainer) => {
  return (
    <div className="h-full lg:px-[80px] px-[15px] text-white w-full max-w-full">
      {children}
    </div>
  );
};

export default Container;
