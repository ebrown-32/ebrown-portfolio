function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggleContainer = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const sunAnimation = document.getElementById('sun-animation');
const moonAnimation = document.getElementById('moon-animation');

themeToggleContainer.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        lightIcon.style.display = 'inline-block';
        darkIcon.style.display = 'none';

        // Moon animation
        moonAnimation.style.bottom = '70%';
        moonAnimation.style.opacity = '1';
        setTimeout(() => {
            moonAnimation.style.opacity = '0';
        }, 1000); // Fade out after 1 second

    } else {
        body.classList.add('light-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline-block';

        // Sun animation
        sunAnimation.style.bottom = '70%';
        sunAnimation.style.opacity = '1';
        setTimeout(() => {
            sunAnimation.style.opacity = '0';
        }, 1000); // Fade out after 1 second
    }

    // Reset position after animation ends
    setTimeout(() => {
        sunAnimation.style.bottom = '-10%';
        moonAnimation.style.bottom = '-10%';
    }, 2000); // Reset after 2 seconds
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

