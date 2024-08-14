import all_colors_large from "../../../assets/images/all_colors_large.png";
import all_colors_small from "../../../assets/images/all_colors_small.png";
import all_colors_medium from "../../../assets/images/all_colors_medium.png";

export default function AllColors() {
  return (
    <picture>
      <source
        media="(min-width: 0px) and (max-width: 640px)"
        srcSet={all_colors_small}
      />
      <source
        media="(min-width: 641px) and (max-width: 768px)"
        srcSet={all_colors_medium}
      />
      <source media="(min-width:769px)" srcSet={all_colors_large} />
      <img src={all_colors_large} alt="all_colors" className="h-full"></img>
    </picture>
  );
}
