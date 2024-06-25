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
.average-time {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}
