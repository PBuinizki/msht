// Аккордеон для FAQ
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Закрываем все остальные открытые элементы
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    const otherContent = otherHeader.nextElementSibling;
                    otherContent.style.maxHeight = null;
                }
            });

            // Переключаем текущий элемент
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Обработка формы обратной связи
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        // Здесь обычно код для отправки данных на сервер (например, с помощью Fetch API)
        // Для учебного проекта просто покажем alert

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // В реальном проекте здесь был бы AJAX-запрос
        alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами по адресу ${email} в ближайшее время.`);

        // Очищаем форму
        contactForm.reset();
    });
});