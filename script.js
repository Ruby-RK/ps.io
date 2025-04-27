document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница полностью загружена');

    // Код для приветственного окна
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const welcomeOverlayContent = document.getElementById('welcome-overlay-content');
    const confirmWelcomeButton = document.getElementById('confirm-welcome');
    const dataProcessingAgreementCheckbox = document.getElementById('dataProcessingAgreement');
    const welcomeOverlayImage = document.getElementById('welcome-overlay-image');

    if (welcomeOverlay && welcomeOverlayContent) {
        function hideWelcomeOverlay() {
            welcomeOverlay.style.display = 'none';
        }

        function rotateIconOnce() {
            welcomeOverlayImage.classList.add('rotate-once');
            setTimeout(() => {
                welcomeOverlayImage.classList.remove('rotate-once');
            }, 500);
        }

        rotateIconOnce();
        welcomeOverlayImage.addEventListener('mouseenter', rotateIconOnce);

        if (dataProcessingAgreementCheckbox && confirmWelcomeButton) {
            dataProcessingAgreementCheckbox.addEventListener('change', function() {
                confirmWelcomeButton.disabled = !this.checked;
            });
            confirmWelcomeButton.addEventListener('click', hideWelcomeOverlay);
        } else {
            console.error('Элемент чекбокса или кнопка подтверждения не найдены.');
        }
    } else {
        console.error('Элемент приветственного окна не найден.');
    }

    // Код для кнопок (эффект наведения)
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

    // Код для кнопки "Набор кандидатов" и выпадающего блока
    const recruitmentButton = document.querySelector('.recruitment-button');
    const recruitmentInfo = document.querySelector('.recruitment-info');
    const overlay = document.createElement('div'); // Создаем элемент overlay

    overlay.classList.add('overlay');
    document.body.appendChild(overlay); // Добавляем overlay в DOM

    if (recruitmentButton && recruitmentInfo && overlay) {
        recruitmentButton.addEventListener('click', function(event) {
            event.stopPropagation();
            recruitmentInfo.style.display = (recruitmentInfo.style.display === 'none' || recruitmentInfo.style.display === '') ? 'block' : 'none';
            overlay.style.display = (recruitmentInfo.style.display === 'block') ? 'block' : 'none';
        });

        // Закрываем выпадающий блок и затемнение при клике за его пределами или на затемнении
        document.addEventListener('click', function(event) {
            if (!recruitmentInfo.contains(event.target) && event.target !== recruitmentButton) {
                recruitmentInfo.style.display = 'none';
                overlay.style.display = 'none';
            }
        });

        overlay.addEventListener('click', function() {
            recruitmentInfo.style.display = 'none';
            this.style.display = 'none';
        });
    }
});