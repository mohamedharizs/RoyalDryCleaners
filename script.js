/**
 * Royal Dry Cleaners (RDC) - Final JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {

    const renderSharedLayout = () => {
        const page = document.body.dataset.page || 'home';
        const headerHolder = document.getElementById('sharedHeader');
        const footerHolder = document.getElementById('sharedFooter');

        if (headerHolder) {
            headerHolder.innerHTML = `
                <div class="top-bar">
                    <div class="container top-bar-container">
                        <div class="top-info">
                            <span class="info-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.92z" />
                                </svg>
                                <a href="tel:+919176228372">+91 91762 28372</a>
                            </span>
                            <span class="info-item desktop-only">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                Saraswati Complex, Avadi, Chennai - 600071
                            </span>
                            <span class="info-item desktop-only">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                Hours: 10:00 AM - 9:00 PM (Daily)
                            </span>
                        </div>
                        <div class="top-social">
                            <a href="https://wa.me/916379094144?text=Hello%20Royal%20Dry%20Cleaners%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor" class="icon">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.378 0 9.754-4.373 9.758-9.75.002-2.605-1.01-5.056-2.85-6.898-1.84-1.84-4.291-2.85-6.893-2.852-5.385 0-9.761 4.373-9.765 9.751-.002 1.999.52 3.95 1.512 5.671l-.991 3.616 3.728-.978zm10.226-5.834c-.279-.14-1.65-.815-1.906-.907-.256-.092-.443-.139-.629.14-.186.279-.718.907-.881 1.092-.163.186-.325.209-.604.069-.279-.14-1.18-.435-2.247-1.388-.83-.74-1.389-1.654-1.55-1.933-.163-.28-.018-.431.122-.57.126-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.14-.629-1.517-.861-2.074-.226-.543-.454-.47-.629-.479-.163-.008-.349-.01-.535-.01-.186 0-.488.069-.743.349-.256.279-.976.953-.976 2.325 0 1.371 1.001 2.697 1.14 2.883.14.186 1.966 3.003 4.764 4.21.666.287 1.185.459 1.59.588.669.213 1.28.183 1.761.111.537-.08 1.65-.674 1.883-1.326.232-.651.232-1.209.163-1.326-.069-.117-.256-.186-.535-.327z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <header class="main-header">
                    <div class="container header-container">
                        <a href="index.html" class="logo-area">
                            <img src="logo.png" alt="Royal Dry Cleaners Logo" class="header-logo">
                            <div class="logo-text">
                                <span class="brand-name">ROYAL DRY CLEANERS</span>
                                <span class="brand-tagline">RDC • Premium Garment Care</span>
                            </div>
                        </a>

                        <nav class="nav-menu" id="navMenu">
                            <ul>
                                <li class="nav-item dropdown-parent">
                                    <a href="index.html" class="nav-link ${page === 'home' ? 'active' : ''}">Home</a>
                                    <div class="dropdown-menu">
                                        <a href="index.html#about" class="dropdown-link">About Us</a>
                                        <a href="index.html#why-choose-us" class="dropdown-link">Why Choose Us</a>
                                        <a href="index.html#services" class="dropdown-link">Services Overview</a>
                                        <a href="index.html#service-process" class="dropdown-link">Service Process</a>
                                        <a href="index.html#reviews" class="dropdown-link">Reviews</a>
                                        <a href="index.html#gallery" class="dropdown-link">Gallery</a>
                                    </div>
                                </li>
                                <li class="nav-item"><a href="services.html" class="nav-link ${page === 'services' ? 'active' : ''}">Services</a></li>
                                <li class="nav-item"><a href="contact.html" class="nav-link ${page === 'contact' ? 'active' : ''}">Contact</a></li>
                            </ul>
                        </nav>

                        <div class="header-actions">
                            <a href="tel:+919176228372" class="btn btn-call-now desktop-only">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="btn-icon">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.92z" />
                                </svg>
                                Call Now
                            </a>
                            <button class="burger-menu" id="burgerMenu" aria-label="Toggle Navigation Menu">
                                <span class="line line-1"></span>
                                <span class="line line-2"></span>
                                <span class="line line-3"></span>
                            </button>
                        </div>
                    </div>
                </header>`;
        }

        if (footerHolder) {
            footerHolder.innerHTML = `
                <footer class="main-footer">
                    <div class="container footer-grid grid-4">
                        <div class="footer-brand">
                            <div class="footer-logo-area">
                                <img src="logo.png" alt="RDC Logo" class="footer-logo">
                                <span class="footer-brand-name">Royal Dry Cleaners</span>
                            </div>
                            <p class="footer-desc">Professional garment care and laundry services in Avadi. We deliver trusted dry cleaning, ironing, and premium fabric care with fast turnaround and exceptional finishing.</p>
                            <div class="footer-social-icons">
                                <a href="https://wa.me/916379094144?text=Hello%20Royal%20Dry%20Cleaners%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" fill="currentColor" class="footer-social-icon">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.378 0 9.754-4.373 9.758-9.75.002-2.605-1.01-5.056-2.85-6.898-1.84-1.84-4.291-2.85-6.893-2.852-5.385 0-9.761 4.373-9.765 9.751-.002 1.999.52 3.95 1.512 5.671l-.991 3.616 3.728-.978zm10.226-5.834c-.279-.14-1.65-.815-1.906-.907-.256-.092-.443-.139-.629.14-.186.279-.718.907-.881 1.092-.163.186-.325.209-.604.069-.279-.14-1.18-.435-2.247-1.388-.83-.74-1.389-1.654-1.55-1.933-.163-.28-.018-.431.122-.57.126-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.14-.629-1.517-.861-2.074-.226-.543-.454-.47-.629-.479-.163-.008-.349-.01-.535-.01-.186 0-.488.069-.743.349-.256.279-.976.953-.976 2.325 0 1.371 1.001 2.697 1.14 2.883.14.186 1.966 3.003 4.764 4.21.666.287 1.185.459 1.59.588.669.213 1.28.183 1.761.111.537-.08 1.65-.674 1.883-1.326.232-.651.232-1.209.163-1.326-.069-.117-.256-.186-.535-.327z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="footer-links">
                            <h4>Quick Navigation</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer-links">
                            <h4>Services Offered</h4>
                            <ul>
                                <li><a href="services.html">Dry Cleaning</a></li>
                                <li><a href="services.html">Laundry Wash & Fold</a></li>
                                <li><a href="services.html">Steam Ironing</a></li>
                                <li><a href="services.html">Saree & Silk Care</a></li>
                                <li><a href="services.html">Petrol Wash</a></li>
                                <li><a href="services.html">Carpet Cleaning</a></li>
                            </ul>
                        </div>

                        <div class="footer-contact">
                            <h4>Contact Details</h4>
                            <p><strong>ROYAL DRY CLEANERS</strong><br>Saraswati Complex,<br>Near Govardhanagiri Bus Stop,<br>Avadi, Chennai - 600071</p>
                            <p class="margin-top-sm"><strong>Phone:</strong> <a href="tel:+919176228372">+91 91762 28372</a><br><strong>Alternate:</strong> <a href="tel:+916379094144">+91 63790 94144</a><br><strong>Hours:</strong> 10:00 AM - 9:00 PM (Mon - Sun)</p>
                        </div>
                    </div>

                    <div class="footer-bottom text-center">
                        <div class="container">
                            <p>&copy; 2026 ROYAL DRY CLEANERS (RDC) Avadi. All rights reserved.</p>
                            <p class="seo-keywords">Best Dry Cleaners in Avadi | Laundry Service in Avadi | Dry Cleaning Chennai | Laundry Near Me | Saree Dry Cleaning | Steam Ironing Service Avadi</p>
                        </div>
                    </div>
                </footer>

                <!-- Floating Contact Bar -->
                <div class="floating-contact-bar" role="complementary" aria-label="Quick Contact Buttons">
                    <div class="floating-contact-button" aria-label="WhatsApp Us">
                        <a href="https://wa.me/916379094144?text=Hello%20Royal%20Dry%20Cleaners%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" class="floating-contact-link whatsapp" aria-label="WhatsApp Us">
                            <i class="fab fa-whatsapp"></i>
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.378 0 9.754-4.373 9.758-9.75.002-2.605-1.01-5.056-2.85-6.898-1.84-1.84-4.291-2.85-6.893-2.852-5.385 0-9.761 4.373-9.765 9.751-.002 1.999.52 3.95 1.512 5.671l-.991 3.616 3.728-.978zm10.226-5.834c-.279-.14-1.65-.815-1.906-.907-.256-.092-.443-.139-.629.14-.186.279-.718.907-.881 1.092-.163.186-.325.209-.604.069-.279-.14-1.18-.435-2.247-1.388-.83-.74-1.389-1.654-1.55-1.933-.163-.28-.018-.431.122-.57.126-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.14-.629-1.517-.861-2.074-.226-.543-.454-.47-.629-.479-.163-.008-.349-.01-.535-.01-.186 0-.488.069-.743.349-.256.279-.976.953-.976 2.325 0 1.371 1.001 2.697 1.14 2.883.14.186 1.966 3.003 4.764 4.21.666.287 1.185.459 1.59.588.669.213 1.28.183 1.761.111.537-.08 1.65-.674 1.883-1.326.232-.651.232-1.209.163-1.326-.069-.117-.256-.186-.535-.327z"/>
                            </svg>
                        </a>
                        <span class="floating-contact-label">WhatsApp Us</span>
                    </div>
                    <div class="floating-contact-button" aria-label="Call Now">
                        <a href="tel:+919176228372" class="floating-contact-link call" aria-label="Call Now">
                             <i class="fas fa-phone-alt"></i>
                        </a>
                        <span class="floating-contact-label">Call Now</span>
                    </div>
                    <div class="floating-contact-button" aria-label="Get Directions">
                        <a href="https://www.google.com/search?sca_esv=6c41df8803dda356&rlz=1C1CHBF_enIN1078IN1078&cs=1&output=search&kgmid=%2Fg%2F11zkx10lqb&q=ROYAL%20DRY%20CLEANERS&shem=dlvsc%2Crimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=dc12240c7826b0e2" target="_blank" class="floating-contact-link directions" aria-label="Get Directions">
                            <i class="fas fa-map-marker-alt"></i>
                        </a>
                        <span class="floating-contact-label">Get Directions</span>
                    </div>
                </div>

                <a href="#" class="back-to-top" id="backToTop" aria-label="Scroll Back to Top">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="top-icon">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                    </svg>
                </a>`;
        }
    };

    renderSharedLayout();

    const sectionIds = ['home', 'about', 'why-choose-us', 'services', 'service-process', 'reviews', 'gallery', 'contact'];
    const dropdownNavLinks = Array.from(document.querySelectorAll('.dropdown-link[data-section]'));
    const headerNavLinks = Array.from(document.querySelectorAll('.nav-link'));

    const setActiveNav = (id) => {
        dropdownNavLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
        });

        headerNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            } else if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                link.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
            const id = visibleEntry.target.id;
            setActiveNav(id);
        }
    }, {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6]
    });

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }
    });

    document.querySelectorAll('.dropdown-link[data-section]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href')?.replace('#', '');
            if (!targetId) return;

            event.preventDefault();
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', `#${targetId}`);
                setActiveNav(targetId);
                if (window.matchMedia('(max-width: 1024px)').matches) {
                    closeMenu();
                }
            }
        });
    });

    if (window.emailjs) {
        window.emailjs.init('TQnM6WjcwRceWW1pz');
    }

    document.querySelectorAll('form.contact-form').forEach((form) => {
        const submitButton = form.querySelector('button[type="submit"]');
        const feedback = form.parentElement.querySelector('.form-feedback');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (!submitButton || !feedback || !window.emailjs) {
                feedback?.classList.remove('hidden');
                feedback?.classList.add('error');
                feedback.textContent = 'Failed to send enquiry. Please try again.';
                return;
            }

            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            feedback.classList.add('hidden');
            feedback.className = 'form-feedback hidden';

            try {
                const response = await window.emailjs.sendForm(
                    'service_84sel4l',
                    'template_xfxo1sk',
                    form,
                    'TQnM6WjcwRceWW1pz'
                );

                if (response.status === 200) {
                    feedback.textContent = 'Thank you! Your enquiry has been sent successfully.';
                    feedback.classList.remove('hidden');
                    feedback.classList.add('success');
                    form.reset();
                } else {
                    throw new Error('EmailJS request failed');
                }
            } catch (error) {
                feedback.textContent = 'Failed to send enquiry. Please try again.';
                feedback.classList.remove('hidden');
                feedback.classList.add('error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    });

    // ==========================================
    // 1. Sticky Header scroll effect
    // ==========================================
    const header = document.querySelector('.main-header');
    
    const handleScrollHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScrollHeader);
    handleScrollHeader(); // Initial check on load


    // ==========================================
    // 2. Mobile Menu Navigation
    // ==========================================
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    const isDesktop = () => window.matchMedia('(min-width: 1025px)').matches;

    const toggleMenu = () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        dropdownParents.forEach(parent => parent.classList.remove('open'));
    };

    burgerMenu.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!isDesktop()) {
                closeMenu();
            }
        });
    });

    document.querySelectorAll('.dropdown-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    dropdownParents.forEach(parent => {
        const trigger = parent.querySelector('.dropdown-trigger');

        parent.addEventListener('mouseenter', () => {
            if (isDesktop()) {
                parent.classList.add('open');
            }
        });

        parent.addEventListener('mouseleave', () => {
            if (isDesktop()) {
                parent.classList.remove('open');
            }
        });

        if (trigger) {
            trigger.addEventListener('click', (event) => {
                if (!isDesktop()) {
                    event.preventDefault();
                    parent.classList.toggle('open');
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-parent')) {
            dropdownParents.forEach(parent => parent.classList.remove('open'));
        }
    });


    // ==========================================
    // 3. Scrollspy - Highlight active nav link
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    const scrollspy = () => {
        const scrollPosition = window.scrollY + 120; // offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (targetLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollspy);
    scrollspy(); // Initial call


    // ==========================================
    // 4. Scroll Entrance Animations (Intersection Observer)
    // ==========================================
    const animElements = document.querySelectorAll('.scroll-animate');

    if ('IntersectionObserver' in window) {
        const animObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animElements.forEach(el => animObserver.observe(el));
    } else {
        // Fallback for older browsers
        animElements.forEach(el => el.classList.add('active'));
    }


    // ==========================================
    // 5. Contact Form Validation & WhatsApp Booking
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get Form Values
            const nameVal = document.getElementById('formName').value.trim();
            const phoneVal = document.getElementById('formPhone').value.trim();
            const serviceVal = document.getElementById('formService').value;
            const messageVal = document.getElementById('formMessage').value.trim();

            // Validation Checks
            if (nameVal.length < 2) {
                showFeedback('Please enter a valid full name (minimum 2 characters).', 'error');
                return;
            }

            // Validate Phone (Accept standard Indian numbers, 10 digits required)
            const numericPhone = phoneVal.replace(/[\s\-\(\)\+]/g, '');
            if (numericPhone.length < 10) {
                showFeedback('Please enter a valid phone number (at least 10 digits).', 'error');
                return;
            }

            showFeedback('Registering your request...', 'success');
            
            setTimeout(() => {
                const intro = "Hello Royal Dry Cleaners, I would like to know more about your services.";
                const details = `\n\n--- Online Inquiry ---\nName: ${nameVal}\nPhone: ${phoneVal}\nService Selected: ${serviceVal}\nInstructions: ${messageVal ? messageVal : "None"}`;
                
                const whatsappText = encodeURIComponent(intro + details);
                const whatsappLink = `https://wa.me/916379094144?text=${whatsappText}`;

                formFeedback.innerHTML = `
                    <div class="success-message">
                        <p><strong>Thank you, ${nameVal}!</strong> Your inquiry for <strong>${serviceVal}</strong> has been received.</p>
                        <p class="margin-top-sm">To verify details immediately, click below to send your ticket directly to our WhatsApp:</p>
                        <a href="${whatsappLink}" target="_blank" class="btn btn-whatsapp margin-top-sm btn-block">
                            Send WhatsApp Ticket
                        </a>
                    </div>
                `;
                formFeedback.className = 'form-feedback success';
                contactForm.reset();
            }, 1200);
        });
    }

    const showFeedback = (message, type) => {
        if (!formFeedback) return;
        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.classList.remove('hidden');
    };


    // ==========================================
    // 6. Other Services Popup
    // ==========================================
    const openOtherServices = document.getElementById('openOtherServices');
    const otherServicesModal = document.getElementById('otherServicesModal');
    const closeOtherServices = document.getElementById('closeOtherServices');

    if (openOtherServices && otherServicesModal && closeOtherServices) {
        const openModal = () => {
            otherServicesModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            otherServicesModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        openOtherServices.addEventListener('click', openModal);
        closeOtherServices.addEventListener('click', closeModal);
        otherServicesModal.addEventListener('click', (event) => {
            if (event.target === otherServicesModal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    }

    // ==========================================
    // 7. Back-To-Top Button
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
    }

});
