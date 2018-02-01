$(document).ready(function(){

	$("form").submit(function(){
		return false;
})
	$("form").submit(function(){
		var firstname= $("#fn").val();
		var lastname= $("#ln").val();
		var description= $("#des1").val();
		var stuff= "<div><h1>" + firstname + " " + lastname + "</h1><p> click here for description</p><p id=bio>" + description + "</p></div>";
		$("#cards").append(stuff);
	})

	$(document).on("click", "#cards div", function(){
		$(this).children().toggle();
	})
})