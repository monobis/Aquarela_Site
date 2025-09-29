const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
        menu.classList.remove("show");
      }
    }
  });
});

document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".topico");
    const curto = card.querySelector(".texto-curto");
    const completo = card.querySelector(".texto-completo");

    if (completo.style.display === "none" || completo.style.display === "") {
      completo.style.display = "block";
      curto.style.display = "none";
      btn.textContent = "Ler menos";
    } else {
      completo.style.display = "none";
      curto.style.display = "block";
      btn.textContent = "Ler mais";
    }
  });
});
