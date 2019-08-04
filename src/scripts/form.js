const contactForm = document.querySelector('#js-contactForm');

contactForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // TODO Validate inputs
    ev.target.reset();
    const alert = ev.target.querySelector('#js-form-alert');

    if (alert.classList.contains('show')) {
        return;
    } else {
        alert.classList.add('show');
        setTimeout(() => alert.classList.remove('show'), 3000);
    }
});