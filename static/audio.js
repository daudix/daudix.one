var audioButton = document.querySelectorAll('.audio');

for (var i = 0; i < audioButton.length; i++) {
	audioButton[i].addEventListener('click', function (event) {
		playAudio(this.dataset.audio);
	});
}

function playAudio(url) {
	new Audio(url).play();
}
