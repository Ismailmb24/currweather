import { useEffect, useState } from "react";

export const useFixHeader = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    let distanceScroll;
    document.addEventListener("scroll", () => {
      console.log(pageYOffset);
      if (distanceScroll > pageYOffset && pageYOffset > 50) setStatus(true);
      if (distanceScroll < pageYOffset) setStatus(false);
      distanceScroll = pageYOffset;
    });
  });
  return status;
};
