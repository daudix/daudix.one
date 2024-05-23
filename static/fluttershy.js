function insertFluttershy() {
	const img = document.createElement("img");
	img.id = "fluttershy";
	img.className = "transparent no-hover";
	img.src = "fluttershy.gif";
	document.body.appendChild(img);
	updateFluttershyPosition();
}

function handleFluttershyClick() {
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

insertFluttershy();
document.getElementById("shy").addEventListener("click", handleFluttershyClick);
window.addEventListener("scroll", updateFluttershyPosition);
window.addEventListener("resize", updateFluttershyPosition);
