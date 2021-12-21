import { useState, useEffect } from "react";

// mount函数
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
// 防抖
//
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
