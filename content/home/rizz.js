document.getElementById("rizz").addEventListener("click", rizzItUp);

function rizzItUp() {
	const rizzDialog = document.getElementById("rizz-dialog");
	rizzDialog.remove();

	const vineBoomSoundEffect = "vine-boom.mp3";
	new Audio(vineBoomSoundEffect).play();

	const mainContent = document.getElementById("main-content");

	let subwaySurfers = document.getElementById("subway-surfers");
	if (subwaySurfers === null) {
		let subwaySurfers = document.createElement("iframe");
		subwaySurfers.setAttribute("id", "subway-surfers");
		subwaySurfers.setAttribute("src", "https://www.youtube-nocookie.com/embed/zZ7AimPACzc?autoplay=1&mute=1");
		subwaySurfers.setAttribute("name", "youtube embed");
		subwaySurfers.setAttribute("allow", "autoplay; encrypted-media");
		subwaySurfers.setAttribute("allowfullscreen", "true");
		mainContent.appendChild(subwaySurfers);
	}

	let oddlySatisfying = document.getElementById("oddly-satisfying");
	if (oddlySatisfying === null) {
		let oddlySatisfying = document.createElement("iframe");
		oddlySatisfying.setAttribute("id", "oddly-satisfying");
		oddlySatisfying.setAttribute("src", "https://www.youtube-nocookie.com/embed/ebnQsTk9s-s?autoplay=1");
		oddlySatisfying.setAttribute("name", "youtube embed");
		oddlySatisfying.setAttribute("allow", "autoplay; encrypted-media");
		oddlySatisfying.setAttribute("allowfullscreen", "true");
		mainContent.appendChild(oddlySatisfying);
	}
}
