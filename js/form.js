// js/forms.js - Form functionality
document.addEventListener('DOMContentLoaded', () => {
    // Multi-step form functionality
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const serviceBtns = document.querySelectorAll('.service-btn');
    const form = document.getElementById('multi-step-form');
    const progressBar = document.getElementById('progress-bar-fill');

    if (progressBar) {
        progressBar.style.width = '25%';
    }
    
    let currentStep = 0;
    const progressWidths = [25, 50, 75, 100];

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        if (progressBar) {
            progressBar.style.width = `${progressWidths[stepIndex]}%`;
        }
    }

    function goToNextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    serviceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            goToNextStep();
        });
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', goToNextStep);
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to your server
            currentStep = steps.length - 1;
            showStep(currentStep);
        });
    }

    if (steps.length > 0) {
        showStep(currentStep);
    }

    // Form auto-save functionality
    const formInputs = form ? form.querySelectorAll('input, textarea, select') : [];

    // Load saved form data
    formInputs.forEach(input => {
        const savedValue = localStorage.getItem(`form_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    // Save form data on input
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            localStorage.setItem(`form_${input.name}`, input.value);
        });
    });

    // Clear saved data on form submit
    if (form) {
        form.addEventListener('submit', () => {
            formInputs.forEach(input => {
                localStorage.removeItem(`form_${input.name}`);
            });
        });
    }
});