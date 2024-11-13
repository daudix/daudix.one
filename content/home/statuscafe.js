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
