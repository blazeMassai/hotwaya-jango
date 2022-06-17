// This is the scss entry file
import "../styles/turbo_drive.scss";
import "@hotwired/turbo";

// We can import Bootstrap JS instead of the CDN link, if you do not use
// Bootstrap, please feel free to remove it.
import "bootstrap/dist/js/bootstrap.bundle";


window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready 1");
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("turbo:load");
});