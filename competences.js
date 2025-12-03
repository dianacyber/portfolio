// Animation compétences au scroll
const cards = document.querySelectorAll('.card');

const showCards = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);
