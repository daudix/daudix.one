const splashHash = "#splash";
const skipSplash = localStorage.getItem("skipSplash") === "true";
const currentHash = window.location.hash;

if (skipSplash && currentHash !== splashHash) {
	window.location.replace("/home");
}

const skipSplashCheckbox = document.getElementById("skip-splash");
skipSplashCheckbox.checked = skipSplash;
skipSplashCheckbox.addEventListener("change", () => {
	localStorage.setItem("skipSplash", skipSplashCheckbox.checked);
});
