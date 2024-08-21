import playIcon from "../../assets/svgs/play_icon.svg";
import nextIcon from "../../assets/svgs/next_icon.svg";
import Effect from "../Effect";
import useInInView from "../../hooks/useInView";
import { useRef, useState } from "react";
import Slider from "../Slider";
import { slideData } from "../Slider/data/data";
import WidgetV2 from "../WidgetV2";

export default function Highlights() {
  const [active, setActive] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);
  const refForText = useRef<HTMLDivElement>(null);
  const isInView = useInInView(refForText, { threshold: "1/2", once: false });
  const isInViewForWidget = useInInView(ref, { threshold: "1/2", once: false });

  return (
    <>
      <div className="flex flex-col  max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto relative">
        <div className="absolute w-full h-1/2  z-0 bottom-0" ref={ref}></div>
        <div
          className="absolute w-full h-full  z-0 bottom-0"
          ref={refForText}
        ></div>

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
        <div className="bg-black sm:bg-base">
          <Slider data={slideData} activeSlide={active} />
        </div>
        <div
          className={`w-[300px] h-[200px] mx-auto sticky z-50 bottom-0 flex items-center`}
        >
          <WidgetV2
            isInView={isInViewForWidget}
            options={{ data: slideData, setActive }}
          />
        </div>
      </div>
    </>
  );
}
