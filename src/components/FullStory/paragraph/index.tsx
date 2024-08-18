import { ReactNode } from "react";

export default function Paragraph({
  children = <p>hello</p>,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="w-[320px] sm:w-[250px] md:w-[300px] mx-auto">
      {children}
    </div>
  );
}
