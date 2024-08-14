import magnesium_white_large from "../../../assets/images/magnesium_white_large.png";
import magnesium_white_small from "../../../assets/images/magnesium_white_small.png";
import magnesium_white_medium from "../../../assets/images/magnesium_white_medium.png";

export default function White() {
  return (
    <picture>
      <source
        media="(min-width: 0px) and (max-width: 640px)"
        srcSet={magnesium_white_small}
      />
      <source
        media="(min-width: 641px) and (max-width: 768px)"
        srcSet={magnesium_white_medium}
      />
      <source media="(min-width:769px)" srcSet={magnesium_white_large} />
      <img
        src={magnesium_white_large}
        alt="white_phone"
        className="h-full"
      ></img>
    </picture>
  );
}
