class Tamagotchi {
	constructor(name) {
		this.name = name;
	}
	eat() {
		if (document.getElementById('hb1').style.backgroundColor === 'white') {
		death();
	} else if (document.getElementById('hb5').style.backgroundColor === 'white') {
		$('.hunger-bar').css('background-color', 'white');
	} else {
		feedLevel.css('background-color', 'white');
	}
}
	play() {
		if (document.getElementById('bb1').style.backgroundColor === 'white') {
			death();
		} else if (document.getElementById('bb5').style.backgroundColor === 'white') {
			$('.boredom-bar').css('background-color', 'white');
		} else {
			boredLevel.css('background-color', 'white');
		}
	}
	sleep() {
		console.log('Time to go to bed');
	}
	wakeUp() {
		console.log('Time to get up');
	}
}




const hatchButton = document.getElementById('hatch-button');
const hungerTop = document.getElementById('hb10');
const tiredTop = document.getElementById('tb10');
const boredTop = document.getElementById('bb10');
const startLevels = $('#bb1, #bb2, #bb3, #bb4, #bb5, #hb1, #hb2, #hb3, #hb4, #hb5, #tb1, #tb2, #tb3, #tb4, #tb5');
const feedLevel = $('#hb3, #hb4, #hb5, #hb6, #hb7, #hb8, #hb9, #hb10');
const tiredLevel = $('#tb3, #tb4, #tb5, #tb6, #tb7, #tb8, #tb9, #tb10');
const boredLevel = $('#bb3, #bb4, #bb5, #bb6, #bb7, #bb8, #bb9, #bb10');
const yourTamagotchi = new Tamagotchi();
let time = 0;
/*
function startTimer() {
	const timer = setInterval(function() {
		if (time < 30) {
			time++;
			console.log(time);
		}
	}, 1000);
*/
function pickName() {
	yourTamagotchi.name = prompt('give your Tamagotchi a name');
	$('#name-button').remove();
	$('.name-paragraph').remove();
	$('#hatch-button').css('visibility', 'visible');
	return yourTamagotchi.name;
}

function hatch() {
	$('#name').append(`<h1>Hi! My name is ${yourTamagotchi.name}`);
	$('.button').css('visibility', 'visible');
	$('#hatch-button').css('visibility', 'hidden');	
	$('.buttons h1').remove();
	$('img').attr('src', 'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2011/11/waldo_pose_a_p.jpg');
	startLevels.css('background-color', 'red');
	//startTimer();
	
	}

function death() {
	$('img').attr('src', 'https://image.shutterstock.com/image-vector/gravestone-on-white-background-vector-260nw-199099982.jpg');
	$('.hatch').prepend(`<h1>${yourTamagotchi.name} has died. you should think about whether you are responsible enough for a pet`);
	$('.buttons').remove();
}

$('#name-button').on('click', pickName);
$('#hatch-button').on('click', hatch);
$('#feed-button').on('click', yourTamagotchi.eat);
$('#play-button').on('click', yourTamagotchi.play);

//console.log(hungerTop.style.backgroundColor);
//console.log(tiredTop.style.backgroundColor);
//console.log(document.getElementById('hb10').style.backgroundColor);


