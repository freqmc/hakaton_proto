document.addEventListener('DOMContentLoaded', function () {
    // Основной аккордеон (блоки: Содержание, Дисциплины, Преподаватели и т.д.)
    const mainHeaders = document.querySelectorAll('.accordion-header');
    mainHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');
            const isActive = item.classList.contains('active');

            // Закрываем все основные блоки
            document.querySelectorAll('.accordion-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.accordion-content').classList.remove('open');
            });

            // Открываем текущий, если был закрыт
            if (!isActive) {
                item.classList.add('active');
                content.classList.add('open');
            }
        });
    });

    // Вложенный аккордеон: семестры (можно открывать несколько)
    const semesterHeaders = document.querySelectorAll('.semester-header');
    semesterHeaders.forEach(header => {
        header.addEventListener('click', function (e) {
            e.stopPropagation(); // не срабатывает основной аккордеон

            const content = this.nextElementSibling; // .semester-content

            // Переключаем состояние
            this.classList.toggle('open');
            content.classList.toggle('open');
        });
    });
});