$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 800) {
        $(".toc").appendTo($(".toc-sidebar"));

    } else {
        $('.ui.sidebar').sidebar('hide');
        $(".toc").appendTo($(".toc-wrapper"));
    }
});

$(document).ready(function() {
    $(".burger").click(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 800) {
            $('.ui.sidebar').sidebar('toggle');
        }
    });

    $(".toc li").click(function () {
        $('.ui.sidebar').sidebar('hide');
    });
});

