$(document).ready(function(){

	$(document).click(function(){
		$('#hide').show()
	});

	$('#head1').slideDown(1500);
	
	$('#head2').slideDown(1500);

	$('#head1').animate({
	  	opacity: 0.05,
	  	marginLeft:"100px"
	}, 2000);

	$('#head2').animate({
	  	opacity: 0.05,
	 	width: "70%", 
	  	marginLeft: "500px"
	}, 2000);

	$("h2").animate({
		fontSize: "50px",
		marginLeft: "300px"
	},2050);

	$("p").animate({
		marginLeft:"60px"
	},2500);
	$("p").css("color","blue");

	$("ul").show(3000);

	$("#first").animate({
		marginLeft: "300px"
	},3500);

	$("#first").animate({
		opacity: "0.25"
	},4500);

	$("#second").animate({
		marginLeft: "325px"
	},4500);

	$("#second").animate({
		opacity: "0.25"
	},5500);

	$("#third").animate({
		marginLeft: "350px"
	},5500);
	
	$("#third").animate({
		opacity: "0.25"
	},6500);

	$("#fourth").animate({
		marginLeft: "375px"
	},6500);

	$("#fourth").animate({
		opacity: "0.25"
	},7500);

	$("#fith").animate({
		marginLeft: "400px"
	},8500);

	$("#fith").animate({
		fontSize: "90px",
	},9000);




	$("button").click(function(){
	$("img").show();
	});

});