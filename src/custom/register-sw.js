import { useEffect } from "react";

export const useRegisterSW = (path = "/workers/service-worker.js") => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register(path)
          .then((serviceWorker) => {
            console.log("Service worker registered", serviceWorker);
            if (serviceWorker.installing) {
              console.log("installing worker");
            } else if (serviceWorker.waiting) {
              console.log("waiting service worker");
            } else if (serviceWorker.active) {
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
