document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Animation ---
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                animateHero();
            }, 500);
        }, 1000);
    });

    // --- Custom Cursor ---
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursor-dot');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .portfolio-item, .card-service, input').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = 'rgba(255,255,255,0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });

    // --- Hero Entrance Animation ---
    function animateHero() {
        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        const btns = document.querySelector('.hero-btns');

        title.style.transition = 'all 1.2s ease-out';
        subtitle.style.transition = 'all 1.2s ease-out 0.3s';
        btns.style.transition = 'all 1.2s ease-out 0.6s';

        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        btns.style.opacity = '1';
        btns.style.transform = 'translateY(0)';
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- Smart Navbar Scroll ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Background change on scroll
        if (currentScroll > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        // Hide/Show logic
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // Scrolling down - Hide
            navbar.classList.add('nav-hidden');
        } else {
            // Scrolling up - Show
            navbar.classList.remove('nav-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });



    // --- Before/After Slider ---
    const slider = document.getElementById('ba-slider');
    const afterImage = document.querySelector('.ba-after');

    if (slider && afterImage) {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            afterImage.style.clipPath = `inset(0 0 0 ${val}%)`;
        });
    }

    // --- Parallax Effect on Hero Img ---
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            heroImg.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.2}px)`;
        }
    });

});
