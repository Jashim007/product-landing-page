function swRegistration() {
  const heart = [
    "font-size: 20px",
    "padding: 12px",
    "margin: 4px 0 4px 4px",
    "color: rgba(238,58,136,1)",
  ].join(";");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((registration) => {
        console.log("%c❤️", heart);
      })
      .catch((err) => console.log(err));
  }
}

swRegistration();
