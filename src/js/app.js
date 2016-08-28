function changeImage(current) {
	var imagesNumber = 5;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("normal" + current).style.display = "block";
			document.getElementById("text" + current).style.display = "block";
		}
		else {
			document.getElementById("normal" + i).style.display = "none";
			document.getElementById("text" + i).style.display = "none";
		}
	}
}



window.onload = function (){

var paper = new Raphael(document.getElementById("svg"), 800, 600);

var backGround = paper.rect(0,0,800,600);

backGround.attr({ fill: "black"});

	var button = paper.image("images/start.png", 300, 200, 200, 200);
	var audio = new Audio('VPT_Intro.mp3');


button.click(start);


function start() {
	button.remove();
	audio.play();
	wait();
}

function wait() {
	var circ = paper.circle(400, 300, 250).attr({stroke:"white"});
	var num = paper.text(400,300,"4").attr({fill:"white", "font-size": 400});
		num.animate({"font-size":0}, 400, next1);

	function next1() {
	num = paper.text(400,300,"3").attr({fill:"white", "font-size": 400});
	num.animate({"font-size":0}, 400, next2);
	}

	function next2() {
	num = paper.text(400,300,"2").attr({fill:"white", "font-size": 400});
	num.animate({"font-size":0}, 400, next3);
	}

	function next3() {
	num = paper.text(400,300,"1").attr({fill:"white", "font-size": 400});
	num.animate({"font-size":0}, 400, main);
	}
}

function main() {

var newBack = paper.image("images/background.jpg", 0,0,800,600);

var sqr = paper.rect(650, 30, 120, 120);
sqr.attr({fill:"purple", opacity:1});

var elp = paper.ellipse(90, 90, 60, 60);
elp.attr({fill:"red", opacity:1});


prep();

function prep() {
	elp.animate({cx: 320 , cy: 300}, 1650);
	sqr.animate({x: 460, y:240}, 1600, meet);
}

function meet() {
	elp.animate({cx: 400, cy:300}, 1650);
	sqr.animate({x:340, y:240}, 1600, warp_1);
}

function warp_1() {
	elp.animate({rx: 140}, 825);
	sqr.animate({height:280, y:160}, 825, reset_1);
}

function reset_1() {
	elp.animate({rx: 60, ry: 60}, 825);
	sqr.animate({height:120, width:120, x:340, y:240}, 825, warp_2);
}

function warp_2() {
	elp.animate({ry: 140}, 825);
	sqr.animate({width:280, x:260}, 825, reset_2);
}

function reset_2() {
	elp.animate({rx: 60, ry: 60}, 825);
	sqr.animate({height:120, width:120, x:340, y:240}, 825, warp_3);
}

function warp_3() {
	elp.animate({rx:140, ry: 140, opacity:0.5}, 825);
	sqr.animate({height:80, width:80, x:360, y:260}, 825, reset_3);
}

function reset_3() {
	elp.animate({rx: 60, ry: 60, opacity:1}, 825);
	sqr.animate({height:120, width:120, x:340, y:240}, 825, warp_4);
}

function warp_4() {
	elp.animate({rx: 40, ry: 40, opacity:0.5}, 825);
	sqr.animate({height:260, width:260, x:270, y:170, opacity:0.8}, 825, reset_4);
}

function reset_4() {
	elp.animate({rx: 60, ry: 60, opacity:1}, 825);
	sqr.animate({height:120, width:120, x:340, y:240, opacity:1}, 825, warp_5);
}

function warp_5() {
	elp.animate({rx:140, ry: 140, opacity:0.5}, 825);
	sqr.animate({height:260, width:260, x:270, y:170, r:50, opacity:0.8}, 825, reset_5);
}

function reset_5() {
	elp.animate({rx: 60, ry: 60, opacity:1}, 825);
	sqr.animate({height:120, width:120, x:340, y:240, opacity:1}, 825, flash_1);
}

function flash_1() {
	var f1 = paper.rect(0,0,800,600).attr({fill:"white"});
	f1.animate({x:0, y:0},400, flash_2);
}

function flash_2() {
	var f2 = paper.rect(0,0,800,600).attr({fill:"yellow"});
	f2.animate({x:0, y:0},400, flash_3);
}

function flash_3() {
	var f3 = paper.rect(0,0,800,600).attr({fill:"white"});
	f3.animate({x:0, y:0},400, cena);
}

function cena() {
	var back = paper.image("images/background.jpg", 0,0,800,600);
	var pic = paper.image("images/cena.png", 225, 100, 350, 500);
	//pic.animate({x:0, y:0},400);
}


}
};