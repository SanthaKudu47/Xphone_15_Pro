import magnesium_blue_large from "../../../assets/images/magnesium_blue_large.png";
import magnesium_blue_small from "../../../assets/images/magnesium_blue_small.png";
import magnesium_blue_medium from "../../../assets/images/magnesium_blue_medium.png";
export default function Blue() {
  return (
    <picture>
      <source
        media="(min-width: 0px) and (max-width: 640px)"
        srcSet={magnesium_blue_small}
      />
      <source
        media="(min-width: 641px) and (max-width: 768px)"
        srcSet={magnesium_blue_medium}
      />
      <source media="(min-width:769px)" srcSet={magnesium_blue_large} />
      <img src={magnesium_blue_large} alt="blue_phone" className="h-full"></img>
    </picture>
  );
}
