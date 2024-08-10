export default function Slide({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="w-10/12 h-[450px] sm:h-[680px] bg-blue-900  slide relative flex-shrink-0 sm:rounded-xl"
    >
      slide1
    </div>
  );
}
