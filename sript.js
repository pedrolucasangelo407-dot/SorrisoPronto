// script.js

// Smooth scroll para links internos (se algum dia você adicionar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Log de confirmação
console.log("SorrisoFeito: site carregado e funcional!");

// Opcional: botão flutuante WhatsApp (se quiser futuramente)
const whatsappBtn = document.createElement('a');
whatsappBtn.href = "https://wa.me/5545991002660?text=Quero%20agendar%20minha%20consulta";
whatsappBtn.target = "_blank";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25D366";
whatsappBtn.style.color = "white";
whatsappBtn.style.padding = "15px 20px";
whatsappBtn.style.borderRadius = "50px";
whatsappBtn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
whatsappBtn.style.fontSize = "1.2rem";
whatsappBtn.style.zIndex = "1000";
whatsappBtn.textContent = "WhatsApp";
document.body.appendChild(whatsappBtn);