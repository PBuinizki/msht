document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Сообщение отправлено!");
});
// АККОРДЕОН FAQ
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // закрываем другие
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // переключаем текущий
    item.classList.toggle("active");
  });
});
