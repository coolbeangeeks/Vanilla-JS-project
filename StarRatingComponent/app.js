const stars = document.querySelectorAll('.bi-star-fill');
const ratingValue = document.getElementById('rating-value');


stars.forEach(star => {
    star.addEventListener('click', () => {
        const index = parseInt(star.getAttribute('data-index'));

        stars.forEach((s, i) => {
            if (i < index) {
                s.classList.add('filled');
            } else {
                s.classList.remove('filled');
            }
        });

        ratingValue.textContent = index;
    });
});