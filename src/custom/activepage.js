import { useLayoutEffect, useState } from "react";

export function useActivePage(initialId) {
  const [targetId, setTargetId] = useState(initialId);
  useLayoutEffect(() => {
    const target = document.getElementById(targetId);
    const parent = target.parentNode;
    for (let childNode of parent.children) {
      childNode.classList.remove("active");
    }
    target.classList.add("active");
  }, [targetId]);
  return (target) => {
    setTargetId(target);
  };
}
