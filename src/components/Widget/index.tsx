import "./styles.css";

export default function Widget({ isInView = false }: { isInView?: boolean }) {
  return (
    <div
      id="wid"
      className="flex flex-row relative w-[200px] h-[50px] items-center mx-auto bg-red-500"
    >
      <div
        className={`c1 rounded-3xl  flex justify-center items-center absolute ${
          isInView ? "activeC1" : ""
        }`}
      >
        <div className={`flex gap-x-4 links ${isInView ? "visible" : ""}`}>
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
        </div>
      </div>
      <div
        className={`c2 rounded-full absolute flex  bg-gray-700 ${
          isInView ? "active" : ""
        }`}
      ></div>
    </div>
  );
}
