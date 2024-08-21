import React from "react";
import CardTitle from "./CardTitle";

export default function Card({
  children = null,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black rounded-3xl flex relative h-[680px] max-w-[1260px] p-6 ">
      <CardTitle
        line1="Enter X17 Pro."
        line2="Game‑changing chip."
        line3="Groundbreaking performance."
      />
      <div className="mx-auto  w-8/12">{children}</div>
    </div>
  );
}
