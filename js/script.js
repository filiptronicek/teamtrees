let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
  ","
);
let aDuration = 3000;
let refreshDuration = 1500;
let acc = document.getElementsByClassName("accordion");
let i;

$("#diff").animateNumber(
  {
    number: 20000000,
    numberStep: comma_separator_number_step
  },
  {
    duration: 99
  }
);



let items = ["#86688b", "#634790", "#5eb8e3", "#468b44", "#b04242", "#41518b", "#3fc8e5", "#559242", "#250d40", "#de2a97"];

function changeBg() {
  let bgClr = items[Math.floor(Math.random()*items.length)];
  $("body").css("background", bgClr);

}
function getTrees() {
  //if (document.hasFocus()) {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/index.txt");
    http.send();

    http.onload = () => {
      let diff = 20000000 - parseInt(http.responseText);

      if (parseInt(http.responseText) >= 20000000) {
        $("#num").text(`🎉${http.responseText}🎉`);
        $("#toBeRemovedInCompletion").hide();
        $(".toBeShown").show();
        $("body").append("<div id='done'>");
        
        changeBg();
        changeBg();
        changeBg();


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
  //}
}
function getTreesValidate() {
  getTrees();
}
setTimeout(() => {
  getTrees();
}, 100);

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
