const stars = document.querySelectorAll('.bi-star-fill');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

if (localStorage.getItem('userRating')) {
    currentRating = parseInt(localStorage.getItem('userRating'));
    updateStars(currentRating);
    ratingValue.textContent = currentRating;
}
stars.forEach(star => {
    star.addEventListener('click', () => {
        const index = parseInt(star.getAttribute('data-index'));
        currentRating=index
        updateStars(currentRating);
        ratingValue.textContent = currentRating;
        localStorage.setItem("userRating",currentRating);
    });
    star.addEventListener('mouseover', () => {
        const index = parseInt(star.getAttribute('data-index'));
        updateStars(index);
        ratingValue.textContent = index;


    });
    star.addEventListener('mouseout', () => {
        updateStars(currentRating);
        ratingValue.textContent = currentRating;

    });
    
});
function updateStars(index) {
    console.log(`update ${index} value`);
    stars.forEach((s, i) => {
        if (i < index) {
            s.classList.add('filled');
        } else {
            s.classList.remove('filled');
        }
    });
}