import Effect from "../../Effect";
import { responsive } from "../../types/common";

export default function ButtonAndText({
  isAnimationDone = false,
  size = "lg",
}: {
  isAnimationDone: boolean;
  size?: responsive;
}) {
  const my1 = {
    sm: "my-10",
    md: "my-20",
    lg: "my-2",
  };

  const my2 = { sm: "my-5", md: "my-10", lg: "my-7  " };

  const btnCls = {
    sm: ["w-[100px]", "text-[20px]"],
    md: ["w-[100px]", "text-[20px]"],
    lg: ["w-[100px]", "text-[22px]"],
  };

  const textSize = {
    sm: "text-[20px]",
    md: "text-[20px]",
    lg: "text-[25px]",
  };
  return (
    <div className={`flex flex-col ${my1[size]}`}>
      <Effect isInView={isAnimationDone}>
        <div
          className={`bg-button p-3 rounded-3xl font-base text-white text-center mx-auto  ${btnCls[
            size
          ].join(" ")}`}
        >
          Buy
        </div>
      </Effect>
      <div className={`${my2[size]}`}>
        <Effect isInView={isAnimationDone}>
          <h3 className={`text-white font-base ${textSize[size]}`}>
            From $999 or $41.62/mo.for 24 mo.
          </h3>
        </Effect>
      </div>
    </div>
  );
}
