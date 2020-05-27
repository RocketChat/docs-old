
function moveToC(){
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1200) {
        $('.toc').appendTo($('.toc-sidebar'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.toc').appendTo($('.toc-wrapper'));
    }
}

function moveSearch(){
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 1200) {
        $('.search.docs').appendTo($('.mobile-search'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.search.docs').appendTo($('.toc-wrapper'));
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

window.onresize = function () {
    moveToC();
    if( !isMobile.any() ){
        moveSearch()
    }
}

moveSearch()
moveToC();

var burger = document.querySelector(".burger");

var sidebar = document.querySelector(".sidebar")

burger.addEventListener('click', function (){
    $('.ui.sidebar').sidebar('toggle');
});

sidebar.addEventListener('click', function (event) {
    if (event.target.matches('a:only-child')) {
        $('.ui.sidebar').sidebar('hide');
    }
});
