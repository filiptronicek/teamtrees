var start;
function init() {
  start = getTrees();
}
function getTrees() {
  const http = new XMLHttpRequest();

  http.open("GET", "/api/trees");
  http.send();

  http.onload = () => {
    $("#num").text(parseInt(http.responseText).toLocaleString());
    console.log("We at: "+parseInt(http.responseText));
    console.log(20000000-parseInt(http.responseText));
    $("#diff").text((20000000-parseInt(http.responseText)).toLocaleString());
    console.log(start-parseInt(http.responseText));
  };
  return http.responseText;
}
getTrees();
setInterval(getTrees, 2000);