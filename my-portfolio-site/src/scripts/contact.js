document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = emailInput.value;
        const message = messageInput.value;

        if (validateEmail(email) && message.trim() !== '') {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please enter a valid email and message.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});