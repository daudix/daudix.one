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

updateClock();
setInterval(updateClock, 1000);
