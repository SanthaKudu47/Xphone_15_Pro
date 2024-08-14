import magnesium_black_large from "../../../assets/images/magnesium_black_large.png";
import magnesium_black_small from "../../../assets/images/magnesium_black_small.png";
import magnesium_black_medium from "../../../assets/images/magnesium_black_medium.png";
export default function Black() {
  return (
    <picture>
      <source
        media="(min-width: 0px) and (max-width: 640px)"
        srcSet={magnesium_black_small}
      />
      <source
        media="(min-width: 641px) and (max-width: 768px)"
        srcSet={magnesium_black_medium}
      />
      <source media="(min-width:769px)" srcSet={magnesium_black_large} />
      <img
        src={magnesium_black_large}
        alt="black_phone"
        className="h-full"
      ></img>
    </picture>
  );
}
