import { responsive } from "../types/common";

export default function Title({
  value = "This is title",
  size = "lg",
}: {
  value?: string;
  size?: responsive;
}) {
  const stylesClsName = {
    lg: [`text-[48px]`],
    md: [`text-[48px]`],
    sm: [`text-[32px]`],
  };
  return (
    <h3 className={`font-base font-bold text-title ${stylesClsName[size]}`}>
      {value}
    </h3>
  );
}
