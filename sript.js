// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Log de confirmação
console.log("SorrisoPronto: site carregado!");

// Caso queira ativar botão flutuante via JS, já existe CSS para #whatsappFloat