/* Splash Screen ============================================================ */

const splash = document.getElementById("splash");
const skip = document.getElementById("skip-splash");
const STORAGE_KEY = "skipSplash";

const skipped = localStorage.getItem(STORAGE_KEY) === "true";
const targeted = location.hash === "#splash";

if (targeted) {
	splash.removeAttribute("hidden");
	splash.querySelector(".content")?.focus();
}
else if (skipped) {
	splash.setAttribute("hidden", "");
}
else {
	splash.removeAttribute("hidden");
}

if (skip) {
	skip.checked = skipped;
	skip.addEventListener("change", () => {
		localStorage.setItem(STORAGE_KEY, skip.checked);
	});
}

window.addEventListener("hashchange", () => {
	if (location.hash === "#splash") {
		splash.removeAttribute("hidden");
		splash.querySelector(".content")?.focus();
	}
});

/* Constants and DOM Elements =============================================== */

const lastFmUser = "daudix";
const lastFmApiKey = "db60767a26fe9d01a170898e19814233"
const lastFmPlayer = document.getElementById("player");
const lastFmCover = document.getElementById("cover");
const lastFmTitle = document.getElementById("player-title");
const lastFmTitleContainer = document.getElementById("player-title-container");
const lastFmArtist = document.getElementById("player-artist");
const lastFmArtistContainer = document.getElementById("player-artist-container");
const lastFmLink = document.getElementById("player-go");
const statusCafeContent = document.getElementById("statuscafe-content");
const statusCafeFace = document.getElementById("statuscafe-face");
const statusCafeTimeAgo = document.getElementById("statuscafe-time-ago");
const discordStatus = document.getElementById("online-indicator");
const discordStatusText = document.getElementById("online-indicator-text");
const clock = document.getElementById("clock");
const flutter = document.getElementById("flutter");
const shy = document.getElementById("shy");
const squee = new Audio("/home/squee.mp3");
const ntfyInput = document.getElementById("ntfy-input");
const ntfySend = document.getElementById("ntfy-send");

let lastTrackID = null;
let lastDiscordStatus = "";
let lastTime = "";

/* Functions ================================================================ */

// Last.fm
async function fetchLastFm() {
	try {
		// Replace my username and API key if you're going to use this
		const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUser}&api_key=${lastFmApiKey}&format=json&limit=1`);
		const data = await res.json();
		const track = data.recenttracks?.track?.[0];
		if (!track) return;

		const trackID = track.mbid || track.url;
		const isPlaying = track["@attr"]?.nowplaying === "true";

		if (trackID !== lastTrackID || isPlaying !== lastFmPlayer.classList.contains("playing")) {
			lastTrackID = trackID;

			lastFmTitle.textContent = track.name;
			lastFmArtist.textContent = track.artist["#text"];
			lastFmCover.src = track.image.find(img => img.size === "medium")?.["#text"] || "home/image-missing.svg";
			lastFmLink.href = track.url;

			lastFmPlayer.classList.toggle("playing", isPlaying);

			updateMarquee();
		}
	} catch (e) {
		console.error("Failed to fetch now playing track:", e);
	}
}

// DEBUG FUNCTIONS
function togglePlaying() {
	lastFmPlayer.classList.toggle("playing");
}

function toggleTitleMarquee() {
	lastFmTitleContainer.classList.toggle("marquee");
	lastFmTitleContainer.classList.toggle("overshoot-row");
}

function toggleArtistMarquee() {
	lastFmArtistContainer.classList.toggle("marquee");
	lastFmArtistContainer.classList.toggle("overshoot-row");
}

function forceReload() {
	lastTrackID = null;
	fetchNowPlaying();
}

// status.cafe
async function fetchStatusCafe() {
	try {
		const res = await fetch("https://status.cafe/users/daudix/status.json");
		const r = await res.json();

		if (!r.content.length) {
			statusCafeContent.innerHTML = "No status yet.";
			return;
		}

		statusCafeContent.innerHTML = r.content;
		statusCafeFace.innerHTML = r.face;
		statusCafeTimeAgo.innerHTML = r.timeAgo;
	} catch (error) {
		console.error("Error fetching status:", error);
	}
}

// Flutter
function flutterAnim() {
	shy.setAttribute("disabled", "true");

	squee.play();

	flutter.classList.add("active");

	flutter.addEventListener("animationend", function () {
		shy.removeAttribute("disabled");
		flutter.classList.remove("active");
	}, { once: true });
}

// Discord status
async function fetchDiscordStatus() {
	try {
		const res = await fetch("https://api.lanyard.rest/v1/users/650757995378114581");
		const data = await res.json();
		const status = data.data.discord_status;

		if (status !== lastDiscordStatus) {
			lastDiscordStatus = status;

			discordStatus.classList.remove("online", "idle", "dnd", "offline");
			discordStatus.classList.add(status);

			switch (status) {
				case "online":
					discordStatusText.innerHTML = "Online";
					break;
				case "idle":
					discordStatusText.innerHTML = "Idle";
					break;
				case "dnd":
					discordStatusText.innerHTML = "DND";
					break;
				case "offline":
					discordStatusText.innerHTML = "Offline";
					break;
			}
		}
	} catch (error) {
		console.error("Error fetching Lanyard data:", error);
		discordStatusText.innerHTML = "N/A";
	}
}

// Clock
function updateClock() {
	const options = {
		// No, I'm not in Moscow, just so happens the timezone is the same there
		timeZone: "Europe/Moscow",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	const localTime = new Date().toLocaleString("en-IE", options);

	if (localTime !== lastTime) {
		clock.textContent = localTime;
		lastTime = localTime;
	}
}

// ntfy (stolen from https://azumanga.gay)
function send(message) {
	fetch("https://ntfy.sh/GAyU6UBdIVpKoUK3", {
		method: "POST",
		headers: { "Content-Type": "text/plain" },
		body: message
	})
}

function sendNotification() {
	if (!ntfyInput.value) return
	send(ntfyInput.value)

	ntfySend.classList.add("sent");
	ntfySend.firstChild.addEventListener("transitionend", () => {
		ntfySend.classList.remove("sent");
	}, { once: true });

	ntfyInput.value = ""
}

/* Initialization and Event Listeners ======================================= */

document.addEventListener("DOMContentLoaded", function () {
	fetchStatusCafe();

	fetchLastFm();
	setInterval(fetchLastFm, 10000);

	updateClock();
	setInterval(updateClock, 1000);

	fetchDiscordStatus();
	setInterval(fetchDiscordStatus, 10000);

	shy.addEventListener("click", flutterAnim);
	ntfySend.addEventListener("click", sendNotification);
});

window.addEventListener("resize", () => {
	requestAnimationFrame(updateMarquee);
});
