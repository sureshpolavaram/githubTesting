$(".profile2").hide();
$(".profile3").hide();
$(".profile4").hide();



/*next*/

$(".firstpagebutton").click(function(){
	$(".profile1").hide();
	$(".profile2").show();
});

$(".secondpagebutton").click(function(){
	$(".profile2").hide();
	$(".profile3").show();
});

$(".thirdpagebutton").click(function(){
	$(".profile3").hide();
	$(".profile4").show();
});

/*next*/  


/*previous*/

$(".secondpagebackbutton").click(function(){
	$(".profile1").show();
	$(".profile2").hide();
});

$(".thirdpagebackbutton").click(function(){
	$(".profile2").show();
	$(".profile3").hide();
});

$(".fourthpagebackbutton").click(function(){
	$(".profile3").show();
	$(".profile4").hide();
});


/*previous*/
