import AllColors from "./AllColors";
import Black from "./Black";
import Blue from "./Blue";
import Red from "./Red";
import White from "./White";

export default function PhoneColorChanger({
  color = "all",
}: {
  color: "all" | "blue" | "black" | "white" | "red";
}) {
  const commonStyles = "absolute";
  const activeState = "z-10 opacity-100";
  const deactivateState = "z-0 opacity-0";

  return (
    <div className="flex flex-col justify-center items-center h-[450px] sm:h-[550px] md:h-[600px] w-full relative">
      <div
        className={`${commonStyles} ${
          color === "all" ? `${activeState}` : `${deactivateState}`
        } `}
      >
        <AllColors />
      </div>
      <div
        className={`${commonStyles} ${
          color === "black" ? `${activeState}` : `${deactivateState}`
        } `}
      >
        <Black />
      </div>
      <div
        className={`${commonStyles} ${
          color === "blue" ? `${activeState}` : `${deactivateState}`
        } `}
      >
        <Blue />
      </div>
      <div
        className={`${commonStyles} ${
          color === "red" ? `${activeState}` : `${deactivateState}`
        } `}
      >
        <Red />
      </div>
      <div
        className={`${commonStyles} ${
          color === "white" ? `${activeState}` : `${deactivateState}`
        } `}
      >
        <White />
      </div>
    </div>
  );
}
