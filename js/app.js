class Tamagotchi {
	constructor(name, sleep, age, evolved) {
		this.name = name;
		this.sleep = false;
		this.age = 0;
		this.evolved = false;
	}
	eat() {
		if (!this.sleep) {
			if (this.evolved) {
				$('img').attr('src', 'https://media1.giphy.com/media/5Xlaz6wWOqxLa/giphy.gif?cid=ecf05e4730bc22b3947c058a363f9b6b91c27a50d6164cb9&rid=giphy.gif')
			} else { 
				$('img').attr('src','https://media1.giphy.com/media/i2Hctnr6h3uW1ciekp/giphy.gif?cid=ecf05e47771442bdb22af6ddc2c89551316152da100f9c7c&rid=giphy.gif');
			}
			if ($('#hb2').css('background-color') === 'rgb(255, 255, 255)') {
				$('#hb1').css('background-color', 'rgb(255, 255, 255)');
			} else if ($('#hb5').css('background-color') === 'rgb(255, 255, 255)') {
				hungerMid.css('background-color', 'rgb(255, 255, 255)');
			} else {
				feedLevel.css('background-color', 'rgb(255, 255, 255)');
			}
		}
	}
	play() {
		if (!this.sleep) {
			if (this.evolved) {
				$('img').attr('src', 'https://media2.giphy.com/media/IhgKEBNmk3aZEe4dbw/giphy.gif?cid=ecf05e4750e8747a862816337a6111b5ca5a1cc91c67e8ce&rid=giphy.gif');
			} else {	
				$('img').attr('src', playImage[randomNumber()]);
			}
			if ($('#bb2').css('background-color') === 'rgb(255, 255, 255)') {
				$('#bb1').css('background-color', 'rgb(255, 255, 255)');
			} else if ($('#bb5').css('background-color') === 'rgb(255, 255, 255)') {
				boredMid.css('background-color', 'rgb(255, 255, 255)');
			} else {
				boredLevel.css('background-color', 'rgb(255, 255, 255)');
			}
		}
	}
	getSleep() {
		if (!this.sleep) { 
			this.sleep = true;
			if (this.evolved) {
				$('img').attr('src', 'https://media2.giphy.com/media/gB0vERk5kFR5u/giphy.gif?cid=ecf05e47307356bb540b51256b67e29bb86c80379dd76755&rid=giphy.gif');
			} else {
				$('img').attr('src', sleepImage[randomNumber()]);
			}
		}
	}
	wakeUp() {
		if (this.sleep) {
			this.sleep = false;
			if (this.evolved) {
				$('img').attr('src', 'https://media1.giphy.com/media/daOM5veK5Mwasb5TLY/giphy.gif?cid=ecf05e47a5745400e47c11d447370a9bb8b793087fc98a28&rid=giphy.gif');
			} else {
				$('img').attr('src', wakeImage[randomNumber()]);
			}
		}
	}	
	evolve() {
		if (!this.sleep) {
			this.evolved = true;
			$('#evolve-button').css('visibility', 'hidden');
			$('img').attr('src', 'https://media0.giphy.com/media/Tf3BH96icg4BwOxWBL/giphy.gif?cid=ecf05e47135313d04f250f615a43aa434cb92a74fa058781&rid=giphy.gif');
		}
	}
}

let time = 0;
const tom = new Tamagotchi();
const hatchButton = $('#hatch-button');
const hungerTop = $('#hb10');
const tiredTop = $('#tb10');
const boredTop = $('#bb10');
const hungerBottom = $('#hb1');
const boredBottom = $('#bb1');
const tiredBottom = $('#tb1');
const hungerMid = $('#hb2, #hb3, #hb4, #hb5, #hb6, #hb7, #hb8, #hb9, #hb10');
const boredMid = $('#bb2, #bb3, #bb4, #bb5, #bb6, #bb7, #bb8, #bb9, #bb10')
const startLevels = $('#bb1, #bb2, #bb3, #bb4, #bb5, #hb1, #hb2, #hb3, #hb4, #hb5, #tb1, #tb2, #tb3, #tb4, #tb5');
const feedLevel = $('#hb3, #hb4, #hb5, #hb6, #hb7, #hb8, #hb9, #hb10');
const tiredLevel = $('#tb3, #tb4, #tb5, #tb6, #tb7, #tb8, #tb9, #tb10');
const boredLevel = $('#bb3, #bb4, #bb5, #bb6, #bb7, #bb8, #bb9, #bb10');

const hatchImage = ['https://media1.giphy.com/media/3lx1OUokCgBTPS4DFG/giphy.gif?cid=ecf05e47771442bdb22af6ddc2c89551316152da100f9c7c&rid=giphy.gif', 'https://media2.giphy.com/media/8vRkhUchMLddbr7pBV/giphy.gif?cid=ecf05e47b6ce1d135251ccf7049f716c97e1fc4b661ae730&rid=giphy.gif', 'https://media0.giphy.com/media/1qbSNZXvP8QUA3hiXv/giphy.gif?cid=ecf05e4731992dab22ac2fc220b9e4fbc2f088a5ef899161&rid=giphy.gif'];
const sleepImage = ['https://media2.giphy.com/media/9PtjeJA6KnTnMZIDED/giphy.gif?cid=ecf05e47771442bdb22af6ddc2c89551316152da100f9c7c&rid=giphy.gif', 'https://media3.giphy.com/media/1PgNN51VqTs8BcYOs6/giphy.gif?cid=ecf05e4745fd7e7c94f122107816f0e75e479f7c0b6e471d&rid=giphy.gif', 'https://media2.giphy.com/media/8YsZQaSI7c4f7g6bZm/giphy.gif?cid=ecf05e47f7068eb1757d83a7e5794a99c2b1fd93a60c78e4&rid=giphy.gif'];
const wakeImage = ['https://media2.giphy.com/media/1AjEeRnDwO3Sc2VF7G/giphy.gif?cid=ecf05e47771442bdb22af6ddc2c89551316152da100f9c7c&rid=giphy.gif', 'https://media0.giphy.com/media/fxOcPNZkLa68iQ52l9/giphy.gif?cid=ecf05e4792a9c39c8bfd0ff9c8e046689c2eccac631f08c8&rid=giphy.gif', 'https://media0.giphy.com/media/1r8Sh7qL6jl5hKd82X/giphy.gif?cid=ecf05e47b6ce1d135251ccf7049f716c97e1fc4b661ae730&rid=giphy.gif'];
const playImage = ['https://media0.giphy.com/media/atajvz5OSnwlg07vXN/giphy.gif?cid=ecf05e47589b1e9bc488eb65a860716cdea8653d4ce01a1a&rid=giphy.gif', 'https://media1.giphy.com/media/fik3syvAT6YXbRWjF5/giphy.gif?cid=ecf05e4731992dab22ac2fc220b9e4fbc2f088a5ef899161&rid=giphy.gif', 'https://media1.giphy.com/media/Y4sWCxVW2vHbGWfJPb/giphy.gif?cid=ecf05e4792a9c39c8bfd0ff9c8e046689c2eccac631f08c8&rid=giphy.gif'];

function randomNumber() {
	return Math.floor(Math.random() * 3);
}

function startTimer() {
	const timer = setInterval(function() {
		if (hungerTop.css('background-color') !== 'rgb(255, 0, 0)' && tiredTop.css('background-color') !== 'rgb(255, 0, 0)' && boredTop.css('background-color') !== 'rgb(255, 0, 0)' && hungerBottom.css('background-color') !== 'rgb(255, 255, 255)' && boredBottom.css('background-color') !== 'rgb(255, 255, 255)') {
			time++;
			$('#time').text(`${time}`);
			console.log(time);
			if (time === 180) {
				$('#evolve-button').css('visibility', 'visible');
				birthday();
			} else if (time % 60 === 0) {
				birthday();
			} else if (time % 5 === 0 && tom.sleep) {
				sleepTimer();
				if (tiredBottom.css('background-color') === 'rgb(255, 255, 255)') {
					tom.wakeUp();
				}
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
	tom.name = prompt('give your Tamagotchi a name');
	$('#name-button').css('visibility', 'hidden');
	$('.name-paragraph').remove();
	$('#hatch-button').css('visibility', 'visible');
	return tom.name;
}

function hatch() {
	$('#name').append(`<h1 id="greeting">Hi! My name is ${tom.name}`);
	$('.button').css('visibility', 'visible');
	$('#hatch-button').css('visibility', 'hidden');	
	$('.buttons h1').remove();
	$('img').attr('src', hatchImage[randomNumber()]);
	startLevels.css('background-color', 'red');
	$('.age').append(`<span>${tom.age}`);
	startTimer();
	}

function death() {
	$('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYElBS0lUKIonisIFB0Gi2XG7D-dFGNNvXg&usqp=CAU');
	$('.hatch').prepend(`<h1>${tom.name} has died. you should think about whether you are responsible enough for a pet`);
	$('.buttons button').css('visibility', 'hidden');
	$('#greeting').remove();
	$('#play-again').css('visibility', 'visible');
	$('#evolve-button').css('visibility', 'hidden');
}

function birthday() {
	tom.age++;
	$('.age span').text(`${tom.age}`);	
}

function playAgain() {
	$('#name').append("<p class='name-paragraph'>Click here to pick a name");
	$('#name-button').css('visibility', 'visible');
	$('.hatch h1').remove();
	$('#play-again').css('visibility', 'hidden');
	$('.age span').remove();
	$('div').css('background-color', 'rgb(255, 255, 255)');
	$('img').attr('src', 'https://st2.depositphotos.com/3687485/10323/v/950/depositphotos_103239208-stock-illustration-color-easter-egg-cartoon-spring.jpg');
	tom.age = 0;
	tom.evolved = false;
	time = 0;
}

$('#name-button').on('click', pickName);
$('#hatch-button').on('click', hatch);
$('#sleep-button').on('click', function() {
	tom.getSleep();
});
$('#wake-up-button').on('click', function() {
	tom.wakeUp();
});
$('#feed-button').on('click', function() {
	tom.eat()
});
$('#play-button').on('click', function() {
	tom.play();
});
$('#play-again').on('click', playAgain);
$('#evolve-button').on('click', function() {
	tom.evolve();
});







