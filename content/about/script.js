function updateClock() {
	const options = {
		timeZone: "Europe/Moscow",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};
	const now = new Date().toLocaleString("en-US", options);
	const clockElement = document.getElementById("clock");
	clockElement.textContent = now;
}

function insertFluttershy() {
	const img = document.createElement("img");
	img.id = "fluttershy";
	img.className = "transparent no-hover";
	img.src = "fluttershy.gif";
	document.body.appendChild(img);
	updateFluttershyPosition();
}

function handleClick() {
	const img = document.getElementById("fluttershy");
	if (img) {
		img.classList.add("fly");
		setTimeout(() => {
			img.classList.remove("fly");
		}, 2000);
	}
}

function updateFluttershyPosition() {
	const img = document.getElementById("fluttershy");
	const siteNav = document.getElementById("site-nav");
	if (img && siteNav) {
		const navRect = siteNav.getBoundingClientRect();
		img.style.transform = `translateY(${navRect.top}px)`;
	}
}

updateClock();
setInterval(updateClock, 1000);

insertFluttershy();
document.getElementById("shy").addEventListener("click", handleClick);
window.addEventListener("scroll", updateFluttershyPosition);
window.addEventListener("resize", updateFluttershyPosition);
