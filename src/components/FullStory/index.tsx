import { useEffect, useRef } from "react";
import "./style.css";
import svg_large from "../../assets/svgs/mask_large.svg";
import svg_mask_mobile from "../../assets/svgs/mask_mobile.svg";
import phone_collection_bg from "../../assets/images/phone_collection.png";
import Effect from "../Effect";
import useInInView from "../../hooks/useInView";
import Paragraph from "./paragraph";
import WidgetV4 from "../WidgetV4";
import { getScrollPosition } from "../../utils/js/scroll";

export default function FullStory() {
  const refScrollArea = useRef<HTMLDivElement>(null);
  const refOfInViewTrigger = useRef<HTMLDivElement>(null);
  const textArea = useRef<HTMLDivElement>(null);
  const widgetVisibleArea = useRef<HTMLDivElement>(null);

  const textInView = useInInView(textArea, {
    threshold: "full",
    once: false,
  });
  const isInView = useInInView(refOfInViewTrigger, {
    threshold: "init",
    once: false,
  });
  const isInViewWidget = useInInView(widgetVisibleArea, {
    threshold: "init",
    once: false,
  });
  useEffect(() => {
    if (refScrollArea.current) {
      window.addEventListener("scroll", getScrollPosition);
      window.addEventListener("resize", getScrollPosition);
    }

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
      window.removeEventListener("resize", getScrollPosition);
    };
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto">
        <div
          className="absolute left-0 right-0 h-1/2 bottom-0 z-0"
          ref={widgetVisibleArea}
        ></div>
        <div
          className="mt-[150px]  mb-[80px]  sm:mb-[100px]"
          ref={refOfInViewTrigger}
        >
          <h2 className="flex">
            <Effect
              isInView={isInView}
              type="span"
              styles=" font-base text-title text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] font-bold"
            >
              Explore the full story.
            </Effect>
          </h2>
        </div>
        <div className="sm:px-16">
          <div className="flex mt-0 sm:mt-5 mb-[70px] sm:mb-[100px]  w-full flex-col px-5 sm:px-0">
            <h2 className="font-base text-[40px] sm:text-[64px] text-white font-bold block leading-10 sm:leading-[70px]">
              xPhone.
            </h2>
            <h2 className="font-base  text-[40px] sm:text-[64px] text-white font-bold block leading-10 sm:leading-[70px]">
              Forged in magnesium.
            </h2>
          </div>
          <div ref={widgetVisibleArea}>
            <div
              id="scrollArea"
              className="flex flex-col mx-auto w-full z-50"
              ref={refScrollArea}
            >
              <div className="w-full h-auto overflow-hidden relative">
                <img
                  src={svg_large}
                  alt="mask"
                  className="absolute z-20 hidden sm:block"
                />
                <img
                  src={svg_mask_mobile}
                  alt="mask"
                  className="absolute z-20 sm:hidden"
                />
                <div className="absolute auto_scroll_bg w-[930px] sm:w-[950px] md:w-[1100px] lg:w-[1500px]">
                  <img src={phone_collection_bg} alt="scrolling_image_set" />
                </div>
                <img
                  src={svg_large}
                  alt="mask"
                  className="opacity-0 z-0 relative hidden sm:block"
                />
                <img
                  src={svg_mask_mobile}
                  alt="mask"
                  className="opacity-0 z-0 relative sm:hidden"
                />
              </div>
            </div>
            <div
              ref={textArea}
              className="grid grid-flow-row sm:grid-flow-col gap-y-16 sm:gap-y-0  sm:gap-x-5 md:gap-x-12  lg:gap-x-16 my-5 font-base text-[22px]  sm:text-[20px] text-white px-2 md:px-10 leading-6 font-bold text-left py-5 sm:py-2"
            >
              <Effect isInView={textInView} type="div">
                <Paragraph>
                  <p>
                    <span className="text-title">xPhone 15 Pro is</span> the
                    first xPhone to feature an aerospace-grade magnesium design
                    <span className="text-title">
                      , using the same alloy that spacecraft use for missions to
                      Mars.
                    </span>
                  </p>
                </Paragraph>
              </Effect>

              <Effect isInView={textInView} type="div">
                <Paragraph>
                  <p>
                    <span className="text-title">
                      Magnesium has one of the best strength-to-weight ratios of
                      any metal, making these our
                    </span>
                    lightest Pro models ever.
                    <span className="text-title">
                      You'll notice the difference the moment you pick one up.
                    </span>
                  </p>
                </Paragraph>
              </Effect>
            </div>
          </div>
        </div>
      </div>
      <div className="z-40 w-full h-[200px]  bottom-0 sticky mx-auto flex justify-center items-center">
        <WidgetV4 isInView={isInViewWidget} text="More on design & display" />
      </div>
    </div>
  );
}
