// Load header
import { randomBackgroundColor } from './11-background-color';
import { scrollToTop } from './12-scroll-to-top';

randomBackgroundColor();
// scrollToTop();

fetch('/src/partials/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Load footer
fetch('/src/partials/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
