document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Удаляем класс active у всех ссылок
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      // Добавляем класс active к текущей ссылке
      link.classList.add('active');
    });
  });
});
