const heroVideo = document.getElementById('heroVideo');

// Initialize smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Play and mute the hero video on scroll
window.addEventListener('scroll', function () {
  const heroPos = heroVideo.offsetTop;
  const scrollPos = window.scrollY;
  if (scrollPos >= heroPos - window.innerHeight / 2) {
    heroVideo.play();
  } else {
    heroVideo.pause();
  }
});

// Add subtle hover animation to testimonials
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.classList.add('hovering');
  });
  card.addEventListener('mouseleave', function () {
    this.classList.remove('hovering');
  });
});

// Add parallax effect to features section
const featuresCards = document.querySelectorAll('.featured-card');
featuresCards.forEach(card => {
  card.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    card.style.transform = `translate(-${x * 5}px, -${y * 5}px)`;
  });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('[data-reveal]');
revealElements.forEach(element => {
  const revealPos = element.offsetTop;
  window.addEventListener('scroll', function () {
    if (window.scrollY >= revealPos - window.innerHeight / 2) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});

// Dynamic progress bar based on scroll position
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', function () {
  const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progressBar.style.width = `${scrollProgress * 100}%`;
});

// Lightbox functionality for images and videos
const lightboxImages = document.querySelectorAll('.lightbox-image');
lightboxImages.forEach(image => {
  image.addEventListener('click', function (e) {
    e.preventDefault();
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = this.src;
    lightbox.classList.add('active');
  });
});

document.getElementById('lightbox-close').addEventListener('click', function () {
  document.getElementById('lightbox').classList.remove('active');
});

// ... Implement additional Javascript features as needed ...

