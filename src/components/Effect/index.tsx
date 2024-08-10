import { useEffect, useRef } from "react";
import "./styles.css";
export default function Effect({
  children = null,
  isInView = false,
}: {
  children: React.ReactNode;
  isInView?: boolean;
}) {
  return <div className={`effect w-full relative flex ${isInView && 'locate'}`}>{children}</div>;
}
