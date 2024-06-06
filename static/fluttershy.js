const viewportWidth = window.innerWidth;
const fluttershy = document.getElementById("fluttershy");

// Fallback for older browsers (burn in hell Apple!)
function updateVwVariable() {
	let vw = window.innerWidth || document.documentElement.clientWidth;
	document.documentElement.style.setProperty("--vw", `-${vw}px`);
}

function handleFluttershyClick() {
	fluttershy.classList.add("flying");
	fluttershy.addEventListener("animationend", function () {
		fluttershy.classList.remove("flying");
	});
}

updateVwVariable();
window.addEventListener("resize", updateVwVariable);
document.getElementById("shy").addEventListener("click", handleFluttershyClick);
