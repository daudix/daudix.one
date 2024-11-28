// Slider
var slider = document.getElementById("range");
var output = document.getElementById("range-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
