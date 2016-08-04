$(function(){
	
	
	
	
	$('.menuPrincipal ul li a').bind('click',function(event){
  		var anchor = $(this).attr('xpto');
	    $('html, body').animate({scrollTop: $('#'+anchor).offset().top}, 1000, 'swing');
		// Outras Animações
		// linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
    });
	
	
	/****** Menu fixo ********/
	 $(".menuPrincipal").sticky({topSpacing:0});


	 /**** Modal ****/
	 $('.btnPadrao').click(function(){
		 $('.modalLogin').fadeIn(500);
	 });
	 
	 $('.close').click(function(){
		 $('.modalLogin').fadeOut(500);
	 });
	 
	
	
	var map;
 
	function initialize() {
		var latlng = new google.maps.LatLng(-15.830523,-48.010389);
	 
		var options = {
			zoom: 16,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	 
		map = new google.maps.Map(document.getElementById("map"), options);
	}
	 
	initialize();
	
	
	
			
})	




/*********** Ex. Mapa Google  *****************



var imovelIcon_front = new google.maps.MarkerImage("http://sandbox.onibrand.com/monii/wp-content/themes/monii/images/iconimovel.svg");
			imovelIcon_front.size = new google.maps.Size(50, 60);
			imovelIcon_front.anchor = new google.maps.Point(10, 60);
			var mapCanvas;
			function intialize(){

			//Create a map
			mapCanvas = new google.maps.Map(document.getElementById("map"), {
				center : new google.maps.LatLng(,),
				zoom: 16,
				minZoom: 14,
				disableDoubleClickZoom: true,
				draggable: false,
				scrollwheel: false,
				disableDefaultUI: true,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			});


			//marker : Imovel
			var marker = new google.maps.Marker({
				position : new google.maps.LatLng(-15.830523,-48.010389),
				map: mapCanvas,
				icon: imovelIcon_front,
			});
		}
		google.maps.event.addDomListener(window, "load", intialize);
		</script>

		<div id="map"></div>
		
***/		
