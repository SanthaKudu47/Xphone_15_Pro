import magnesium_black_large from "../../../assets/images/magnesium_black_large.png";
import magnesium_black_small from "../../../assets/images/magnesium_black_small.png";
import magnesium_black_medium from "../../../assets/images/magnesium_black_medium.png";
export default function Black() {
  return (
    <>
      <img
        src={magnesium_black_small}
        alt="black_phone_small"
        className="h-full sm:hidden"
      />
      <img
        src={magnesium_black_medium}
        alt="black_phone_medium"
        className="h-full hidden sm:block  md:hidden"
      />
      <img
        src={magnesium_black_large}
        alt="black_phone_large"
        className="h-full hidden md:block"
      />
    </>
  );
}
