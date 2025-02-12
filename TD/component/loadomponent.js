function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data));
}

// Load the components
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "component/header.html");
  loadComponent("mainPage", "component/mainPage.html");
  loadComponent("footer", "component/footer.html");
});
