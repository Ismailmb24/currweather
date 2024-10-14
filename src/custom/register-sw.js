import { useEffect } from "react";

export const useRegisterSW = (path = "/workers/service-worker.js") => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("waiting too !!!");
      window.addEventListener("load", () => {
        console.log("waiting !!!");
        navigator.reg
          .register(path)
          .then((reg) => {
            console.log("registering service worker", reg);
            if (reg.installing) {
              console.log("installing service worker");
            } else if (reg.waiting) {
              console.log("waiting service worker");
            } else if (reg.active) {
              console.log("activating service worker");
            }
          })
          .catch((error) => {
            console.log("Something goes wrong", error);
          });
      });
    }
  });
};
