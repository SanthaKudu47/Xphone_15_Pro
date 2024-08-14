import { useRef, useState } from "react";
import PhoneColorChanger from "../PhoneColorChanger";
import WidgetV3 from "../WidgetV3";
import useInInView from "../../hooks/useInView";
import Effect from "../Effect";

export default function Colors() {
  const [selected, setSelected] = useState<
    "all" | "black" | "blue" | "red" | "white"
  >("all");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInInView(ref, { once: false, threshold: "3/4" });
  const isInViewForText = useInInView(ref, { threshold: "full", once: false });

  return (
    <div className="w-full bg-black py-20 relative">
      <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto">
        <h2 className="flex">
          <Effect
            isInView={isInViewForText}
            type="span"
            styles=" font-base text-title text-[32px] sm:text-[35px] md:text-[40px] lg:text-[48px] font-bold"
          >
            Take a closer look.
          </Effect>
        </h2>
        <div ref={ref} className="my-10  sm:my-20">
          <PhoneColorChanger color={selected} />
        </div>
      </div>

      <div
        className={`w-[300px] h-[100px]  sticky z-50 bottom-0 flex items-center mt-10 mx-auto`}
      >
        <WidgetV3
          isInView={isInView}
          selected={selected}
          options={{
            colors: ["all", "red", "blue", "black", "white"],
            setColor: setSelected,
          }}
        />
      </div>
    </div>
  );
}
