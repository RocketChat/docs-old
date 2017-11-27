

function scroll_toc(path) {
  path = path.indexOf('/docs') == 0? path.substring(4) : path.substring(1);
  
  if(path[path.length - 1] == '/') {
    path = path.substring(0, path.length - 1);
  }
  
  var path = '.' + path.split('/').join(' .');
  
  if(window.toc.active) {
    window.toc.active.removeClass('active');
  }

  window.toc.active = $(path);
  window.toc.active.addClass('active');
}

$(document).ready(function() {
  window.toc = { active: null };
  
  scroll_toc(window.location.pathname);

  var app = new senna.App();
  app.setBasePath('/');
  // replace html with 'content' id
  app.addSurfaces('content');
  app.addRoutes(new senna.Route(/.*/, senna.HtmlScreen));

  app.on('startNavigate', function(event) {
    scroll_toc(event.path)
  });
  
  app.on('endNavigate', function(event) {
    var hash = event.path.indexOf('#');

  	if (hash !== -1) {
  		location.hash = path.substr(hash);
  	}
    else {
  		$('#content').scrollTop(0);
  	}
	});
});
