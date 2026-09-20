document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;

    // 1. 7-Day Dynamic Theme Engine (Backend Logic)
    const THEMES = [
        { day: 0, id: 'material-you' },    // Sunday
        { day: 1, id: 'bento' },          // Monday
        { day: 2, id: 'glassmorphism' },  // Tuesday
        { day: 3, id: 'neubrutalism' },   // Wednesday
        { day: 4, id: 'swiss-minimal' },  // Thursday
        { day: 5, id: 'claymorphism' },   // Friday
        { day: 6, id: 'linear-dark' }     // Saturday
    ];

    const todayIndex = new Date().getDay();
    const defaultTheme = THEMES[todayIndex] || THEMES[0];

    try {
        const activeThemeId = localStorage.getItem('selectedTheme') || defaultTheme.id;
        htmlEl.setAttribute('data-theme', activeThemeId);
    } catch (e) {
        htmlEl.setAttribute('data-theme', defaultTheme.id);
    }

    // 2. Safe Ripple Effect Engine
    function createRipple(event) {
        const button = event.currentTarget;
        if (!button) return;

        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        const rect = button.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-circle');

        const existingRipple = button.getElementsByClassName('ripple-circle')[0];
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);
    }

    document.querySelectorAll('.ripple').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', createRipple);
    });

    // 3. Scroll Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 80);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        revealObserver.observe(section);
    });

    // 4. 3D Card Tilt Effect
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 6;
            const rotateY = ((centerX - x) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 5. Scroll-Spy Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    if (navLinks.length > 0 && sections.length > 0) {
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
                const href = link.getAttribute('href');
                if (href && href.includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    // 6. Footer Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 7. Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Krishnarasu D will get back to you shortly.');
            contactForm.reset();
        });
    }
});
