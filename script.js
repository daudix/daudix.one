function toggleStyle() {
  const currentStyle = document.getElementById("original-style").disabled;
  const nextStyle = !currentStyle ? "style-skeuo.css" : "style.css";

  // Get the reference to the existing stylesheets
  const originalStyle = document.getElementById("original-style");
  const skeuoStyle = document.getElementById("skeuo-style");

  // Disable the current stylesheet and enable the new one
  originalStyle.disabled = nextStyle === "style-skeuo.css";
  skeuoStyle.disabled = nextStyle === "style.css";

  // Save the new style preference in local storage
  localStorage.setItem("selectedStyle", nextStyle);
}

// On page load, apply the saved style preference (if any) or set default to "style.css"
document.addEventListener("DOMContentLoaded", function () {
  const selectedStyle = localStorage.getItem("selectedStyle");

  // Set the default style to "style.css" if no preference is saved in localStorage
  const defaultStyle = "style.css";
  const currentStyle = selectedStyle || defaultStyle;

  // Get the reference to the existing stylesheets
  const originalStyle = document.getElementById("original-style");
  const skeuoStyle = document.getElementById("skeuo-style");

  // Disable the current stylesheet and enable the new one
  originalStyle.disabled = currentStyle === "style-skeuo.css";
  skeuoStyle.disabled = currentStyle === "style.css";
});

// Keyboard shortcut to toggle styles
document.addEventListener("keyup", function (event) {
  // Check if the key pressed is the "T" key (case-insensitive)
  if (event.key.toLowerCase() === "t") {
    // Call the toggleStyle function
    toggleStyle();
  }
});
