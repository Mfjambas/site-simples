'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light";  // botão mostra Light quando tema está dark
    } else {
        this.textContent = "Dark";   // botão mostra Dark quando tema está light
    }
});
