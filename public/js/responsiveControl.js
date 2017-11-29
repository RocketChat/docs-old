$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
        $('.toc').appendTo($('.toc-sidebar'));
    } else {
        $('.ui.sidebar').sidebar('hide');
        $('.toc').appendTo($('.toc-wrapper'));
    }
});



$(document).ready(function() {

    var viewportWidth = $(window).width();
    // add the events and initial states for elements on mobile resolution
    if (viewportWidth < 1000) {
        // move toc content to sidenav if in mobile resolution
        $('.toc').appendTo($('.toc-sidebar'));

        // search events
        $('body').on('click', '.search', function () {
            $('.search').addClass('active');
        });
        $('body').on('blur', '.search.active', function () {
            $('.search').removeClass('active');
        });
        // focus on the search after the transition end
        $('.search').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
            $('.search input').focus();
         });

    }

    $('.burger').click(function () {
        if (viewportWidth < 1000) {
            $('.ui.sidebar').sidebar('toggle');
        }
    });

    $('body').on('swiperight', function () {
        $('.ui.sidebar').sidebar('toggle');
    });

    $('.toc li').click(function () {
        $('.ui.sidebar').sidebar('hide');
    });
});

