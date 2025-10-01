// js/modals.js - Modal and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Service modal functionality
    const serviceModal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtns = document.querySelectorAll('.close-modal, #close-modal');
    const serviceDetailLinks = document.querySelectorAll('.service-detail-link');

    const serviceDetails = {
        industrial: {
            title: 'Industrial Scrap Management',
            content: '<p>Our industrial scrap management program is designed specifically for manufacturing facilities, production plants, and industrial operations. We provide:</p><ul class="mt-4 space-y-2"><li>• Customized collection schedules to match your production cycles</li><li>• On-site containers tailored to your space and volume requirements</li><li>• Detailed reporting on material recovery and revenue generation</li><li>• Compliance documentation for environmental reporting</li><li>• Maximized value through proper material separation and preparation</li></ul><p class="mt-4">We work with facilities of all sizes, from small machine shops to large manufacturing plants, helping turn waste streams into revenue streams.</p>'
        },
        demolition: {
            title: 'Demolition Services',
            content: '<p>As a full-service demolition recycling partner, we handle all aspects of metal recovery from demolition sites:</p><ul class="mt-4 space-y-2"><li>• Pre-demolition assessment and planning</li><li>• On-site container placement for efficient material collection</li><li>• Safe handling of structural steel, rebar, and other demolition metals</li><li>• Coordination with demolition crews to minimize project delays</li><li>• Complete documentation for LEED certification if required</li></ul><p class="mt-4">Our experienced team understands demolition timelines and works efficiently to keep your project on schedule while maximizing the value of recovered materials.</p>'
        },
        'roll-off': {
            title: 'Roll-Off Container Services',
            content: '<p>Our roll-off container service provides reliable waste management solutions for construction, industrial, and commercial projects:</p><ul class="mt-4 space-y-2"><li>• 20, 30, and 40-yard container options</li><li>• Flexible rental periods to match project timelines</li><li>• Timely delivery and pickup with our modern fleet</li><li>• Competitive pricing with no hidden fees</li><li>• Service throughout Texas and Kansas</li></ul><p class="mt-4">Whether you need a single container for a small renovation or multiple containers for a large construction project, we have the capacity and flexibility to meet your needs.</p>'
        },
        public: {
            title: 'Public & Small Business Services',
            content: '<p>Our recycling yards are open to the public and small businesses, providing convenient options for disposing of scrap metal:</p><ul class="mt-4 space-y-2"><li>• Convenient hours and locations throughout Texas and Kansas</li><li>• Competitive pricing for all types of scrap metal</li><li>• State-certified scales ensuring accurate weight measurements</li><li>• Friendly staff to assist with unloading and material sorting</li><li>• Payment options including cash, check, or direct deposit</li></ul><p class="mt-4">We accept a wide range of materials from individuals and small businesses, including vehicles, appliances, construction debris, and more. Our clean, organized facilities make recycling easy and efficient.</p>'
        }
    };

    serviceDetailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const service = e.target.closest('.service-detail-link').getAttribute('data-service');
            modalTitle.textContent = serviceDetails[service].title;
            modalContent.innerHTML = serviceDetails[service].content;
            serviceModal.style.display = 'flex';
        });
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            serviceModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside content
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.style.display = 'none';
        }
    });

    // Live chat functionality
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.querySelector('.chat-window');

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
        });
    }

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');
            
            // Toggle current answer
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
            
            // Close other answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('svg');
                    otherAnswer.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });

    // Pricing calculator functionality
    const materialType = document.getElementById('material-type');
    const materialWeight = document.getElementById('material-weight');
    const calculateBtn = document.getElementById('calculate-value');
    const calculationResult = document.getElementById('calculation-result');
    const estimatedValue = document.getElementById('estimated-value');

    // Sample pricing data (in dollars per pound)
    const priceData = {
        copper: 3.25,
        aluminum: 0.85,
        steel: 0.12,
        brass: 1.75
    };

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const type = materialType.value;
            const weight = parseFloat(materialWeight.value);
            
            if (isNaN(weight) || weight <= 0) {
                alert('Please enter a valid weight');
                return;
            }
            
            const pricePerPound = priceData[type];
            const totalValue = (weight * pricePerPound).toFixed(2);
            
            estimatedValue.textContent = `$${totalValue}`;
            calculationResult.classList.remove('hidden');
        });
    }
});