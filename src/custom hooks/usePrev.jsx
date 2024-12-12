import { useEffect, useRef } from "react";

export default function usePrev(input) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = input; // Update the ref with the current value
  }, [input]);

  return inputRef.current || null; // Return null if it's the first render
}
