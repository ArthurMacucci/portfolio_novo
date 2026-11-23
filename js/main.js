document.addEventListener('DOMContentLoaded', () => {
  iniciarMenuMobile();
  iniciarFiltroTrimestre();
  iniciarLightbox();
});

/* ---------- Menu mobile (abre/fecha a coluna de abas em telas estreitas) ---------- */
function iniciarMenuMobile() {
  const botao = document.querySelector('[data-acao="abrir-menu"]');
  const indice = document.querySelector('.indice');
  if (!botao || !indice) return;

  botao.addEventListener('click', () => {
    const aberto = indice.classList.toggle('aberta');
    botao.setAttribute('aria-expanded', String(aberto));
  });

  // fecha o menu ao clicar em um link (útil no celular)
  indice.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => indice.classList.remove('aberta'));
  });
}

/* ---------- Filtro por trimestre nas páginas de área ---------- */
function iniciarFiltroTrimestre() {
  const botoes = document.querySelectorAll('.filtro-trimestre__botao');
  const blocos = document.querySelectorAll('[data-trimestre]');
  if (!botoes.length || !blocos.length) return;

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      botoes.forEach((b) => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      const alvo = botao.dataset.filtro; // "todos", "1", "2" ou "3"
      blocos.forEach((bloco) => {
        const mostrar = alvo === 'todos' || bloco.dataset.trimestre === alvo;
        bloco.style.display = mostrar ? '' : 'none';
      });
    });
  });
}

/* ---------- Lightbox: clique em uma foto de evidência para ampliar ---------- */
function iniciarLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const imagemGrande = lightbox.querySelector('img');
  const botaoFechar = lightbox.querySelector('.lightbox__fechar');

  document.querySelectorAll('.evidencias__foto img').forEach((img) => {
    img.addEventListener('click', () => {
      imagemGrande.src = img.src;
      imagemGrande.alt = img.alt;
      lightbox.classList.add('aberto');
    });
  });

  function fechar() { lightbox.classList.remove('aberto'); imagemGrande.src = ''; }

  botaoFechar.addEventListener('click', fechar);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) fechar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar(); });
}
