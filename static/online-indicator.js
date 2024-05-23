fetch("https://api.lanyard.rest/v1/users/650757995378114581")
	.then(response => response.json())
	.then(data => {
		const indicatorElement = document.getElementById("online-indicator");
		const status = data.data.discord_status;

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
			default:
				indicatorElement.innerHTML = "Unknown";
		}
	})
	.catch(error => {
		console.error("Error fetching Lanyard data:", error);
	});
