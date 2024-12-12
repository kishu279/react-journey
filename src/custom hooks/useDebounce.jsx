import { useEffect } from "react";

const useDebounce = (func, timer, input) => {
  useEffect(() => {
    const getData = setTimeout(() => func(), timer);
    return () => clearTimeout(getData);
  }, [input]);
};

export default useDebounce;
