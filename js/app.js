class Tamagotchi {
	constructor(name) {
		this.name = name;
	}
	eat() {
		
	}
	play() {
		console.log('Time to play');
	}
	sleep() {
		console.log('Time to go to bed');
	}
	wakeUp() {
		console.log('Time to get up');
	}
}

const hatchButton = document.getElementById('hatch-button');
const startLevels = $('#bb1, #bb2, #bb3, #bb4, #bb5, #hb1, #hb2, #hb3, #hb4, #hb5, #tb1, #tb2, #tb3, #tb4, #tb5');
const feedLevel = $('#hb3, #hb4, #hb5, #hb6, #hb7, #hb8, #hb9, #hb10');
const tiredLevel = $('#tb3, #tb4, #tb5, #tb6, #tb7, #tb8, #tb9, #tb10');
const boredLevel = $('#bb3, #bb4, #bb5, #bb6, #bb7, #bb8, #bb9, #bb10');

function hatchFunc() {
	$('.button').css('visibility', 'visible');
	$('#hatch-button').css('visibility', 'hidden');	
	$('img').attr('src', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/c0.0.768.768a/s552x414/57608888_10100620046004674_860073329942331392_o.jpg?_nc_cat=105&_nc_sid=da31f3&_nc_oc=AQmw7F0EqFOgAf5easEe6bB1YuyQtSBYXADjX3Rh8JIwZSz0xLbVp_JGOQr_YdVtePM&_nc_ht=scontent-dfw5-1.xx&oh=a7507529c8cbb1cb38c7b5018a89d450&oe=5F18A1C5');
	startLevels.css('background-color', 'red');
}

function feed() {
	if (document.getElementById('hb1').style.backgroundColor === 'white') {
		console.log('dead');	
	} else if (document.getElementById('hb5').style.backgroundColor === 'white') {
		$('.hunger-bar').css('background-color', 'white');
	} else {
		feedLevel.css('background-color', 'white');
	}
}

$('#hatch-button').on('click', hatchFunc);
$('#feed-button').on('click', feed);