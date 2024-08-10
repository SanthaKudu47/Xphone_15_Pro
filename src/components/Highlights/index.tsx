import playIcon from "../../assets/svgs/play_icon.svg";
import nextIcon from "../../assets/svgs/next_icon.svg";
import Effect from "../Effect";
import useInInView from "../../hooks/useInView";
import { useRef } from "react";
import Slider from "../Slider";

export default function Highlights() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInInView(ref, { threshold: "full", once: false });

  return (
    <>
      <div className="flex flex-col   max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between  mt-[100px] sm:mt-[150px]">
          <h2 className="flex">
            <Effect
              isInView={isInView}
              type="span"
              styles="font-base text-title text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] font-bold"
            >
              Get the highlights.
            </Effect>
          </h2>

          <div className="flex flex-col sm:flex-row font-base text-button text-[17px] sm:text-[19px] md:text-[20px] lg:text-[22px] gap-x-5 my-5">
            <h4 className="flex">
              <Effect
                isInView={isInView}
                type="span"
                styles="flex flex-row gap-x-2"
              >
                Watch the film <img src={playIcon} width={19} />
              </Effect>
            </h4>

            <h4 className="flex">
              <Effect
                isInView={isInView}
                type="span"
                styles="flex flex-row gap-x-2"
              >
                Watch the event <img src={nextIcon} width={8} />{" "}
              </Effect>
            </h4>
          </div>
        </div>
      </div>
      <div ref={ref} className="bg-black">
        <Slider/>
      </div>
    </>
  );
}
