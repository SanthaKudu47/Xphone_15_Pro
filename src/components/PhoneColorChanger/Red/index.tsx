import magnesium_red_large from "../../../assets/images/magnesium_red_large.png";
import magnesium_red_small from "../../../assets/images/magnesium_red_small.png";
import magnesium_red_medium from "../../../assets/images/magnesium_red_medium.png";
export default function Red() {
  return (
    <picture>
      <source
        media="(min-width: 0px) and (max-width: 640px)"
        srcSet={magnesium_red_small}
      />
      <source
        media="(min-width: 641px) and (max-width: 768px)"
        srcSet={magnesium_red_medium}
      />
      <source media="(min-width:769px)" srcSet={magnesium_red_large} />
      <img src={magnesium_red_large} alt="red_phone" className="h-full"></img>
    </picture>
  );
}
