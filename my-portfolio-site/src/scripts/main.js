// This file contains the main JavaScript code for the website, handling DOM manipulation and event listeners.

document.addEventListener("DOMContentLoaded", () => {
    // Load content from JSON files
    loadContent();
    loadProjects();

    // Add event listener for the contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleContactFormSubmit);
    }
});

function loadContent() {
    fetch('./content/content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("welcome-text").innerText = data.welcomeText;
            // Additional content loading can be done here
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadProjects() {
    fetch('./content/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById("projects-container");
            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "project-card";
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (validateEmail(email)) {
        alert("Thank you for your message!");
        // Here you would typically send the form data to a server
        event.target.reset();
    } else {
        alert("Please enter a valid email address.");
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}