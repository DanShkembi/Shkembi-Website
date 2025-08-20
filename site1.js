// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Active link highlight on scroll
const links = document.querySelectorAll('.site-nav a');
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.site-nav a[href="#' + id + '"]');
      if (link) {
        if (entry.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  },
  { rootMargin: '-50% 0px -40% 0px', threshold: 0.1 }
);
sections.forEach(sec => observer.observe(sec));

// Contact form fallback: open a mail draft if no backend action is set
const form = document.getElementById('contact-form');
if (form && !form.getAttribute('action')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:31shkembi@gmail.com?subject=Portfolio Contact&body=${body}`;
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
