//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way

jQuery (window).on ("load", function(){


		//Inside of here is your jQuery/JavaScript

		jQuery(".contentBox").hide();

		//ADD CLICK EVENT TO <h2>
		
		jQuery(".panelContainer h2").on("click", function(){
			
			jQuery(".contentBox").not(jQuery(this).next()).slideUp(3000);
			
			jQuery(this).next(".contentBox").slideToggle(3000);
		});

	    //CHANGE <p> BACKGROUND ON HOVER

		jQuery(".contentBox").hover(
			function(){ 
				jQuery(this).addClass("textHovered");
			},
			function(){ 
				jQuery(this).removeClass("textHovered");
			}
		);
})