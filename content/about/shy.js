document.getElementById("shy").addEventListener("click", fluttershyAnim);

function fluttershyAnim() {
	const shy = document.getElementById("shy");
	shy.toggleAttribute("disabled");

	const squee = new Audio("/about/squee.mp3");
	squee.play();

	const fluttershy = document.createElement("img");
	fluttershy.setAttribute("id", "fluttershy");
	fluttershy.setAttribute("alt", "fluttershy");
	fluttershy.setAttribute("src", "/about/squee.webp");
	fluttershy.classList.add("transparent", "no-hover", "drop-shadow");

	const mainContent = document.getElementById("main-content");
	mainContent.appendChild(fluttershy);

	fluttershy.addEventListener("animationend", function () {
		shy.toggleAttribute("disabled");
		fluttershy.remove();
	});
}
