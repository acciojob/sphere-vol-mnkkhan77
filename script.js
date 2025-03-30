function volume_sphere(event) {
    event.preventDefault(); // Prevent form reload

    let radiusInput = document.getElementById("radius").value.trim();
    let volumeOutput = document.getElementById("volume");

    let radius = parseFloat(radiusInput);

    // Validate input: If radius is not a number or is negative, return NaN
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // Calculate sphere volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeOutput.value = volume.toFixed(4); // Set 4 decimal places
}

// Attach event listener properly
window.onload = function () {
    document.getElementById("MyForm").addEventListener("submit", volume_sphere);
};