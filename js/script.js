var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
  ","
);
init = true;
aDuration = 3000;

console.log("getting ping");
$.get("./api/ping", function(
  data
) {
  if(data == "HTTP Error 502: Bad Gateway") {
    location.href="down.html";

  }
  console.log(data);
});
function getTrees() {
  const http = new XMLHttpRequest();


  http.onload = () => {
    //http.open("GET", "./api/index.txt ");
    console.log("Getting numbers");
    http.open("GET", "./api/ ");
    http.send();

    http.onload = () => {
      if(http.responseText == "The service is unavailable.") {
        location.href="down.html";

      }
      var diff = 20000000 - parseInt(http.responseText);
      $("#num").animateNumber(
        {
          number: http.responseText,
          numberStep: comma_separator_number_step
        },
        {
          duration: aDuration
        }
      );
      $("#diff").animateNumber(
        {
          number: diff,
          numberStep: comma_separator_number_step
        },
        {
          duration: aDuration
        }
      );
      return http.responseText;
    };
  };
}

getTrees();
init = false;
setInterval(function() {
  getTrees();
}, aDuration);
