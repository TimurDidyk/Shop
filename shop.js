
$(document).ready(function(){
	
	//$(".bl-add").click(function(){
		// var content = $(".in-tov").val();
       //  var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
       //  $(cloned).css('position', 'relative');
       //  $(cloned).find(".prod").text(content);
       //  $(cloned).appendTo(".bl-product");
       //  $(".in-tov").val("").focus();
	//});
	
	$(".prod").click(function(){
		$(this).parent().find(".bl-prodinp").css('visibility', 'visible');
		$(this).parent().find(".prod").css('visibility', 'hidden');
	});
	
	$(".bl-prodinp").blur(function(){
		var t = $(this).parent().find(".bl-prodinp").val();
		$(this).parent().find(".prod").text(t);
		$(this).parent().find(".bl-prodinp").css('visibility', 'hidden');
		$(this).parent().find(".prod").css('visibility', 'visible');
	});
	
	$(".bl-plus").click(function(){
		var i = $(this).parent().find(".bl-label").val();
		i++;
		$(this).parent().find(".bl-label").val(i);
	});
	
	$(".bl-minus").click(function(){
		var i = $(this).parent().find(".bl-label").val();
		if(i>1){
		i--;
		$(this).parent().find(".bl-label").val(i);
		} else if(i<=1){
			alert("Неможливо виконати дію");
		}
	});
	
	$(".bl-buy").click(function(){
		$(this).parent().find(".bl-minus").css('visibility', 'hidden');
		$(this).parent().find(".bl-plus").css('visibility', 'hidden');
		$(this).parent().find(".bl-buy").css('visibility', 'hidden');
		$(this).parent().find(".bl-x").css('visibility', 'hidden');
		$(this).parent().find(".bl-notbuy").css('visibility', 'visible');
	});
	
	$(".bl-notbuy").click(function(){
		$(this).parent().find(".bl-minus").css('visibility', 'visible');
		$(this).parent().find(".bl-plus").css('visibility', 'visible');
		$(this).parent().find(".bl-buy").css('visibility', 'visible');
		$(this).parent().find(".bl-x").css('visibility', 'visible');
		$(this).parent().find(".bl-notbuy").css('visibility', 'hidden');
	});
	
	$(".bl-x").click(function(){
		$(this).parent().remove();
		
	});
	
});