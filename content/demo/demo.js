// Slider
var slider = document.getElementById("range");
var output = document.getElementById("range-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Spaceship control center
const colorPickerLight = document.querySelector("#color-picker-light");
const colorPickerDark = document.querySelector("#color-picker-dark");

let accentColorLight = colorPickerLight.value;
let accentColorDark = colorPickerDark.value;

colorPickerLight.addEventListener("input", updateAccentColorLight);
colorPickerDark.addEventListener("input", updateAccentColorDark);

function updateAccentColorLight() {
	accentColorLight = colorPickerLight.value;
	updateStyles();
}

function updateAccentColorDark() {
	accentColorDark = colorPickerDark.value;
	updateStyles();
}

function updateStyles() {
	let styleElement = document.getElementById("dynamic-styles");

	if (!styleElement) {
		styleElement = document.createElement("style");
		styleElement.id = "dynamic-styles";
		document.head.appendChild(styleElement);
	}

	let styles = `
    :root {
      --accent-color: ${accentColorLight};
    }
    [data-theme="dark"] {
      --accent-color: ${accentColorDark};
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --accent-color: ${accentColorDark};
      }
    }
  `;

	styleElement.textContent = styles;
}

updateStyles();
