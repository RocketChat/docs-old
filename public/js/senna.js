

function scroll_toc(path) {
  console.log(path);
}

$(document).ready(function() {
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
    
  	var hashPosition = event.path.indexOf('#');
    console.log(hashPosition);
	});
});
