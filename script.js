// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// WhatsApp fixo já existe no HTML, mas podemos reforçar
const whatsappFloat = document.getElementById("whatsappFloat");

// Hamburger mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha menu ao clicar em algum link
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

console.log("SorrisoPronto: site carregado com JS funcional!");