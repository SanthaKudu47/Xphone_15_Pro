import all_colors_large from "../../../assets/images/all_colors_large.png";
import all_colors_small from "../../../assets/images/all_colors_small.png";
import all_colors_medium from "../../../assets/images/all_colors_medium.png";

export default function AllColors() {
  return (
    <div>
      <img
        src={all_colors_small}
        alt="all_colors_small"
        className="h-full sm:hidden"
      />
      <img
        src={all_colors_medium}
        alt="all_colors_medium"
        className="h-full hidden sm:block  md:hidden"
      />
      <img
        src={all_colors_large}
        alt="all_colors_large"
        className="h-full hidden md:block"
      />
    </div>
  );
}
