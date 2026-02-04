// ==============================
// SorrisoPronto JS
// ==============================

// ------------------------------
// Smooth scroll para links internos
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ------------------------------
// Botão flutuante WhatsApp
// ------------------------------
(function() {
  const whatsappBtn = document.createElement('a');
  whatsappBtn.href = "https://wa.me/5545991002660?text=Olá! Quero agendar uma avaliação odontológica";
  whatsappBtn.target = "_blank";
  whatsappBtn.id = "whatsappFloat";
  whatsappBtn.textContent = "WhatsApp";

  // estilos inline já estão no CSS, então não precisa repetir aqui
  document.body.appendChild(whatsappBtn);
})();

// ------------------------------
// Menu responsivo / Mobile
// ------------------------------
(function() {
  const headerNav = document.querySelector('header nav');
  const navToggle = document.createElement('button');
  navToggle.innerHTML = '&#9776;'; // ícone de hamburger
  navToggle.style.fontSize = '1.8rem';
  navToggle.style.background = 'transparent';
  navToggle.style.border = 'none';
  navToggle.style.cursor = 'pointer';
  navToggle.style.color = '#28a745';
  navToggle.style.display = 'none'; // visível só em mobile
  navToggle.style.position = 'absolute';
  navToggle.style.top = '50%';
  navToggle.style.right = '20px';
  navToggle.style.transform = 'translateY(-50%)';
  
  const navList = headerNav.querySelector('ul');

  headerNav.style.position = 'relative';
  headerNav.appendChild(navToggle);

  // toggle menu mobile
  navToggle.addEventListener('click', () => {
    if (navList.style.display === 'flex' || navList.style.display === '') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.background = '#fff';
      navList.style.position = 'absolute';
      navList.style.top = '100%';
      navList.style.right = '0';
      navList.style.width = '200px';
      navList.style.padding = '15px';
      navList.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
  });

  // mostrar botão hamburger apenas em telas pequenas
  const checkResize = () => {
    if(window.innerWidth <= 768){
      navToggle.style.display = 'block';
      navList.style.flexDirection = 'column';
      navList.style.gap = '10px';
    } else {
      navToggle.style.display = 'none';
      navList.style.display = 'flex';
      navList.style.flexDirection = 'row';
      navList.style.gap = '25px';
      navList.style.position = 'static';
      navList.style.background = 'transparent';
      navList.style.width = 'auto';
      navList.style.padding = '0';
      navList.style.boxShadow = 'none';
    }
  }

  window.addEventListener('resize', checkResize);
  checkResize(); // rodar no carregamento também
})();

console.log("SorrisoPronto: JS carregado e funcional!");