// Set the date for Eid ul-Adha 2024 (June 16, 2024)
const eidUlAdhaDate = new Date("2024-06-16").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date().getTime();
  const distance = eidUlAdhaDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<p>Eid ul-Adha 2024 has arrived!</p>";
  }
}, 1000);


// // This is an example JavaScript code for June 16, 2024
// function greetUser() {
//     const today = new Date('2024-06-16');
//     const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][today.getDay()];
//     console.log('Hello! Today is ' + dayOfWeek + ', June 16, 2024.');
//   }
  
//   greetUser();