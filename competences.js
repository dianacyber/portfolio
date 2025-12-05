// Animation badges Compétences / Outils au scroll
const badges = document.querySelectorAll('.competences-category ul li');

const showBadges = () => {
    badges.forEach(badge => {
        const rect = badge.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            badge.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', showBadges);
window.addEventListener('load', showBadges);


