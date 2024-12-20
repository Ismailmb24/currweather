import { useEffect, useState } from "react";

const getCurrentActive = (key) => sessionStorage.getItem(key);
const setCurrentActive = (key, data) => {
  sessionStorage.setItem(key, data);
};

export function useActivePage(initialId) {
  const [targetId, setTargetId] = useState(
    getCurrentActive("id") ? getCurrentActive("id") : initialId,
  );

  useEffect(() => {
    setCurrentActive("id", targetId);
    const target = document.getElementById(targetId); //target page navigation icon
    const target_data = target.getAttribute("data-active"); //data attribute that hold target page id
    const active_page = document.getElementById(target_data); //the active page
    const pages = document.getElementsByClassName("pages");
    const parent = target.parentNode;

    for (let childNode of parent.children) {
      childNode.classList.remove("active");
    }
    for (let page of pages) {
      page.classList.remove("active");
    }
    target.classList.add("active");
    active_page.classList.add("active");
  }, [targetId]);

  return (target) => {
    setTargetId(target);
  };
}
