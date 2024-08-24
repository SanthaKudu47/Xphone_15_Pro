import Chip from "../../Chip";
import ChipStatic from "../../../assets/images/chip_static.png";

export default function ChipSlide() {
  return (
    <div className="flex  w-full h-full relative p-1 sm:p-3">
      <div className="font-base font-bold text-white absolute text-[18px] sm:text-[24px]">
        <p>
          Enter A17 Pro.
          <br />
          Game-changing chip.
          <br />
          Groundbreaking performance.
        </p>
      </div>
      <div className="hidden md:flex w-full">
        <Chip />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <img className="mx-auto my-auto" src={ChipStatic} alt="chip_small" />
      </div>
    </div>
  );
}
