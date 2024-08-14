import { useEffect, useRef } from "react";
import { SlideData } from "../types/common";
import "./styles.css";

export default function Widget({
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

  return (
    <div
      id="wid"
      className={`flex flex-row relative w-[200px] h-[50px] items-center justify-center mx-auto`}
    >
      <div
        className={`c1 rounded-3xl  flex justify-center items-center absolute  ${
          isInView ? "activeC1" : "activeC1 inActiveC1"
        }`}
      >
        <div className={`flex gap-x-4`}>
          {data.map((ele, index) => {
            return (
              <div
                className={`w-[10px] h-[10px]  rounded-full links  ${
                  isInView ? "visibleLinks" : ""
                }`}
                onClick={() => {
                  clickHandlerSlide(index + 1);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div
        className={`c2 rounded-full absolute flex  bg-gray-700 scale ${
          isInView ? "active" : "inActive active"
        }`}
      ></div>
    </div>
  );
}
