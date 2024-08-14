export default function Slide({
  id,
  children = <>Slide</>,
}: {
  id: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="w-10/12 h-[450px] sm:h-[680px] slide relative flex-shrink-0 sm:rounded-xl bg-black"
    >
      {children}
    </div>
  );
}
