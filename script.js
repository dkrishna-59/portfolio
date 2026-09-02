document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. 7-Day Dynamic Theme Engine
    const THEMES = [
        { day: 0, id: 'theme-material-you' },
        { day: 1, id: 'theme-bento-grid' },
        { day: 2, id: 'theme-glassmorphism' },
        { day: 3, id: 'theme-neubrutalism' },
        { day: 4, id: 'theme-swiss-minimal' },
        { day: 5, id: 'theme-claymorphism' },
        { day: 6, id: 'theme-linear-dark' }
    ];

    const todayIndex = new Date().getDay();
    const currentTheme = THEMES[todayIndex] || THEMES[0];
    body.setAttribute('data-theme', currentTheme.id);

    // 2. Light / Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedMode = localStorage.getItem('colorMode') || 'light';

    body.setAttribute('data-mode', savedMode);
    if (themeToggle) {
        themeToggle.checked = savedMode === 'dark';
        themeToggle.addEventListener('change', () => {
            const newMode = themeToggle.checked ? 'dark' : 'light';
            body.setAttribute('data-mode', newMode);
            localStorage.setItem('colorMode', newMode);
        });
    }

    // 3. Ripple Effect Engine
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple-circle');

        const ripple = button.getElementsByClassName('ripple-circle')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    const rippleButtons = document.querySelectorAll('.ripple');
    rippleButtons.forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', createRipple);
    });

    // 4. Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // 5. 3D Card Tilt Effect
    const tiltCards = document.querySelectorAll('.tilt');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((centerX - x) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 6. Scroll-Spy Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 7. Footer Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 8. Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for your message, Krishnarasu will get back to you soon!');
            contactForm.reset();
        });
    }
});
