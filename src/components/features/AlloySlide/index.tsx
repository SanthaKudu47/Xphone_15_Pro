import Alloy from "../../Alloy";

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
      <div className="flex w-full p-10">
        <Alloy />
      </div>
    </div>
  );
}
