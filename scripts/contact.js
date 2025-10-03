document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!name || !email || !message){ alert('Please fill all fields'); return; }
    if(!emailRegex.test(email)){ alert('Please enter a valid email'); return; }
    // For static GitHub Pages we can't send emails — show success alert
    alert('Спасибо! Ваше сообщение отправлено (локально).');
    form.reset();
  });
});
