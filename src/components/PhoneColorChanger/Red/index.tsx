import magnesium_red_large from "../../../assets/images/magnesium_red_large.png";
import magnesium_red_small from "../../../assets/images/magnesium_red_small.png";
import magnesium_red_medium from "../../../assets/images/magnesium_red_medium.png";
export default function Red() {
  return (
    <>
      <img
        src={magnesium_red_small}
        alt="black_phone_small"
        className="h-full sm:hidden"
      />
      <img
        src={magnesium_red_medium}
        alt="black_phone_medium"
        className="h-full hidden sm:block  md:hidden"
      />
      <img
        src={magnesium_red_large}
        alt="black_phone_large"
        className="h-full hidden md:block"
      />
    </>
  );
}
