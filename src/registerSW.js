/* export const useRegisterSW = (path = "/workers/service-worker.js") => {
  useLayoutEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("waiting too !!!");

      console.log("waiting !!!");
      navigator.serviceWorker
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
    }
  });
}; */
export default function registerSW() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const sw_url = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker.register(sw_url).then(reg => {
        console.log("registred", reg); 
      })
    }); 
  }
}
