const currentday = document.querySelector(".current-day");
const utcTime = document.querySelector(".utc-time");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Function to get the current day of the week
const getCurrentDayOfWeek = function () {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  return dayOfWeek;
};

// Function to get the current UTC time in milliseconds
const getCurrentUTCTimeInMilliseconds = function () {
  return new Date().getTime();
};

// Updating the HTML element with the UTC time
const updateDayandUTCTime = function () {
  const currentDayOfWeek = getCurrentDayOfWeek();
  const currentTimeInMilliseconds = getCurrentUTCTimeInMilliseconds();

  currentday.textContent = currentDayOfWeek;
  utcTime.textContent = currentTimeInMilliseconds;
};

// Update the time initially and set up a timer to update it every second
updateDayandUTCTime();
setInterval(updateUTCTime, 1000);
