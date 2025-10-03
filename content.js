/* Site content stored separately so it's easy to update */
const siteContent = {
  title: "Моё портфолио",
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ],
  hero: {
    heading: 'Привет, я Иван',
    subheading: 'Я создаю современные веб-приложения и красивые интерфейсы.'
  },
  about: {
    html: `<p>Я фронтенд-разработчик с опытом создания SPA, адаптивных сайтов и UI-компонентов. Люблю чистый код и хорошую типографику.</p>`
  },
  projects: [
    { title: 'Project Alpha', img: 'assets/project1.jpg', desc: 'SPA с динамическими данными', url: '#' },
    { title: 'Project Beta', img: 'assets/project2.jpg', desc: 'Интерактивный UI', url: '#' },
    { title: 'Project Gamma', img: 'assets/project3.jpg', desc: 'Кроссплатформенный прототип', url: '#' }
  ],
  contact: {
    email: 'me@example.com',
    socials: { github: 'https://github.com/', linkedin: '#', twitter: '#' }
  }
};

// Expose to global so other scripts can use it without module bundler
window.siteContent = siteContent;
