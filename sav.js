var lastX = 0;
var lastY = 0;

var rid = 0;

var animateCircle = function() {

    window.cancelAnimationFrame(rid);

    var rad = 0;
    var x = svg.clientWidth/2; var y = svg.clientHeight/2;
    
    var speed = 1;

    var draw = function() {

	svg.innerHTML = '';

	var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	dot.setAttribute("cx", x);
	dot.setAttribute("cy", y);
	dot.setAttribute("r", rad);
	dot.setAttribute("fill", "green");

	svg.appendChild(dot);

	rad += speed;
	if( rad == y || rad == 0 )
	    speed *= -1;

	rid = window.requestAnimationFrame( draw );

    }

    draw();

};

var animateDVD = function() {

    window.cancelAnimationFrame(rid);

    var x = Math.random() * (svg.clientWidth - 50);
    var y = Math.random() * (svg.clientWidth - 50);

    var xv = 1; var yv = 1;
    if( Math.round( Math.random() ) == 0 ) xv *= -1;
    if( Math.round( Math.random() ) == 0 ) yv *= -1;

    var bounce = function() {

	svg.innerHTML = '';

	var dvd = document.createElementNS("http://www.w3.org/2000/svg", "image");
	dvd.setAttribute("href", "dvd.png");
	dvd.setAttribute("x", x);
	dvd.setAttribute("y", y);

	svg.appendChild(dvd);

	x += xv; y += yv;

	if( x + 50 > svg.clientWidth || x < 0 )
	    xv *= -1;
	if( y + 50 > svg.clientHeight || y < 0 )
	    yv *= -1;

	rid = window.requestAnimationFrame( bounce );

    }

    bounce();

}

circle.addEventListener("click", animateCircle);
dvd.addEventListener("click", animateDVD);
pause.addEventListener("click", function() {
    window.cancelAnimationFrame(rid);
});
