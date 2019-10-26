var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
init = true;

function getTrees() {
  if(init) {
    aDuration = 1000;
  } else {
    aDuration = 3000;
  }
  const http = new XMLHttpRequest();

  http.open("GET", "./api/trees");
  http.send();

  http.onload = () => {
    var diff = 20000000 - parseInt(http.responseText);
    $("#num").animateNumber({
      number: http.responseText,
      numberStep: comma_separator_number_step
    }, {
      duration: aDuration
    });
    $("#diff").animateNumber({
      number: diff,
      numberStep: comma_separator_number_step
    }, {
      duration: aDuration
    });
    return http.responseText;
  };

}

getTrees();
init = false;
setInterval(function() {
  getTrees();
}, 2000);
