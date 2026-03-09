var menuIcon = document.querySelector(".menu-icon");
var ul = document.querySelector(".ul");
menuIcon.addEventListener("click", () => {
  if (ul.classList.contains("active")) {
    ul.classList.remove("active");
    document.querySelector(".menu-icon img").src = "Image/menu.png";
  } else {
    ul.classList.add("active");
    document.querySelector(".menu-icon img").src = "Image/close.png";
  }
});

// Função para rolar suavemente para as seções ao clicar nos links do menu
document.querySelectorAll('.ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Fecha o menu mobile após clicar
      ul.classList.remove("active");
      document.querySelector(".menu-icon img").src = "Image/menu.png";
    }
  });
});

// Função para botão "Fale comigo" rolar até contato
const faleBtn = document.querySelector('.btn-gradiente');
if (faleBtn) {
  faleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const contato = document.querySelector('#contact');
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth' });
      ul.classList.remove("active");
      document.querySelector(".menu-icon img").src = "Image/menu.png";
    }
  });
}

// Função para abrir GitHub ao clicar no card "Projetos em Destaque"
document.querySelectorAll('.card').forEach(card => {
  const titulo = card.querySelector('.titulo');
  if (titulo && titulo.textContent.includes('Projetos em Destaque')) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.open('https://github.com/GabrielSouza006', '_blank');
    });
  }
});

// Botão de voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});