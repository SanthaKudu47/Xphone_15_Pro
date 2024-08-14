import { colors } from "../types/common";
import "./styles.css";

export default function WidgetV3({
  isInView = true,
  selected = "all",
  options = { colors: ["all", "black", "blue", "red", "white"] },
}: {
  isInView: boolean;
  selected: colors;
  options: {
    colors: string[];
    setColor?: React.Dispatch<React.SetStateAction<colors>>;
  };
}) {
  const { colors, setColor } = options;
  const changeColor = function (color: colors) {
    if (setColor) setColor(color);
  };

  let colorName = "four";

  switch (selected) {
    case "all":
      colorName = "four colors";
      break;
    case "black":
      colorName = "black color";
      break;
    case "blue":
      colorName = "blue color";
      break;
    case "red":
      colorName = "red color";
      break;
    case "white":
      colorName = "white color";
      break;
    default:
      colorName = "all colors";
      break;
  }

  return (
    <div className="w-[250px] flex h-[100px] items-center relative justify-center mx-auto">
      <div
        className={`bg-white absolute z-50 -top-4 w-3/4 text-center rounded-lg font-base text-[12px] font-bold ${
          isInView ? "opacity-1" : "opacity-0"
        }`}
      >
        {`xPhone 15 Pro in ${colorName}`}
      </div>

      <div
        className={`flex rounded-full absolute v3_lc justify-center items-center ${
          isInView ? "v3_lc_step_1" : "v3_lc_step_2 v3_lc_step_1"
        }`}
      >
        <div
          className={`flex flex-row gap-x-2 v3_lc_inner  ${
            isInView
              ? "v3_lc_inner_step_1 "
              : "v3_lc_inner_step_1 v3_lc_inner_step_2"
          }`}
        >
          {colors.map((color, index) => {
            let styleCls = "";
            switch (color) {
              case "all":
                styleCls = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
                break;
              case "black":
                styleCls = "bg-magnesium_black";
                break;
              case "red":
                styleCls = "bg-magnesium_red";
                break;
              case "white":
                styleCls = "bg-magnesium_white";
                break;
              case "blue":
                styleCls = "bg-magnesium_blue";
                break;
              default:
                styleCls = "bg-white";
                break;
            }
            return (
              <div
                key={`v3_dot_${index}`}
                className={`w-[30px] h-[30px] rounded-full cursor-pointer p-1 bg-white border-2 ${
                  selected === color ? "border-blue-500" : ""
                }`}
                onClick={() => {
                  changeColor(color as colors);
                }}
              >
                <div
                  className={`w-full h-full  rounded-full ${styleCls} shadow-2xl`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`rounded-full v3_bc absolute ${
          isInView ? "v3_bc_step_1" : ""
        }`}
      />

      <div
        className={`flex rounded-full text-white shrink-0 absolute v3_rc ${
          isInView ? "v3_rc_step_1" : "v3_rc_step_1 v3_rc_step_2"
        }`}
      ></div>
    </div>
  );
}
