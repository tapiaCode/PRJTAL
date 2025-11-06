// Espera a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // 1. Selecciona el botón de hamburguesa
  const navbarToggle = document.querySelector(".navbar-toggle");

  // 2. Selecciona el menú de navegación
  const navbarNav = document.querySelector(".navbar-nav");

  // 3. Comprueba que ambos elementos existan
  if (navbarToggle && navbarNav) {
    // 4. Añade un evento 'click' al botón
    navbarToggle.addEventListener("click", () => {
      // 5. Al hacer click, añade o quita la clase 'active' del menú
      // La clase 'active' está definida en el CSS para mostrar el menú
      navbarNav.classList.toggle("active");
    });
  }
});
