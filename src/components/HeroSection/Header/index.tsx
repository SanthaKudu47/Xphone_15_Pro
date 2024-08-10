import Logo from "../../../assets/svgs/Logo.svg";
import { responsive } from "../../types/common";

export default function Header({
  isAnimationDone = false,
  size = "sm",
}: {
  isAnimationDone: boolean;
  size?: responsive;
}) {
  const styleClsNames = {
    sm: ["mt-20", "mb-10"],
    md: ["mt-5", "mb-1"],
    lg: ["mt-1", "mb-1"],
  };
  const fontSize = {
    sm: ["text-[30px]"],
    md: ["text-[40px]"],
    lg: ["text-[40px]"],
  };

  const iconSize = {
    sm: 20,
    md: 30,
    lg: 40,
  };
  return (
    <div
      className={`flex flex-row items-baseline gap-2 header  ${styleClsNames[
        size
      ].join(" ")}  ${isAnimationDone && "show"}`}
    >
      <img src={Logo} width={iconSize[size]} />
      <h2
        className={` font-base font-bold bg-gradient-to-t to-start via-middle from-end bg-clip-text text-transparent ${fontSize[size]}`}
      >
        XPhone 15 Pro
      </h2>
    </div>
  );
}
