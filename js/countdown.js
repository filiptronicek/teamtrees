// Set the date we're counting down to
//var countDownDate = new Date("Jan 1, 2020 0:00").getTime();
var countDownDate = new Date("Oct 27, 2019 0:00").getTime();

function DownCount() {
  // Get today's date and time
  var now = new Date().getTime();

  var countDiff = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(countDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (countDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((countDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDiff % (1000 * 60)) / 1000);

  if (days < 10) {
    $("#timeBox").text(days + " days and " + hours + " hours ");
    if (days < 1) {
      $("#timeBox").text(hours + " hours and" + minutes + " minutes ");
      if (hours < 5) {
        $("#timeBox").text(
          hours + " hours, " + minutes + " minutes and " + seconds + " seconds "
        );
        if (hours < 1) {
          $("#timeBox").text(minutes + " minutes and " + seconds + " seconds ");
          if(minutes < 1) {
            $("#timeBox").text(seconds + " seconds ");

          }
        }
      }
    }
  } else if (days > 10) {
    $("#timeBox").text(days + " days");
  }
}
setInterval(DownCount, 500);
