import { useEffect } from "react";

export default function Test({ query = "1" }: { query: string }) {
  useEffect(() => {
    let ignore = false;
    console.log("Effect", ignore);
    setTimeout(() => {
      console.log("get data for =>", query,ignore);
    }, 2000);
    return () => {
      console.log("Cleaning", ignore);
      ignore = true;
    };
  }, []);
  return <>{query}</>;
}
