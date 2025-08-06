import { useCallback, useEffect, useRef, useState } from "react";

const events: (keyof HTMLElementEventMap)[] = [
  "click",
  "keyup",
  "select",
  "input",
  "focus",
];

export const useCursorSelection = <T extends HTMLTextAreaElement>() => {
  const ref = useRef<T>(null);
  const [selection, setSelection] = useState<[number, number]>([0, 0]);

  const update = useCallback(() => {
    const el = ref.current;

    if (el) {
      setTimeout(() => {
        setSelection([el.selectionStart ?? 0, el.selectionEnd ?? 0]);
      }, 100); // Manually call focus event needs to wait.
    }
  }, []);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    events.forEach((event) => el.addEventListener(event, update));
    update(); // Initial installation

    return () => {
      events.forEach((event) => el.removeEventListener(event, update));
    };
  }, [update]);

  return { ref, selection, update };
};
