setInterval(function () {
  var Time = new Date();
  var hour = Time.getHours();
  var minutes = Time.getMinutes();
  var seconds = Time.getSeconds();
  var amOrpm = 0;
  if (hour > 12) {
    hour = Time.getHours() - 12;
    amOrpm = 1;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var Time = [hour, minutes, seconds, amOrpm];

  var digitDivs = Array.from(document.querySelectorAll(".digit"));
  var digitDivs = digitDivs.slice(0, digitDivs.length);

  var Time = Time.join("").split("");
  for (let i in Time) {
    Array.from(digitDivs[i].querySelectorAll("li")).forEach((e) => {
      e.style.top = -(parseInt(Time[i]) * 50) + "px";
    });
  }
}, 100);
