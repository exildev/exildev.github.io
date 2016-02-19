(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $.getJSON( "https://api.github.com/users/exildev/repos", function(data){
    	var model = $("#product-model");
    	$.each(data, function(index, value){
    		console.log(index, value);
    		var clone = model.clone();
    		clone.appendTo("#products-container");
    		clone.removeAttr("id");
    		clone.find("h4").html(value.name);
    		if(value.language==null){
    			value.language = "Software"
    		}
    		clone.find("h5").html(value.language);
    		clone.find("p").html(value.description);
    	});
    	model.remove();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
