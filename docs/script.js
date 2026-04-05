// ===== Theme =====
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const moonIcon = themeBtn.querySelector('.icon-moon');
const sunIcon = themeBtn.querySelector('.icon-sun');

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

const saved = localStorage.getItem('theme') || getSystemTheme();
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// ===== Mobile Sidebar =====
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ===== Load README via marked.js =====
const README_URL = 'https://raw.githubusercontent.com/heilcheng/awesome-agent-skills/main/README.md';

async function loadReadme() {
  const container = document.getElementById('readmeBody');
  try {
    const res = await fetch(README_URL);
    if (!res.ok) throw new Error('Failed to fetch README');
    const text = await res.text();

    // Configure marked
    marked.setOptions({
      gfm: true,
      breaks: false,
      headerIds: true,
      mangle: false,
    });

    container.innerHTML = marked.parse(text);
    linkSidebarToContent();
    activeSidebarOnScroll();
  } catch (err) {
    container.innerHTML = '<p style="color:var(--text-muted)">Could not load README. <a href="https://github.com/heilcheng/awesome-agent-skills">View on GitHub</a>.</p>';
  }
}

// ===== Sidebar Active Tracking =====
function linkSidebarToContent() {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) {
      // Try to match heading text
      const id = href.replace('#', '');
      const headings = document.querySelectorAll('h1,h2,h3');
      headings.forEach(h => {
        const hid = h.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
        if (hid === id || h.id === id) {
          h.id = id;
        }
      });
    }
  });
}

function activeSidebarOnScroll() {
  const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-52px 0px -60% 0px' });

  document.querySelectorAll('h2, h3').forEach(h => {
    if (h.id) observer.observe(h);
  });
}

loadReadme();
