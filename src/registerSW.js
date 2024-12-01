export default function registerSW() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const sw_url = `${window.process.env.PUBLIC_URL}/service-worker.js`; // service worker URL
      navigator.serviceWorker.register(sw_url);
    });
  }
}
