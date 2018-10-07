var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');
var images = document.querySelectorAll('#gallery .photos img');

var i = 0;

btn_next.tick = function() {
    images[i].classList.toggle('showed');
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].classList.toggle('showed');
}

setInterval (function() {
    btn_next.tick();
}, 7000);
