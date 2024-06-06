function handleFluttershyClick() {
	const fluttershy = document.getElementById("fluttershy");
	fluttershy.classList.add("flying");
	fluttershy.addEventListener("animationend", function () {
		fluttershy.classList.remove("flying");
	});
}

document.getElementById("shy").addEventListener("click", handleFluttershyClick);
