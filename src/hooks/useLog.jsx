import { useEffect } from "react";

export function useLog(label = "Value changed", value) {
  useEffect(() => {
    console.log(`${label}:`, JSON.stringify(value, null, 2));
  }, [value]);
}
