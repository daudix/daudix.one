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
