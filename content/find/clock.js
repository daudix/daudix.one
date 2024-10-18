function updateClock() {
	const options = {
		// No, I'm not in Moscow, just so happens the timezone is the same there
		timeZone: "Europe/Moscow",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	const clockElement = document.getElementById("clock");
	const myLocalTime = new Date().toLocaleString("en-US", options);
	const userLocalTime = new Date().toLocaleString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	if (myLocalTime === userLocalTime) {
		clockElement.textContent = "Same time as yours";
	}

	else {
		clockElement.textContent = myLocalTime;
	}
}

updateClock();
setInterval(updateClock, 1000);
