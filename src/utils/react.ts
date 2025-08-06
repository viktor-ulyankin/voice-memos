import React from "react";

export const mergeRefs = <T>(...refs: (React.Ref<T> | undefined)[]) => {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && "current" in ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
};
