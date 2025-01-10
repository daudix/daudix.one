//
// Print calendar
//
const printCalendar = () => {
	console.log(`Print button clicked`);
	window.print();

	//
	// "Lab Rat" achievement
	//
	if (localStorage.labRatAchieved !== "true") {
		console.log(`Achievement "Lab Rat" unlocked`);
		localStorage.labRatAchieved = true;
		achievementLabRat = document.getElementById("achievement-lab-rat");
		achievementLabRat.classList.add("active");
		playAchievementSound();
		achievementLabRat.addEventListener("animationend", function () {
			achievementLabRat.classList.remove("active");
		});
	}
};

const printCalendarButton = document.getElementById("calendar-print");
printCalendarButton.addEventListener("click", printCalendar);

window.onafterprint = function () {

}

//
// "Basic Science" achievement
//

// List of all checkbox IDs
const checkboxIds = [
	"cube-dispenser",
	"cube-hazard",
	"pellet-hazard",
	"pellet-catcher",
	"water-hazard",
	"fling-enter",
	"fling-exit",
	"turret-hazard",
	"dirty-water",
	"cake"
];

// Get or initialize toggled state and achievement state from localStorage
let toggled = JSON.parse(localStorage.getItem('toggled')) || {};
let achievementBasicScience = JSON.parse(localStorage.getItem('achievementBasicScience')) || false; // Track if achievement has been triggered

// Initialize toggled state for any missing checkboxes as false
checkboxIds.forEach(id => {
	if (toggled[id] === undefined) {
		toggled[id] = false;
	}
});

// Save updated toggled state in localStorage
const saveToggledState = () => {
	localStorage.setItem('toggled', JSON.stringify(toggled));
};

// Save achievement state in localStorage
const saveAchievementBasicScience = () => {
	localStorage.setItem('achievementBasicScience', JSON.stringify(achievementBasicScience));
};

// Check if all checkboxes have been interacted with
const allToggledOnce = () => {
	return checkboxIds.every(id => toggled[id]);
};

// Play the achievement sound
const playAchievementSound = () => {
	const audio = new Audio('/calendar/achievement.mp3');
	audio.play();
};

// Add event listeners to all checkboxes
checkboxIds.forEach(id => {
	const checkbox = document.getElementById(id);

	checkbox.addEventListener('change', () => {
		// Mark this checkbox as interacted
		toggled[id] = true;

		// Save the updated state
		saveToggledState();

		// Check if all checkboxes have been interacted
		if (allToggledOnce() && !achievementBasicScience) {
			console.log(`Achievement "Basic Science" unlocked`);
			achievementBasicScience = true;
			achievementBasicScience = document.getElementById("achievement-basic-science");
			achievementBasicScience.classList.add("active");
			playAchievementSound();
			saveAchievementBasicScience();
			achievementBasicScience.addEventListener("animationend", function () {
				achievementBasicScience.classList.remove("active");
			});
		}
	});
});

//
// "Rocket Science" achievement
//

document.addEventListener("keydown", function (pEvent) {
	if ((pEvent.ctrlKey || pEvent.metaKey) && pEvent.key === "p") {
		if (localStorage.rocketScienceAchieved !== "true") {
			console.log(`Achievement "Rocket Science" unlocked`);
			localStorage.rocketScienceAchieved = true;
			const achievementRocketScience = document.getElementById("achievement-rocket-science");
			achievementRocketScience.classList.add("active");
			playAchievementSound();
			achievementRocketScience.addEventListener("animationend", function () {
				achievementRocketScience.classList.remove("active");
			});
		}
	}
});
