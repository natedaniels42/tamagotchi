class Tamagotchi {
	constructor(name, sleep, age) {
		this.name = name;
		this.sleep = false;
		this.age = 0;
	}
	eat() {
		if (document.getElementById('hb1').style.backgroundColor === 'rgb(255, 255, 255)') {
			death();
		} else if (document.getElementById('hb5').style.backgroundColor === 'rgb(255, 255, 255)') {
			$('.hunger-bar').css('background-color', 'rgb(255, 255, 255)');
		} else {
			feedLevel.css('background-color', 'rgb(255, 255, 255)');
		}
	}
	play() {
		if (document.getElementById('bb1').style.backgroundColor === 'rgb(255, 255, 255)') {
			death();
		} else if (document.getElementById('bb5').style.backgroundColor === 'rgb(255, 255, 255)') {
			$('.boredom-bar').css('background-color', 'rgb(255, 255, 255)');
		} else {
			boredLevel.css('background-color', 'rgb(255, 255, 255)');
		}
	}
	getSleep() {
		this.sleep = true;
		$('img').attr('src', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/54211691_10100608712457194_3096844443173519360_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_oc=AQkGoWSofA1lPCo0juNUZAG5VNvM9Ty6KNvV1Uuqg_jwKuu0Xw6IdpDPRp9mBM8xh5k&_nc_ht=scontent-dfw5-1.xx&oh=17073fa6ce784fa3ebbf3f1e5378fb8a&oe=5F17A3F0');
		return this.sleep;

	}
	wakeUp() {
		this.sleep = false;
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

function startTimer() {
	const timer = setInterval(function() {
		if (hungerTop.style.backgroundColor !== 'rgb(255, 0, 0)' && tiredTop.style.backgroundColor !== 'rgb(255, 0, 0)' && boredTop.style.backgroundColor !== 'rgb(255, 0, 0)') {
			time++;
			console.log(time);
			console.log(yourTamagotchi);
			if (time % 60 === 0) {
				birthday();
			//if (time % 60 === 0) {
				//for (let i = 1; i < 50; i++)
				//console.log('works');
				//sleepTimer();
			} else if (time % 10 === 0) {
				hungerTimer();
				tiredTimer();
				boredTimer();
			}
		} else {
			death();
			clearInterval(timer);
		}
	}, 1000);
}

function sleepTimer() {
	for (let i = 10; i > 0; i--) {
		if ($(`#tb${i}`).css('backgroundColor') !== 'rgb(255, 255, 255)') {
			$(`#tb${i}`).css('backgroundColor', 'rgb(255, 255, 255');
			return;
		}
	}
}

function hungerTimer() {
	for (let i = 1; i <= 10; i++) {
		if ($(`#hb${i}`).css('background-color') !== 'rgb(255, 0, 0)') {
			$(`#hb${i}`).css('background-color', 'rgb(255, 0, 0)');
			return;
		}
	}
}

function tiredTimer() {
	for (let i = 1; i <= 10; i++) {
		if ($(`#tb${i}`).css('background-color') !== 'rgb(255, 0, 0)') {
			$(`#tb${i}`).css('background-color', 'rgb(255, 0, 0)');
			return;
		}
	}
}

function boredTimer() {
	for (let i = 1; i <= 10; i++) {
		if ($(`#bb${i}`).css('background-color') !== 'rgb(255, 0, 0)') {
			$(`#bb${i}`).css('background-color', 'rgb(255, 0, 0)');
			return;
		}
	}
}

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
	$('img').attr('src', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/57608888_10100620046004674_860073329942331392_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_oc=AQkTToCoTq8rCGMzljNfaFAEp1aXJTZGgELqyt8953XJjzwCgSGvCv2PCBgTxW9CAuI&_nc_ht=scontent-dfw5-1.xx&oh=ced60ac15631b932c3c3b4ec5f4874d5&oe=5F18A580');
	startLevels.css('background-color', 'red');
	$('.age').append(`<span>${yourTamagotchi.age}`);
	startTimer();
	}

function death() {
	$('img').attr('src', 'https://image.shutterstock.com/image-vector/gravestone-on-white-background-vector-260nw-199099982.jpg');
	$('.hatch').prepend(`<h1>${yourTamagotchi.name} has died. you should think about whether you are responsible enough for a pet`);
	$('.buttons').remove();
}

function birthday() {
	yourTamagotchi.age++;
	$('.age span').text(`${yourTamagotchi.age}`);	
}


$('#name-button').on('click', pickName);
$('#hatch-button').on('click', hatch);
$('#sleep-button').on('click', yourTamagotchi.getSleep);
$('#feed-button').on('click', yourTamagotchi.eat);
$('#play-button').on('click', yourTamagotchi.play);








