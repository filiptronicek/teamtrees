var start = 0;
function getTrees() {
  const http = new XMLHttpRequest();

  http.open("GET", "/api/trees");
  http.send();

  http.onload = () => {
    $("#num").text(parseInt(http.responseText).toLocaleString());
    console.log("We at: "+parseInt(http.responseText));
    console.log(20000000-parseInt(http.responseText));
    $("#diff").text((20000000-parseInt(http.responseText)).toLocaleString());
    //console.log(parseInt(start)-parseInt(http.responseText));
  };
  return parseInt(http.responseText);
}
getTrees();
start = getTrees();
setInterval(getTrees, 2000);
