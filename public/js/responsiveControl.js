
function moveToC(){
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
        $('.toc').appendTo($('.toc-sidebar'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.toc').appendTo($('.toc-wrapper'));
    }
}

window.onresize = function () {
    moveToC();
}

moveToC();


var burger = document.querySelector(".burger");
var search = document.querySelector(".search");
var searchInput = document.querySelector(".search input")
var sidebar = document.querySelector(".sidebar")

burger.addEventListener('click', function (){
    $('.ui.sidebar').sidebar('toggle');
});

search.addEventListener('click', function () {
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
        this.classList.add('active');
    }
});

searchInput.addEventListener('blur', function (e) {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000 ) {
        document.querySelector(".search").classList.remove('active');
    }
});

sidebar.addEventListener('click', function () {
    if (event.target.tagName.toLowerCase() === 'a') {
        $('.ui.sidebar').sidebar('hide');
    }
});

search.addEventListener('transitionend', function () {
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1000) {
        searchInput.focus();
    }
});