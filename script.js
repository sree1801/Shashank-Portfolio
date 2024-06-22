// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cyclist = document.getElementById('cyclist');
    const stages = document.querySelectorAll('.stage');
    let currentStage = 0;

    const moveCyclist = () => {
        stages.forEach(stage => stage.classList.remove('active'));
        stages[currentStage].classList.add('active');
        cyclist.style.left = `${(currentStage) * 33.33}%`;
    };

    moveCyclist();

    setInterval(() => {
        currentStage = (currentStage + 1) % stages.length;
        moveCyclist();
    }, 5000); // Change stage every 5 seconds
});
