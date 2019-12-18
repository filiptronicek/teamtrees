let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
  ","
);
let aDuration = 4000;
let refreshDuration = 4000;
let acc = document.getElementsByClassName("accordion");
let i;

$("#diff").animateNumber(
  {
    number: 20000000,
    numberStep: comma_separator_number_step
  },
  {
    duration: 500
  }
);

function getTrees() {
  if (document.hasFocus()) {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/");
    http.send();

    http.onload = () => {
      let diff = 20000000 - parseInt(http.responseText);

      if (parseInt(http.responseText) >= 20000000) {
        $("#num").text(`🎉${http.responseText}🎉`);
        $("#toBeRemovedInCompletion").hide();
        $(".toBeShown").show();
        $("body").append("<div id='done'>");
      } else {
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
      }

      return http.responseText;
    };
  }
}
function getTreesValidate() {
  if ($("#done").length > 0) {
    getTrees();
  }
}
setTimeout(() => {
  getTrees();
}, 500);

setInterval(function() {
  getTreesValidate();
}, refreshDuration);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
