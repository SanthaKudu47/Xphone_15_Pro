import { responsive } from "../../types/common";

type CardTitleProps = {
  line1?: string;
  line2?: string;
  line3?: string;
  size?: responsive;
};

export default function CardTitle({
  line1 = "",
  line2 = "",
  line3 = "",
  size = "lg",
}: CardTitleProps) {
  const stylesClsName = {
    lg: [`text-[25px]`, `leading-8`, `m-4`],
    md: [`text-[25px]`, `leading-7`, `m-3`],
    sm: [`text-[18px]`, `leading-6`, `m-2`],
  };

  const classes = stylesClsName[size].join(" ");

  return (
    <div className={`font-base font-bold text-white absolute top-0 ${classes}`}>
      {line1 && <h3>Enter X17 Pro.</h3>}
      {line2 && <h3>Game‑changing chip.</h3>}
      {line3 && <h3>Groundbreaking performance.</h3>}
    </div>
  );
}
