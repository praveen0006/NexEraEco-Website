/**
 * NexEraEco Website - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navList.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Create mailto link
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Company: ${company || 'Not specified'}\n\n` +
                `Message:\n${message}`
            );

            const mailtoLink = `mailto:contact@nexeraeco.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            setTimeout(() => {
                alert('Thank you for your message! Your email client should open with the message ready to send.');
            }, 500);
        });
    }

    // Scroll-triggered animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.highlight-card, .step, .team-card, .gallery__item, .roadmap__item'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class handler
    document.head.insertAdjacentHTML('beforeend', `
    <style>
      .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    </style>
  `);

    // Active nav link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav__link');

    navLinksAll.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // If this wasn't active, open it
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Add new elements to scroll animation observer
    const newAnimateElements = document.querySelectorAll(
        '.ip-card, .validation-card, .download-card, .faq-item, .partner-type-card, .spec-card, .benefit-card'
    );

    newAnimateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;

            // For now, show a success message (integrate with email service later)
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            newsletterForm.reset();
        });
    }

    // Pilot Request Form Handling
    const pilotForm = document.getElementById('pilotForm');
    if (pilotForm) {
        pilotForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(pilotForm);
            const companyName = formData.get('companyName');
            const contactName = formData.get('contactName');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const location = formData.get('location');
            const experience = formData.get('experience');
            const interest = formData.get('interest');

            // Create mailto link
            const mailtoSubject = encodeURIComponent(`Pilot Request from ${companyName}`);
            const mailtoBody = encodeURIComponent(
                `PILOT INSTALLATION REQUEST\n\n` +
                `Company: ${companyName}\n` +
                `Contact: ${contactName}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone || 'Not provided'}\n` +
                `Region: ${location}\n` +
                `Annual Installations: ${experience || 'Not specified'}\n\n` +
                `Interest/Notes:\n${interest || 'None provided'}`
            );

            const mailtoLink = `mailto:contact@nexeraeco.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show confirmation
            setTimeout(() => {
                alert('Thank you for your interest! Your email client should open with the pilot request ready to send.');
            }, 500);
        });
    }
});
