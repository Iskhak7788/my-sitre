// Populate site from `siteContent` (global provided by content.js)
document.addEventListener('DOMContentLoaded', function () {
  const content = window.siteContent;
  if (!content) return;
  document.title = content.title;

  // Render nav
  const navEl = document.getElementById('nav');
  navEl.innerHTML = content.nav.map(item=>`<a href="#${item.id}">${item.label}</a>`).join('');

  // Render hero
  const hero = document.getElementById('home');
  hero.innerHTML = `<h1 data-aos="fade-up">${content.hero.heading}</h1><p data-aos="fade-up">${content.hero.subheading}</p>`;

  // About
  document.getElementById('about').innerHTML = content.about.html;

  // Projects
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = content.projects.map(p => `
    <article class="card" data-aos="zoom-in">
      <img src="${p.img}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p><a class="btn" href="${p.url}" target="_blank" rel="noopener">View</a></p>
    </article>
  `).join('');

  // Footer
  const footer = document.getElementById('footer');
  footer.innerHTML = `<div>${content.contact.email}</div><div><a href="${content.contact.socials.github}" target="_blank">GitHub</a></div>`;

  // Smooth scroll and active link on scroll
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }));

  // Tiny-slider placeholder (if needed for future slider)
  if (window.tns) {
    // Example: initialize slider when a `.projects-slider` exists
    const slider = document.querySelector('.projects-slider');
    if (slider) {
      window.tns({ container: slider, items: 1, slideBy: 'page', autoplay: false, controls: true });
    }
  }
});
