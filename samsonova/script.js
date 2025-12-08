// Мобильное меню
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// FAQ аккордеон
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');
        
        // Закрываем все ответы
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('open');
        });
        
        // Если этот ответ не был открыт - открываем его
        if (!isOpen) {
            answer.classList.add('open');
        }
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Закрываем мобильное меню
            navMenu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Форма обратной связи
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // В реальном проекте здесь будет отправка на сервер
    const name = this.querySelector('input[type="text"]').value;
    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
    
    // Очищаем форму
    this.reset();
});

// Закрытие FAQ при клике вне элемента
document.addEventListener('click', (e) => {
    if (!e.target.closest('.faq-item')) {
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('open');
        });
    }
});