// Theme toggle
const themeToggle = document.getElementById("themeToggle");

function updateTheme() {
  const logo = document.getElementById("logo");
  const footerLogo = document.querySelector(".footer-logo");
  
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
    if (logo) logo.src = "assets/logo-light.png";
    if (footerLogo) footerLogo.src = "assets/logo-light.png";
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = "🌙";
    if (logo) logo.src = "assets/logo-dark.png";
    if (footerLogo) footerLogo.src = "assets/logo-dark.png";
    localStorage.setItem('theme', 'dark');
  }
}

// Check for saved theme preference on page load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}
updateTheme(); // Initial update

// Theme toggle event
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  updateTheme();
});

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navCenter = document.querySelector(".nav-center");

if (mobileMenu && navCenter) {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navCenter.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu && navCenter) {
      mobileMenu.classList.remove("active");
      navCenter.classList.remove("active");
    }
  });
});

// Active section highlight on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

console.log("Script loaded successfully!");

// Sign In Form Handling
const signinForm = document.querySelector('.signin-form');
if (signinForm) {
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simple validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send data to server
    alert('Sign in successful! Redirecting...');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
}

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Social login buttons
const googleBtn = document.querySelector('.google-btn');
const githubBtn = document.querySelector('.github-btn');

if (googleBtn) {
  googleBtn.addEventListener('click', () => {
    alert('Google sign in would be implemented here');
  });
}

if (githubBtn) {
  githubBtn.addEventListener('click', () => {
    alert('GitHub sign in would be implemented here');
  });
}

// Bas form pe alert tak rakho
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message received! We will contact you soon.');
  contactForm.reset();
});

// Sign in form ke liye bhi
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign in successful! This would connect to backend in real implementation.');
});