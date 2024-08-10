import { responsive } from "../types/common";

function Container({
  children = null,
  size = "lg",
  customStylesCls = "",
}: {
  children?: React.ReactNode;
  size?: responsive;
  customStylesCls?: string;
}) {
  const stylesClsName = {
    lg: [`hidden md:flex  max-w-screen-xl  px-6`],
    md: [`hidden sm:flex md:hidden max-w-screen-md px-6`],
    sm: [`sm:hidden flex mx-screen-sm px-5`],
  };

  return (
    <div className={`mx-auto ${stylesClsName[size]} ${customStylesCls}`}>
      {children}
    </div>
  );
}

export default Container;
