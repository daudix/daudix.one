const closable = document.querySelectorAll("details.closable");

closable.forEach((detail) => {
	detail.addEventListener("toggle", () => {
		if (detail.open) setTargetDetail(detail);
	});
});

function setTargetDetail(targetDetail) {
	closable.forEach((detail) => {
		if (detail !== targetDetail) {
			detail.open = false;
		}
	});
}

document.addEventListener("click", function (event) {
	const isClickInsideDetail = [...closable].some((detail) =>
		detail.contains(event.target)
	);

	if (!isClickInsideDetail) {
		closable.forEach((detail) => {
			detail.open = false;
		});
	}
});

const toggleSidebar = document.getElementById('toggle-sidebar');
const siteSidebar = document.getElementById('site-sidebar');
const mainContent = document.getElementById('main-content');

mainContent.addEventListener('click', (event) => {
  if (toggleSidebar.checked && !siteSidebar.contains(event.target)) {
    toggleSidebar.checked = false;
  }
});
