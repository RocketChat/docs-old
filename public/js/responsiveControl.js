
function moveToC(){
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
        $('.toc').appendTo($('.toc-sidebar'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.toc').appendTo($('.toc-wrapper'));
    }
}

$(window).resize(function () {
    moveToC();
});

moveToC();

$('.burger').click(function () {
    $('.ui.sidebar').sidebar('toggle');
});


$('body').on('click', '.sidebar .toc li', function () {
    $('.ui.sidebar').sidebar('hide');
});

$('body').on('click', '.search', function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
        $('.search').addClass('active');
    }
});

$('body').on('blur', '.search.active', function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
        $('.search').removeClass('active');
    }
});

$('.search').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
        $('.search input').focus();
    }
});



$