var Circle = function(element) {
	this.element = element;
	this.diameter = Math.round(50 + Math.random() * 150);
	this.element.css({width: this.diameter, height: this.diameter})

}

Circle.prototype.move = function() {
	this.element.animate({
		top: Math.round(Math.random() * this.diameter),
		left: this.diameter
	});
}

$(document).ready(function() {
	$.each($('.circle'), function() {
		var circle = new Circle($(this));
		circle.move();
	});
	
});