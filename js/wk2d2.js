/* JS Scope --> need to understand how scope affects value of variables, w/o know cannot predict outcome of js. 
	

	Global Scope --> a variable that can be accessed globally, within almost any part of your scrip.
		
		*/ 
		var z = 1; // variable is global because it is not inside any function
		
		// but can trickle down and be referred to locally: 

		function print_it (){
			console.log(z); // will print out 1
		} 
	

	//Local Scope --> a variable that pertains to function you are currently in, does not effect global.
		
		var z = 3;

		function some_f(){
			var z = 20;
			console.log(z);
		}
		
		some_f() // outcome 20 

		console.log(z) // outcome 3


	/*Understanding the difference b/w Global and Local: (YOUR EXAMPLE)
		Global --> you know that 2 + 2 = 4, so if I ask, what is the value of 2+2 w/o any other info than you will say 4. 

		However... 

		Local --> if I give you a specific example where 2+2 is not necessarily 4 and I ask you the value of 2+2 in that specific example,
		you will give the me answer specific to that specific example which may or may not be 4.

		If my specific example is sufficient to change your paradigm and assign your value of 2+2 =/= 4 then the global variable may change


	Another Example with Robin's from Batman: (CLASS EXAMPLE) */
		var robin = {name:"Dick Grayson", background:"Acrobat"};
		
		function newRobin(){
  			var robin = {name:"Jason Todd", background: "Theif"};
  			console.log(robin); 
  		}

	//You are able to change the global variable if you assign it to something else, using the assignment operator: 
  		function changeGlobalRobin(robin){ 
  			robin = "me"
		}


	//Block Scope --> There is no block scope in js 

	var c = 10;
	function hallo(){
		if(true){
		var c = 2;
		}
	console.log(c); // returns 2, not the global value 10, implication: variables don't have a separate scope within a block
	}

	Function Scope --> an argument is only accesible within the function it gets declared in 

	function haha(argument_uno){
		console.log(argument_uno);
	}

	haha("hello"); // will print "hello"
	
	console.log(argument_uno); // will print "ReferenceError: argument_uno is not defined"


/* JavaScript Problem Solving --> troubleshooting, debugging, keep code better organized, find problems and nip them in the bud*/ 

	var contents = ["page 1", "page 2", "page 3"];

	for (i=0; i<contents.length; i++){
		console.log(i + " - " + contents[i]);
	}

// pseudo-code to check if form_field is valid: 
//1) Are both fields (username and password) filled in? 

	function fieldBlank (usernameEntered, passwordEntered){
		if (typeof usernameEntered !== undefined && typeof passwordEntered !== undefined){
		alert("Please fill in the blank fields before signing in")
		}
	}

//2) check if e-mail is valid: 


	function ValidateEmail(mail){  
 		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
 		{  
    	return (true)  
  		}  
    	alert("You have entered an invalid email address!")  
    	return (false)  
	}  

//3) check if e-mail and password match:


	function CheckPassword(inputtxt){   
		var passw=  /^[A-Za-z]\w{7,14}$/;  
		if(inputtxt.value.match(passw))   
		{   
		alert('Correct, try another...')  
		return true;  
		}  
		else  
		{   
		alert('Wrong...!')  
		return false;  
		}  
	}


// Trying to put it all together: // try again later...
/*
	function SignInCheck (usernameEntered, passwordEntered){
		if (typeof username !== undefined && typeof password !== undefined){
		alert("Please fill in the blank fields before signing in")
		}


		for{ 
			var passw=  /^[A-Za-z]\w{7,14}$/;  
				if(password.value.match(passw))   
		{   
		alert('Correct, try another...')  
		return true;  
		}  
		else  
		{   
		alert('Wrong...!')  
		return false;  
		}  
	}
		}
	}

	Debugger --> if we dont have friendly messages telling us what is wrong then we use the keyword debugger --> 
	allows for breaks in your script: (freeze code) can check which part isnt working --> what expecting does not match 
	can pinpoint exactly where the error is */


	console.log("hello world")
	debugger;
	alert('I think I found the bug!') // the alert will not fire while debugger is on (developer tools)


	var x =2; 

	debugger; 
	function turnXInto10(){ // expect x to equal 10 
		x=10;
	}

	turnXInto10()

// An alternative to Debugger is doing console.log -- so that you can get the value of x, for example, at several points in time (a little more janky but useful)

//Debugger excercise (not sure worked) -- CHECK AND ASK 


//Subtraction --> try removing things of the isolating code line by line to isolate what is causing the prooblem 

	for(x=0;x<10;x++){
		console.log(x)
	// Comment out the below line
	// to see what effect is has on output
	// x = z + 10;
		var y = x + 2;
	// Comment out this line to only see
	// the first log statement
	// console.log(y)
		return y
	}


/* JQUERY --> manipulate DOM with this - library specific for manipulating DOM -- shorter script, simplification.
	collections of functions and code that someone has written to make a set of tasks eisier in a specific programming language 
	in the casa js. By including it into your library of code, you'll have access to its functions and methods. 
	"Short-cuts"

THESE EXAMPLES ARE BASED ON YOUR index2.html file (w02/debug-practice) liked to the jquery library and to your own personal library w functions within it js/scrript.js
	
In your index.html file: 

	<h1 class="header" id="header1"> Hello </h1>
	<h1 class ="header" id="header2"> World </h1>

	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>

In the console of browser: */

	$('h1') // returns: [<h1>​ Hello ​</h1>​, <h1>​ World ​</h1>​]
	$('ul') // returns:[<ul>​…​</ul>​]
	$('li') // returns: [<li>​1​</li>​, <li>​2​</li>​, <li>​3​</li>​]
	$('h1')[0].innerText = "HI"
	"HI" // changes your first h1 tag to HI instead of the original hello

	$('.header') //calls upon a specific class (just like in css)
	$('#header1') //calls upon a specific ID

	/* Don't have to write getElementByID or class or whatever. Hooray!

	Just use $ and give specific input -> shortcut for everything and can tack on other functions
	Hooray!

	$ ('document').ready () // dont want any of jquery to load until all html loaded  */

	function(){
	alert("I am anonymous!");
	}

//Anonymous functions can be stored in variables:
	var my_anon_func = function(){ alert("Har!"); }

// often used in callbacks 

/* A callback is an anonymous function supplied to another function to be run when that function is 
done running */ 

// Define an anonymous function called someOtherFunction
var someOtherFunction = function(){ alert('hello world'); }
// Declare a regular or anonymous function that takes another
// function as an argument, does something,
// then runs that other function
function someRunner(anyFunction){ console.log(2+2); anyFunction(); }
// Call the regular function, supplying the initial
// anonymous function as an argument
someRunner(someOtherFunction);

//To use $(document).ready() and ensure the page is ready for your jQuery, 
//you'll need to pass it an anonymous function (acallback) to execute when the document is ready
$(document).ready(
//Code that executes when the document is ready
function(){
alert('The document is ready, sah!');
}

//The Fun Stuff
$('body').hide(); // hide body 
$('body').show(); // show body 
$('body').toggle(); // switch back and forward

$('#header1').fadeOut(); // fades out classid = header1 
$('#header1').fadeIn(50000); // fades in classid =header1 in 50000 ms 

$('#header2').slideUp(500);
$('#header2').slideDown(500);

$ ('#header2').animate({
  opacity: 0.25,
  width: "70%", 
  marginLeft: "500px"
}, 2000);


// the click event -- function gets excecuted when it gets clicked 
$("ul li a").click(function(){
alert('imclicked!');
}
);

var animateMenu = function(){
$(".menu").animate( {opacity: .5} )
}
$(".menu").show(animateMenu)

// could also be written as:
$(".menu").show( function(){
$(".menu").animate( {opacity: .5} )
})


var x = function(x){
	$ ('#header2').animate({
  	opacity: 0.25,
  	width: "70%", 
  	marginLeft: "500px"
	}, 2000);
	
}


$ ('#header1').show(x);











