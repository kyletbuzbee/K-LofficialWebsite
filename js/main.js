// --- 1. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 700,
        once: true,
        offset: 50
    });

    // --- 2. Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- 3. Multi-Step Form Logic ---
    const form = document.getElementById('multi-step-form');
    if (form) {
        const steps = Array.from(form.querySelectorAll('.form-step'));
        const nextBtns = form.querySelectorAll('.next-btn');
        const prevBtns = form.querySelectorAll('.prev-btn');
        const serviceBtns = form.querySelectorAll('.service-btn');
        const progressBar = document.getElementById('progress-bar-fill');
        
        let currentStep = 0;
        const progressWidths = [25, 50, 75, 100];

        const showStep = (stepIndex) => {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === stepIndex);
            });
            if (progressBar) {
                progressBar.style.width = `${progressWidths[stepIndex]}%`;
            }
        }

        const goToNextStep = () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }

        serviceBtns.forEach(btn => btn.addEventListener('click', goToNextStep));
        nextBtns.forEach(btn => btn.addEventListener('click', goToNextStep));
        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            currentStep = steps.length - 1;
            showStep(currentStep);
        });

        showStep(currentStep);
    }

    // --- 4. Service Modal Logic ---
    const serviceModal = document.getElementById('service-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal, #close-modal');
    const serviceDetailLinks = document.querySelectorAll('.service-detail-link');
    const getQuoteModalBtn = document.querySelector('.get-quote-modal');

    const serviceDetails = {
        industrial: {
            title: 'Industrial Scrap Management',
            content: `<p>Our industrial scrap management program is designed for manufacturing facilities, production plants, and industrial operations. We provide:</p><ul class="mt-4 space-y-2 list-disc list-inside"><li>Customized collection schedules to match your production cycles.</li><li>On-site containers (roll-offs, gondolas, totes) tailored to your space and volume.</li><li>Detailed reporting on material recovery and revenue generation for environmental reporting.</li><li>Maximized value through proper material separation and preparation guidance.</li></ul><p class="mt-4">We partner with facilities of all sizes to turn waste streams into significant revenue streams.</p>`
        },
        demolition: {
            title: 'Demolition Services',
            content: `<p>As a full-service demolition recycling partner, we handle all aspects of metal recovery from C&D sites:</p><ul class="mt-4 space-y-2 list-disc list-inside"><li>Pre-demolition assessment to identify valuable materials and create a recovery plan.</li><li>On-site container placement for efficient material segregation and collection.</li><li>Safe and compliant handling of structural steel, rebar, wiring, and other metals.</li><li>Coordination with your demolition crews to minimize project delays.</li><li>Complete documentation for LEED certification points if required.</li></ul><p class="mt-4">Our experienced team keeps your project on schedule while maximizing the value of recovered materials.</p>`
        },
        'roll-off': {
            title: 'Roll-Off Container Services',
            content: `<p>Our roll-off container service provides reliable waste management for construction, industrial, and commercial projects:</p><ul class="mt-4 space-y-2 list-disc list-inside"><li>A range of container sizes: 20, 30, and 40-yard options available.</li><li>Flexible rental periods to match your project's specific timeline.</li><li>Timely and reliable delivery and pickup with our modern logistics fleet.</li><li>Competitive, transparent pricing with no hidden fees.</li></ul><p class="mt-4">Whether you need one container or a fleet of them, we have the capacity to meet your needs.</p>`
        },
        public: {
            title: 'Public & Small Business Services',
            content: `<p>Our recycling yards are clean, safe, and open to the public and small businesses:</p><ul class="mt-4 space-y-2 list-disc list-inside"><li>Convenient hours and locations throughout Texas and Kansas.</li><li>Competitive pricing for all types of scrap metal, from appliances to auto parts.</li><li>State-certified scales that ensure you get paid accurately for every pound.</li><li>Friendly, helpful staff to assist with unloading and material identification.</li></ul><p class="mt-4">We accept vehicles, appliances, construction debris, and much more. Recycling with us is easy and profitable.</p>`
        }
    };
    
    if (serviceModal) {
        serviceDetailLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const service = e.target.closest('.service-detail-link').dataset.service;
                document.getElementById('modal-title').textContent = serviceDetails[service].title;
                document.getElementById('modal-content').innerHTML = serviceDetails[service].content;
                serviceModal.style.display = 'flex';
            });
        });

        const closeModal = () => { serviceModal.style.display = 'none'; }
        closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));
        if (getQuoteModalBtn) {
            getQuoteModalBtn.addEventListener('click', closeModal);
        }

        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) { closeModal(); }
        });
    }

    // --- 5. Back to Top Button Logic ---
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 6. Animated Stats Counter Logic ---
    const stats = document.querySelectorAll('#stats .stat');
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target.querySelector('.count');
                    const target = +entry.target.dataset.target;
                    let count = 0;
                    const duration = 2000;
                    const stepTime = 10;
                    const totalSteps = duration / stepTime;
                    const increment = Math.ceil(target / totalSteps);

                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            clearInterval(timer);
                            el.textContent = target.toLocaleString();
                        } else {
                            el.textContent = count.toLocaleString();
                        }
                    }, stepTime);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        stats.forEach(s => observer.observe(s));
    }
});
