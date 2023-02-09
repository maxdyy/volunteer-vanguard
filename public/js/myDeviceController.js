// Controller for updating the UI on the device detail page
(function () {
  // Event listener for blinds opening range value
  const blindsOpeningRange = document.getElementById("openPercentageRange");
  const blindsOpeningRangeValue = document.getElementById(
    "openPercentageRangeValue"
  );

  if (blindsOpeningRange && blindsOpeningRangeValue) {
    blindsOpeningRange.addEventListener("input", function () {
      const value = blindsOpeningRange.value;
      blindsOpeningRangeValue.innerHTML = `${value}%`;
    });
  }

  // Event listener for ac and radiator temperature range value
  const temperatureRange = document.getElementById("temperatureRange");
  const temperatureRangeValue = document.getElementById(
    "temperatureRangeValue"
  );

  if (temperatureRange && temperatureRangeValue) {
    temperatureRange.addEventListener("input", function () {
      const value = temperatureRange.value;
      temperatureRangeValue.innerHTML = `${value} °C`;
    });
  }

  // Event listener for volume range value
  const volumeRange = document.getElementById("volumePercentageRange");
  const volumeRangeValue = document.getElementById(
    "volumePercentageRangeValue"
  );

  if (volumeRange && volumeRangeValue) {
    volumeRange.addEventListener("input", function () {
      const value = volumeRange.value;
      volumeRangeValue.innerHTML = `${value}%`;
    });
  }
})();
