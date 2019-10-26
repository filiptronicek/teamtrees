var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
init = true;

function getTrees() {
  if(init) {
    aDuration = 1000;
  } else {
    aDuration = 15000;
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
      duration: 10000
    });
    $("#diff").animateNumber({
      number: diff,
      numberStep: comma_separator_number_step
    }, {
      duration: 10000
    });
    return http.responseText;
  };

}

getTrees();
init = false;
setInterval(function() {
  getTrees();
}, 2000);
