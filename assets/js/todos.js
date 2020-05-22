// alert("hi");

$(function() {
    $('ul').on("click", "li", function() {
    	$(this).toggleClass("completed");
    });
});

// click on X to delete TODO
$(function() {
	$("ul").on("click", "span", function(event) {
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		event.stopPropagation();
	});
});


$(function() {
	$("input[type='text']").keypress(function(event) {
		// Check if enter
		if(event.which === 13){
			var todoText = $(this).val();
			// creat a new li and add to ul
			$(this).val("");
			$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
		}
	});
});


$(function() {
	$(".fa-plus").click(function() {
		$("input[type='text']").fadeToggle();
	})

})