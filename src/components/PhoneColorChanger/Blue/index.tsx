import magnesium_blue_large from "../../../assets/images/magnesium_blue_large.png";
import magnesium_blue_small from "../../../assets/images/magnesium_blue_small.png";
import magnesium_blue_medium from "../../../assets/images/magnesium_blue_medium.png";
export default function Blue() {
  return (
    <>
      <img
        src={magnesium_blue_small}
        alt="black_phone_small"
        className="h-full sm:hidden"
      />
      <img
        src={magnesium_blue_medium}
        alt="black_phone_medium"
        className="h-full hidden sm:block  md:hidden"
      />
      <img
        src={magnesium_blue_large}
        alt="black_phone_large"
        className="h-full hidden md:block"
      />
    </>
  );
}
