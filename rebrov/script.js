// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Аккордеон FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Закрываем все остальные открытые вопросы
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                const answer = q.nextElementSibling;
                answer.style.maxHeight = null;
            }
        });
        
        // Переключаем текущий вопрос
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// Отправка формы обратной связи
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const closeMessage = document.getElementById('close-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // В реальном проекте здесь был бы код для отправки данных на сервер
        // Например, с использованием fetch API
        
        // Показываем сообщение об успешной отправке
        formMessage.style.display = 'flex';
        
        // Очищаем форму
        contactForm.reset();
    });
}

// Закрытие сообщения
if (closeMessage) {
    closeMessage.addEventListener('click', () => {
        formMessage.style.display = 'none';
    });
}

// Закрытие сообщения при клике вне его
formMessage.addEventListener('click', (e) => {
    if (e.target === formMessage) {
        formMessage.style.display = 'none';
    }
});

// Подсветка активного пункта меню при прокрутке
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Добавляем активный класс к первому пункту меню при загрузке
window.addEventListener('load', () => {
    navItems[0].classList.add('active');
});