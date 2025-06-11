// Last.fm "Now playing"
const player = document.getElementById("player");
const cover = document.getElementById("cover");
const title = document.getElementById("player-title");
const titleContainer = document.getElementById("player-title-container");
const artist = document.getElementById("player-artist");
const artistContainer = document.getElementById("player-artist-container");
const link = document.getElementById("player-go");

let lastTrackID = null;

async function fetchNowPlaying() {
	try {
		// Replace my username and API key if you're going to use this
		const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=daudix&api_key=db60767a26fe9d01a170898e19814233&format=json&limit=1`);
		const data = await res.json();
		const track = data.recenttracks?.track?.[0];
		if (!track) return;

		const trackID = track.mbid || track.url;
		const isPlaying = track["@attr"]?.nowplaying === "true";

		if (trackID !== lastTrackID || isPlaying !== player.classList.contains("playing")) {
			lastTrackID = trackID;

			title.textContent = track.name;
			artist.textContent = track.artist["#text"];
			cover.src = track.image.find(img => img.size === "medium")?.["#text"] || "image-missing.svg";
			link.href = track.url;

			player.classList.toggle("playing", isPlaying);

			// Make sure we're starting anew
			titleContainer.classList.remove("marquee", "overshoot-row");
			artistContainer.classList.remove("marquee", "overshoot-row");

			const titleWidth = title.offsetWidth;
			const titleContainerWidth = titleContainer.getBoundingClientRect().width;
			const artistWidth = artist.offsetWidth;
			const artistContainerWidth = artistContainer.getBoundingClientRect().width;

			title.style.setProperty("--text-width", `${titleWidth}`);
			title.style.setProperty("--container-width", `${titleContainerWidth}`);
			artist.style.setProperty("--text-width", `${artistWidth}`);
			artist.style.setProperty("--container-width", `${artistContainerWidth}`);

			if (titleWidth > titleContainerWidth) {
				titleContainer.classList.add("marquee", "overshoot-row");
			}
			if (artistWidth > artistContainerWidth) {
				artistContainer.classList.add("marquee", "overshoot-row");
			}
		}
	} catch (e) {
		console.error("Failed to fetch now playing track:", e);
	}
}

setInterval(fetchNowPlaying, 10000);
fetchNowPlaying();

// DEBUG FUNCTIONS
function togglePlaying() {
	player.classList.toggle("playing");
}

function toggleTitleMarquee() {
	titleContainer.classList.toggle("marquee");
	titleContainer.classList.toggle("overshoot-row");
}

function toggleArtistMarquee() {
	artistContainer.classList.toggle("marquee");
	artistContainer.classList.toggle("overshoot-row");
}

function forceReload() {
	lastTrackID = null;
	fetchNowPlaying();
}

// status.cafe
document.addEventListener("DOMContentLoaded", function () {
	fetch("https://status.cafe/users/daudix/status.json")
		.then(r => r.json())
		.then(r => {
			if (!r.content.length) {
				document.getElementById("statuscafe-content").innerHTML = "No status yet."
				return
			}
			document.getElementById("statuscafe-content").innerHTML = r.content
			document.getElementById("statuscafe-face").innerHTML = r.face
			document.getElementById("statuscafe-time-ago").innerHTML = r.timeAgo
		})
		.catch(error => console.error("Error fetching status:", error));
});

// Flutter
document.getElementById("shy").addEventListener("click", fluttershyAnim);

function fluttershyAnim() {
	const shy = document.getElementById("shy");
	shy.setAttribute("disabled", "true");

	const squee = new Audio("/home/squee.mp3");
	squee.play();

	const fluttershy = document.getElementById("fluttershy");
	fluttershy.classList.add("active");

	fluttershy.addEventListener("animationend", function () {
		shy.removeAttribute("disabled");
		fluttershy.classList.remove("active");
	});
}

// Discord status
document.addEventListener("DOMContentLoaded", function () {
	const indicatorElement = document.getElementById("online-indicator");
	indicatorElement.innerHTML = "N/A";

	fetch("https://api.lanyard.rest/v1/users/650757995378114581")
		.then(response => response.json())
		.then(data => {
			const status = data.data.discord_status;

			indicatorElement.classList.remove("online", "idle", "dnd", "offline");
			indicatorElement.classList.add(status);

			switch (status) {
				case "online":
					indicatorElement.innerHTML = "Online";
					break;
				case "idle":
					indicatorElement.innerHTML = "Idle";
					break;
				case "dnd":
					indicatorElement.innerHTML = "DND";
					break;
				case "offline":
					indicatorElement.innerHTML = "Offline";
					break;
			}
		})
		.catch(error => {
			console.error("Error fetching Lanyard data:", error);
			indicatorElement.innerHTML = "N/A";
		});
});

// Clock
function updateClock() {
	const options = {
		// No, I'm not in Moscow, just so happens the timezone is the same there
		timeZone: "Europe/Moscow",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	const clockElement = document.getElementById("clock");
	const localTime = new Date().toLocaleString("en-IE", options);

	clockElement.textContent = localTime;
}

updateClock();
setInterval(updateClock, 1000);
