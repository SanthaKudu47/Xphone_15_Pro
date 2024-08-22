import { useEffect, useRef } from "react";
import iguana from "../../assets/images/iguana.png";
import { getScrollPosition } from "../../utils/js/scroll";

import "./index.css";

const callBack = function () {
  getScrollPosition("scrollAreaImage");
};

export default function Camera() {
  const refScrollArea = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refScrollArea.current) {
      window.addEventListener("scroll", callBack);
      window.addEventListener("resize", callBack);
    }

    return () => {
      window.removeEventListener("scroll", callBack);
      window.removeEventListener("resize", callBack);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto my-5">
        <div className="font-base font-bold mx-auto w-[320px] sm:w-full sm:px-8 md:px-24 ">
          <h2 className="text-[40px] text-white text-left md:text-[64px] leading-tight sm:hidden">
            A camera that captures your wildest <br /> imagination.
          </h2>
          <h2 className="text-[50px] md:text-[74px] text-white text-left leading-none hidden sm:block ">
            A camera that captures your <br /> wildest imagination.
          </h2>
          <p className="mt-4 md:mt-6 text-title text-[21px] md:text-[30px] leading-tight">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>

        <div
          ref={refScrollArea}
          className=" overflow-hidden mx-auto mt-[100px] iguanaImg"
          id="scrollAreaImage"
        >
          <img src={iguana} alt="iguana" />
        </div>
      </div>
    </>
  );
}
