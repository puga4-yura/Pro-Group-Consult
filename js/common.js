  $(document).mouseleave(function(e){
    if (e.clientY < 1) {
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});	
   } 
});
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});	
	