const viewportWidth = window.innerWidth;
const fluttershy = document.getElementById("fluttershy");

function handleFluttershyClick() {
	fluttershy.classList.add("flying");
	fluttershy.addEventListener("animationend", function () {
		fluttershy.classList.remove("flying");
	});
}

document.getElementById("shy").addEventListener("click", handleFluttershyClick);
