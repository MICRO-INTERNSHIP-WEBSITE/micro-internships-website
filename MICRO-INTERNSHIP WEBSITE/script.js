// Add a scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Scroll to Top';
    scrollTopButton.id = 'scrollTopButton';
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
});
