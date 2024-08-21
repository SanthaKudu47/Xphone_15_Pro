import RePlayIcon from "../RePlayIcon";
import { SlideData } from "../types/common";
import "./styles.css";

export default function WidgetV2({
  isInView = false,
  options,
}: {
  isInView?: boolean;
  options: {
    data: SlideData[];
    setActive: React.Dispatch<React.SetStateAction<number>>;
  };
}) {
  const { data, setActive } = options;

  function clickHandlerSlide(slideNumber: number) {
    setActive(slideNumber);
  }

  function resetHandler() {
    setActive(1);
  }
  return (
    <div className="w-[250px] flex h-[100px] items-center relative justify-center">
      <div
        className={`flex rounded-full absolute lc justify-center items-center ${
          isInView ? "lc_step_1" : "lc_step_2 lc_step_1"
        }`}
      >
        <div
          className={`flex flex-row gap-x-5 lc_inner  ${
            isInView ? "lc_inner_step_1 " : "lc_inner_step_1 lc_inner_step_2"
          }`}
        >
          {data.map((_slide, index) => {
            return (
              <div
                key={`dot_${index}`}
                className={`w-[20px] h-[20px] bg-white  rounded-full cursor-pointer`}
                onClick={() => {
                  clickHandlerSlide(index + 1);
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div
        className={`rounded-full bc absolute ${isInView ? "bc_step_1" : ""}`}
      />

      <div
        className={`flex rounded-full text-white shrink-0 absolute rc ${
          isInView ? "rc_step_1" : "rc_step_1 rc_step_2"
        }`}
      >
        <div
          onClick={resetHandler}
          className={`w-full h-full rc_inner cursor-pointer ${
            isInView ? "rc_inner_step_1" : "rc_inner_step_1 rc_inner_step_2"
          }`}
        >
          <RePlayIcon />
        </div>
      </div>
    </div>
  );
}
