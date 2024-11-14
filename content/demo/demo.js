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
const contrastCheckboxLight = document.querySelector("#contrast-color-light");
const contrastCheckboxDark = document.querySelector("#contrast-color-dark");

let accentColorLight = colorPickerLight.value;
let accentColorDark = colorPickerDark.value;

colorPickerLight.addEventListener("input", updateAccentColorLight);
colorPickerDark.addEventListener("input", updateAccentColorDark);
contrastCheckboxLight.addEventListener("change", updateStyles);
contrastCheckboxDark.addEventListener("change", updateStyles);

function updateAccentColorLight() {
	accentColorLight = colorPickerLight.value;
	updateStyles();
}

function updateAccentColorDark() {
	accentColorDark = colorPickerDark.value;
	updateStyles();
}

function updateStyles() {
	const contrastColorLight = contrastCheckboxLight.checked;
	const contrastColorDark = contrastCheckboxDark.checked;

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

	if (contrastColorLight) {
		styles += `
      :root {
        --contrast-color: rgb(0 0 0 / 0.8);
      }
    `;
	} else {
		styles += `
      :root {
        --contrast-color: #fff;
      }
    `;
	}

	if (contrastColorDark) {
		styles += `
      [data-theme="dark"] {
        --contrast-color: rgb(0 0 0 / 0.8);
      }
      @media (prefers-color-scheme: dark) {
        :root:not([data-theme="light"]) {
          --contrast-color: rgb(0 0 0 / 0.8);
        }
      }
    `;
	} else {
		styles += `
      [data-theme="dark"] {
        --contrast-color: #fff;
      }
      @media (prefers-color-scheme: dark) {
        :root:not([data-theme="light"]) {
          --contrast-color: #fff;
        }
      }
    `;
	}

	styleElement.textContent = styles;
}

updateStyles();
