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

// On page load, apply the saved style preference (if any)
document.addEventListener("DOMContentLoaded", function () {
  const selectedStyle = localStorage.getItem("selectedStyle");
  if (selectedStyle) {
    const originalStyle = document.getElementById("original-style");
    const skeuoStyle = document.getElementById("skeuo-style");
    originalStyle.disabled = selectedStyle === "style-skeuo.css";
    skeuoStyle.disabled = selectedStyle === "style.css";
  }
});

// Keyboard shortcut to toggle styles
document.addEventListener('keyup', function (event) {
  // Check if the key pressed is the "T" key (case-insensitive)
  if (event.key.toLowerCase() === 't') {
    // Call the toggleStyle function
    toggleStyle();
  }
});
