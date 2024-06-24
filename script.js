document.addEventListener("DOMContentLoaded", function() {
    const seedBoxes = document.querySelectorAll('.seed-box');
    seedBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'translateY(-10px)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'translateY(0)';
        });
    });
});
