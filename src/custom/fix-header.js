import { useEffect, useState } from "react";

export const useFixHeader = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    let distanceScroll;
    const page = document.querySelector(".pages.active");
    const trackScroll = (node) => {
      console.log(node.scrollTop);
      if (distanceScroll > node.scrollTop) setStatus(true);
      if (distanceScroll < node.scrollTop && node.scrollTop > 50)
        setStatus(false);
      distanceScroll = node.scrollTop;
    };
    page.addEventListener("scroll", () => {
      trackScroll(page);
    });
  });
  return status;
};
