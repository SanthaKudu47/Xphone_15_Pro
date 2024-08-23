import magnesium_white_large from "../../../assets/images/magnesium_white_large.png";
import magnesium_white_small from "../../../assets/images/magnesium_white_small.png";
import magnesium_white_medium from "../../../assets/images/magnesium_white_medium.png";

export default function White() {
  return (
    <>
      {" "}
      <img
        src={magnesium_white_small}
        alt="black_phone_small"
        className="h-full sm:hidden"
      />
      <img
        src={magnesium_white_medium}
        alt="black_phone_medium"
        className="h-full hidden sm:block  md:hidden"
      />
      <img
        src={magnesium_white_large}
        alt="black_phone_large"
        className="h-full hidden md:block"
      />
    </>
  );
}
