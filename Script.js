// Fungsi menu & search sama seperti sebelumnya

// Tambah particles di sini
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const numParticles = 30; // jumlah partikel, bisa dikurangin kalau mau lebih ringan

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${Math.random() * 20 + 20}s`; // 20-40 detik

    particlesContainer.appendChild(particle);
  }
}

// Jalankan saat load
window.addEventListener('load', createParticles);

// Fungsi toggleMenu, scrollToTop, focusSearch sama seperti sebelumnya
function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  toggleMenu();
}

function focusSearch() {
  document.getElementById('searchInput').focus();
  toggleMenu();
}

const search = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

search.addEventListener('input', function() {
  const term = this.value.toLowerCase().trim();
  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const desc = card.querySelector('.card-desc').textContent.toLowerCase();
    card.style.display = (title.includes(term) || desc.includes(term)) ? '' : 'none';
  });
});
