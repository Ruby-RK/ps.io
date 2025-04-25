document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница полностью загружена');

    const welcomeOverlay = document.getElementById('welcome-overlay');
    const welcomeOverlayContent = document.getElementById('welcome-overlay-content');
    const confirmWelcomeButton = document.getElementById('confirm-welcome');
    const dataProcessingAgreementCheckbox = document.getElementById('dataProcessingAgreement');
    const welcomeOverlayImage = document.getElementById('welcome-overlay-image');

    if (welcomeOverlay && welcomeOverlayContent) {
        // Функция для скрытия приветственного окна
        function hideWelcomeOverlay() {
            welcomeOverlay.style.display = 'none';
        }

        // Анимация вращения иконки один раз
        function rotateIconOnce() {
            welcomeOverlayImage.classList.add('rotate-once');
            // Удаляем класс после завершения анимации
            setTimeout(() => {
                welcomeOverlayImage.classList.remove('rotate-once');
            }, 500); // Длительность анимации
        }

        // Запускаем вращение иконки при загрузке
        rotateIconOnce();

        // Обработчик наведения на иконку
        welcomeOverlayImage.addEventListener('mouseenter', rotateIconOnce);

        // Обработчик изменения состояния чекбокса
        if (dataProcessingAgreementCheckbox && confirmWelcomeButton) {
            dataProcessingAgreementCheckbox.addEventListener('change', function() {
                confirmWelcomeButton.disabled = !this.checked; // Разблокируем кнопку, если чекбокс отмечен
            });

            // Обработчик клика по кнопке "Подтвердить"
            confirmWelcomeButton.addEventListener('click', hideWelcomeOverlay);
        } else {
            console.error('Элемент чекбокса или кнопка подтверждения не найдены.');
        }
    } else {
        console.error('Элемент приветственного окна не найден.');
    }

    // ... остальной ваш JavaScript код (для кнопок) ...
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