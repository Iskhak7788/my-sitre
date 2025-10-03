function sayHello() {
  alert("Hello! The site is working. �");
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Parallax simple implementation
  var layers = document.querySelectorAll('.parallax-hero .layer');
  if (layers.length) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || window.pageYOffset;
      layers.forEach(function (layer) {
        var depth = parseFloat(layer.getAttribute('data-speed')) || 0.5;
        var movement = -(scrolled * depth);
        layer.style.transform = 'translate3d(0,' + movement + 'px,0)';
      });
    }, { passive: true });
    // trigger once to position
    window.dispatchEvent(new Event('scroll'));
  }
});
