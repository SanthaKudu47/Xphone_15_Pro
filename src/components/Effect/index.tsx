import "./styles.css";
export default function Effect({
  children = null,
  isInView = false,
  styles = "",
  type = "div",
}: {
  children: React.ReactNode;
  isInView?: boolean;
  styles?: string;
  type?: "span" | "div";
}) {
  if (type === "div") {
    return (
      <div
        className={`effect w-full relative ${isInView && "locate"} ${styles}`}
      >
        {children}
      </div>
    );
  } else {
    return (
      <span
        className={`effect w-full relative ${isInView && "locate"} ${styles}`}
      >
        {children}
      </span>
    );
  }
}
