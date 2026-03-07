/* ===========================
   Corelon Systems — Main JS
   =========================== */

(function () {
    'use strict';

    /* ---------- Mobile menu toggle ---------- */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('show');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        document.addEventListener('click', function (event) {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove('show');
            }
        });
    }

    /* ---------- Navbar shadow on scroll ---------- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    /* ---------- Active nav link highlight ---------- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ---------- Scroll-reveal (Intersection Observer) ---------- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealElements.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- Animated counters ---------- */
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (isNaN(target)) return;
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(start + (target - start) * eased);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
                const suffix = el.getAttribute('data-suffix');
                if (suffix) el.textContent += suffix;
            }
        }
        requestAnimationFrame(update);
    }

    const counters = document.querySelectorAll('[data-count]');
    if (counters.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) { counterObserver.observe(el); });
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');

            // close all
            document.querySelectorAll('.faq-item').forEach(function (fi) {
                fi.classList.remove('open');
            });

            // toggle clicked
            if (!wasOpen) item.classList.add('open');
        });
    });

    /* ---------- Portfolio filter ---------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            portfolioCards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                    card.style.animation = 'fadeUp 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ---------- Contact form (demo) ---------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(function () {
                submitBtn.textContent = 'Sent!';
                submitBtn.style.background = '#16a34a';
                contactForm.reset();
                setTimeout(function () {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 2500);
            }, 1200);
        });
    }

    /* ---------- Smooth scroll for same-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Back to top ---------- */
    const topBtn = document.getElementById('backToTop');
    if (topBtn) {
        window.addEventListener('scroll', function () {
            topBtn.style.display = window.scrollY > 600 ? 'flex' : 'none';
        });
        topBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Network typewriter ---------- */
    const servicesTypewriter = document.getElementById('network-typewriter');
    const typewriterDesc = document.getElementById('network-typewriter-desc');
    if (servicesTypewriter && typewriterDesc) {
        const serviceLines = [
            {
                text: 'Global Load Balancing routes traffic across 250+ PoPs instantly.',
                desc: 'Maintain expert traffic steering with instant failover and regional performance visibility.'
            },
            {
                text: 'Zero Trust Security scans every packet before it reaches your origin.',
                desc: 'Layered DDoS protection, TLS everywhere, and per-request firewall rules keep you compliant.'
            },
            {
                text: 'Instant Edge Compute runs business logic closer to the user than ever.',
                desc: 'Deploy lightweight Workers to every continent and let them autoscale with demand.'
            },
            {
                text: 'Smart Routing finds the fastest, most secure path for each request.',
                desc: 'Dynamic health checks, geographic steering, and congestion awareness let you stay online.'
            }
        ];
        let currentIdx = 0;
        let charCount = 0;
        let deleting = false;

        function updateTypewriter() {
            const { text } = serviceLines[currentIdx];
            if (!deleting) {
                charCount = Math.min(charCount + 1, text.length);
                servicesTypewriter.textContent = text.slice(0, charCount);
                if (charCount === text.length) {
                    typewriterDesc.textContent = serviceLines[currentIdx].desc;
                    deleting = true;
                    setTimeout(updateTypewriter, 1500);
                    return;
                }
                setTimeout(updateTypewriter, 60);
            } else {
                charCount = Math.max(charCount - 1, 0);
                servicesTypewriter.textContent = text.slice(0, charCount);
                if (charCount === 0) {
                    deleting = false;
                    currentIdx = (currentIdx + 1) % serviceLines.length;
                    typewriterDesc.textContent = '';
                    setTimeout(updateTypewriter, 500);
                    return;
                }
                setTimeout(updateTypewriter, 30);
            }
        }

        updateTypewriter();
    }
})();
