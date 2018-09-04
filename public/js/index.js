
// redirect people to rocket.chat/docs if they try and browse the GitHub pages version
if(location.hostname == "rocketchat.github.io" && location.href.indexOf('?noredirect') == -1) {
  location="https://rocket.chat" + location.pathname
}

function scroll_toc(path) {
  // remove base either '/docs/' or '/'
  var base = '/docs/';

  path = path.indexOf(base) == 0? path.substring(base.length) : path.substring(1);

  if(path[path.length - 1] == '/') {
    path = path.substring(0, path.length - 1);
  }

  path = '.' + path.split('/').join(' .');

  $('.active').removeClass('active');

  if(path.length > 1) {
    $(path).addClass('active');

    while(path.lastIndexOf(' ') > -1) {
      path = path.substring(0, path.lastIndexOf(' '));
      $(path).addClass('active');
    }
  }
}

function addAnchors(path) {

  return $("h2, h3, h4, h5, h6").each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = `<img src="${path}images/icons/link.svg">`;
    if (id) {
      return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
    }
  });
}

$.fn.isInViewport = function() {
  if (this === undefined){
    return;
  }
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

function addTocLevels () {
  $('.toc .active').addClass(function (index) {
    return " level-"+index;
  });

  $('.toc li[class*="level"]:not(.active)').removeClass(function () {
    return " level-0 level-1 level-2 level-3";
  });
}

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

function checkTocOffset() {
  if($('.article-toc-wrapper').offset().top + $('.article-toc-wrapper').height() >= $('.app-footer').offset().top - 10) {
    $('.article-toc-wrapper').css('position', 'absolute');
  } else if($(document).scrollTop() + window.innerHeight < $('.app-footer').offset().top){
    $('.article-toc-wrapper').css('position', 'fixed'); // restore when you scroll up
  }
}

$(document).ready(function() {

  scroll_toc(window.location.pathname);

  $('#my_toc li:first-child a').addClass(' active');

  var path = (location.hostname == "rocketchat.github.io" || location.hostname == "rocket.chat") ? '/docs/' : '/';

  addTocLevels();


  if(location.pathname !== '/' && location.pathname !== '/docs/'){



    var app = new senna.App();

    app.setBasePath(path);
    addAnchors(path);
    $('table:not(.table-wrapper table)').wrap( "<div class='table-wrapper'></div>" );


    app.addSurfaces('content');
    app.addRoutes(new senna.Route(/.*/, senna.HtmlScreen));

    app.on('startNavigate', function(event) {
      scroll_toc(event.path);

    });

    app.on('endNavigate', function(event) {

      addAnchors(path);

      addTocLevels();

      $('#my_toc li:first-child a').addClass(' active');

      $('table:not(.table-wrapper table)').wrap( "<div class='table-wrapper'></div>" );

      var hash = event.path.indexOf('#');
      if (hash !== -1) {
        location.hash = path.substr(hash);
      }
      else {
        $('#content').scrollTop(0);
      }
    });


    $(window).on('resize scroll', throttle(function() {
        checkTocOffset();
        $('.content h2').each(function () {
          var currentActive = 'a[href="#' + $(this)[0].id + '"]'
          if ($(this).isInViewport()) {
            if ($(currentActive)){
              $('.article-toc-wrapper a').removeClass(' active')
              $(currentActive).addClass(' active');
              return false;
            }
          }
        });
    }, 70));

    $('#my_toc li').on('click', function () {
      $(this).addClass(' active');
    })
  }
});
