document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница полностью загружена');

    const welcomeOverlay = document.getElementById('welcome-overlay');
    const confirmWelcomeButton = document.getElementById('confirm-welcome');

    if (welcomeOverlay && confirmWelcomeButton) {
        confirmWelcomeButton.addEventListener('click', function() {
            welcomeOverlay.style.display = 'none'; // Скрываем приветственное окно
        });
    } else {
        console.error('Элемент приветственного окна или кнопка подтверждения не найдены.');
    }

    const mainContainer = document.getElementById('main-container');
    const numberOfLeaves = 20; // Количество падающих листьев

    if (mainContainer) { // Проверяем, существует ли элемент
        function createLeaf() {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf');

            // Случайное положение по горизонтали
            const startPosition = Math.random() * 100;
            leaf.style.left = `${startPosition}vw`;

            // Случайная задержка перед началом падения
            const animationDelay = Math.random() * 5;
            leaf.style.animationDelay = `${animationDelay}s`;

            // Случайная продолжительность анимации
            const animationDuration = 5 + Math.random() * 5;
            leaf.style.animationDuration = `${animationDuration}s`;

            // Случайный размер
            const size = 10 + Math.random() * 15;
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;

            // Случайный угол наклона
            const rotation = Math.random() * 360;
            leaf.style.transform = `rotate(${rotation}deg)`;

            mainContainer.appendChild(leaf);
        }

        for (let i = 0; i < numberOfLeaves; i++) {
            createLeaf();
        }
    } else {
        console.error('Элемент с id "main-container" не найден.');
    }

    const buttons = document.querySelectorAll('.custom-btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.2)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
});