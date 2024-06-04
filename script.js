document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetView = document.getElementById(this.getAttribute('data-target'));
        targetView.scrollIntoView({ behavior: 'smooth' });
    });
});
