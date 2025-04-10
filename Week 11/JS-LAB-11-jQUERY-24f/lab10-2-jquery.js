//LAB 10 - 2 INVENTORY PAGE

jQuery(window).on("load", function(){

    jQuery(".desc").hide();

	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>

	jQuery("#tblInventory tbody tr").hover(
        function(){
            jQuery(this).addClass("selected");
        },
        function(){ 
            jQuery(this).removeClass("selected");
        }
    );

	//ADD CLICK EVENT TO <tr>

    jQuery("#tblInventory tbody tr").on("click", function(){

        jQuery(".desc").hide();

        jQuery(this).find(".desc").show();

    });

});