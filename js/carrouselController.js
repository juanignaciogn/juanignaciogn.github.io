
var CarouselController = function() {
	var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
		pagination: true
	});
	console.log("carousel on");
};


$(document).on('ready', function(){
	carouselCtrl = new CarouselController();
});