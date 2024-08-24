import Alloy from "../../Alloy";
import MgStatic from "../../../assets/images/magnesium_static.png";

export default function AlloySlide() {
  return (
    <div className="flex  w-full h-full relative p-1 sm:p-3">
      <div className="font-base font-bold text-white absolute text-[18px] sm:text-[24px]">
        <p>
          Magnesium.
          <br />
          So strong. So light. So Pro.
        </p>
      </div>
      <div className="hidden md:flex w-full">
        <Alloy />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <img className="mx-auto my-auto" src={MgStatic} alt="mg_small" />
      </div>
    </div>
  );
}
