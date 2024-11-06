export default function registerSW() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const sw_url = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker.register(sw_url).then((reg) => {
        console.log("registred", reg);
      });
    });
  }
}
