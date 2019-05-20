function App() {
	var theText;
	var mouse = {x: 0, y: 0};
    this.init = function() {
    	theText = document.querySelector( '.txt');
    	mouse.x = 0;
    	mouse.y = 0;
			document.addEventListener('mousemove', mouseMove);
    }
    var mouseMove = function( e ) {
    	mouse.x = e.pageX - 30;
    	mouse.y = e.pageY - 30;
    	theText.style.transform = "translate3d(" + mouse.x + "px, " + mouse.y + 'px, 0px)';
    }
		function mousePressed() {
background(150, 10, 800);

}
function draw() {
  fill(100, 20, 400);
  ellipse(mouseX + 100, mouseY + 100, 100, 100);

}
}
var app = new App();
app.init();
