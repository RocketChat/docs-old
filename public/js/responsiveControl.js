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
    var viewportWidth = $(window).width();
    if (viewportWidth < 800) {
        $(".toc").appendTo($(".toc-sidebar"));
        $(".search").click(function() {
            $(".search").addClass("active")
        });
    } else {
        $('.ui.sidebar').sidebar('hide');
        $(".toc").appendTo($(".toc-wrapper"));
    }

    $(".search .icon").click(function() {
        $(".search").removeClass("active")
    });

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

