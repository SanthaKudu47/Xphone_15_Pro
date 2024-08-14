import Chip from "../../Chip";

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
      <div className="flex w-full">
        <Chip />
      </div>
    </div>
  );
}
