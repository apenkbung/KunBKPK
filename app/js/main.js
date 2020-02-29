let toggleBtn = document.querySelector('.navbar__toggle-button');
let header = document.querySelector('.header');

toggleBtn.addEventListener('click', function(e) {
    header.classList.toggle('navbar__nav-collapse');
});