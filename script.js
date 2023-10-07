function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Adjust this value based on when you'd like the animation to start (0.1 means 10% visibility)
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Unobserve since we want the animation only once
          }
      });
  }, options);

  // Select all .title elements and observe each one
  let targets = document.querySelectorAll('.title');
  targets.forEach(target => observer.observe(target));
});

