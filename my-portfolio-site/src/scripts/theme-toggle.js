// theme-toggle.js

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, and apply it
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
body.classList.add(currentTheme);

// Toggle theme and save preference
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
});