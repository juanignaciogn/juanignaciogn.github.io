
var CarouselController = function() {
	var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
		pagination: true
	});
	console.log("carousel on");
};


$(window).on('load', function(){
	carouselCtrl = new CarouselController();
});