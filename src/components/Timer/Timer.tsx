import { useEffect, useState, useRef } from "react";

export const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      if (startTimeRef.current !== null) {
        setTimeElapsed(Date.now() - startTimeRef.current);
      }
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const seconds = Math.floor(timeElapsed / 1000);
  const hundredths = Math.floor((timeElapsed % 1000) / 10);

  return (
    <>
      {String(seconds).padStart(2, "0")}:{String(hundredths).padStart(2, "0")}
    </>
  );
};
