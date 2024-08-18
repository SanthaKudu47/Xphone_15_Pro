import "./styles.css";
import plus_svg from '../../assets/svgs/plus.svg'

export default function WidgetV4({
  isInView = true,
  text = "More on design & display",
}: {
  isInView: boolean;
  text: string;
}) {
  return (
    <div className="flex h-[100px] items-center relative justify-center mx-auto">
      <div
        className={`z-40 w-full mr-[50px] ml-2 v4_inner_text font-base font-bold text-white  ${
          isInView
            ? "v4_inner_text_step_1"
            : "v4_inner_text_step_1 v4_inner_text_step_2"
        }`}
      >
        {text}
      </div>
      <div
        className={`flex rounded-full absolute v4_lc justify-center items-center ${
          isInView ? "v4_lc_step_1" : "v4_lc_step_2 v4_lc_step_1"
        }`}
      >
        <div
          className={`flex flex-row gap-x-2 w-full h-full items-center px-2`}
        >
          <div
            className={`rounded-full flex justify-center items-center v4_lc_inner ${
              isInView
                ? "v4_lc_inner_step_1 "
                : "v4_lc_inner_step_1 v4_lc_inner_step_2"
            }`}
          > <img src={ plus_svg} alt="plus" width={15} height={15} /> </div>
        </div>
      </div>
      <div
        className={`rounded-full v4_bc absolute ${
          isInView ? "v4_bc_step_1" : ""
        }`}
      />
      <div
        className={`flex rounded-full text-white shrink-0 absolute v4_rc ${
          isInView ? "v4_rc_step_1" : "v4_rc_step_1 v4_rc_step_2"
        }`}
      ></div>
    </div>
  );
}
