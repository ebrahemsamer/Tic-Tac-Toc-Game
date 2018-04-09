var winningBoxes1 = [];
var winningBoxes2 = [];

$(".game div div").click(function() {
	var playeronewin = document.getElementById('1');
	var playertwowin = document.getElementById('2');
	var squaredVisiblity = $('.squared h1').css('display');
	if(playeronewin.style.display == "block" || playertwowin.style.display == "block" || squaredVisiblity == 'block'){
		alert('Game Is Over');
	}else {
		if( $(".container .player1").css("opacity") == 1) {

			$(".container .player1").css({"opacity" : ".5" , "transform" : "scale(.75)" , "color" : "gray"});
			$(".container .player2").css({"opacity" : "1" , "color" : "rgba(36,83,101,1)" , "transform" : "scale(1)"});	
			$(".container .player2 img ").css({"background" : "#ddd"});

			if( $(this).find("img").length == 0 ) {
				$(this).append("<img class='x' width='82.5' height='82.5' src='imgs/x.jpg' />");
					winningBoxes1.push(this);
				if( $(".game .left-e img.x").length == 3 || $(".game .right-e img.x").length == 3  ) {
					playerOneWinning();
				}
				else if (  $(".game .above-row img.x").length == 3 || $(".game .bottom-row img.x").length == 3 ||
				           $(" .game .center-row img.x").length == 3 ) {
					playerOneWinning();
				}
				else if ( $(".game div .above-right-e img.x").length && $(".game div .center-center-e img.x").length && $(".game div .bottom-left-e img.x").length) {
					playerOneWinning();
				}
				else if ( $(".game div .above-left-e img.x").length && $(".game div .center-center-e img.x").length && $(".game div .bottom-right-e img.x").length) {
					playerOneWinning();
				}
				else if ( $(".game .above-row .above-center-e img.x").length && $(".game .center-row .center-center-e img.x").length && $(".game .bottom-row .bottom-center-e img.x").length) {
					playerOneWinning();
				}else {
					if( $(".game img").length == 9 ){
						$('.squared h1').css('display' , 'block');
						stopGame();
					}
				}
			}

		}else {
			$(".container .player2").css({"opacity" : ".5" , "transform" : "scale(.75)" , "color" : "gray"});
			$(".container .player1").css({"opacity" : "1" , "color" : "rgba(36,83,101,1)" , "transform" : "scale(1)"});	
			$(".container .player2 img ").css({"background" : "#ddd"});
			if( $(this).find("img").length == 0 ) {
				$(this).append("<img class='o' width='82.5' height='82.5' src='imgs/o.png' />");
					winningBoxes2.push(this);
				if( $(".game .left-e img.o").length == 3 || $(".game .right-e img.o").length == 3  ) {
					playerTwoWinning();
				}
				else if (  $(".game .above-row img.o").length == 3 || $(".game .bottom-row img.o").length == 3 ||
				           $(" .game .center-row img.o").length == 3 ) {
					playerTwoWinning();
				}
				else if ( $(".game div .above-right-e img.o").length && $(".game div .center-center-e img.o").length && $(".game div .bottom-left-e img.o").length) {
					playerTwoWinning();
				}
				else if ( $(".game div .above-left-e img.o").length && $(".game div .center-center-e img.o").length && $(".game div .bottom-right-e img.o").length) {
					playerTwoWinning();
				}
				else if ( $(".game .above-row .above-center-e img.o").length && $(".game .center-row .center-center-e img.o").length && $(".game .bottom-row .bottom-center-e img.o").length) {
					playerTwoWinning();
				}else {
					if( $(".game img").length == 9 ){
						$('.squared h1').css('display' , 'block');
						stopGame();
					}
				}
			}
		}
	}
});

$('.restart').click(resetGame);
function playerOneWinning() {
	var playeronewin = document.getElementById('1');
	playeronewin.style.display = 'block' ;
	playeronewin.style.color = 'green';
	$(".container .player2").css({"opacity" : ".5" , "transform" : "scale(.75)" , "color" : "gray"});
	$(".container .player1").css({"opacity" : "1" , "color" : "rgba(36,83,101,1)" , "transform" : "scale(1)"});
	if(winningBoxes1.length === 3){
		winningBoxes1.forEach(function(box) {
			$(box).css('transform','scale(1.1)');
		});
	}
	stopGame();
}
function playerTwoWinning() {
	var playertwowin = document.getElementById('2');
	playertwowin.style.display = 'block';
	playertwowin.style.color = 'green';
	$(".container .player1").css({"opacity" : ".5" , "transform" : "scale(.75)" , "color" : "gray"});
	$(".container .player2").css({"opacity" : "1" , "color" : "rgba(36,83,101,1)" , "transform" : "scale(1)"});
	if(winningBoxes2.length === 3){
		winningBoxes2.forEach(function(box) {
			$(box).css('transform','scale(1.1)');
		});
	}
	stopGame();
}
function stopGame() {
	$('.game div div').css('cursor' , 'no-drop');
}

function resetGame() {
	$('.game div div').remove('img');
}

