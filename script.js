var start = 0;
function getTrees() {
  const http = new XMLHttpRequest();

  http.open("GET", "/api/trees");
  http.send();

  http.onload = () => {
    $("#num").text(parseInt(http.responseText).toLocaleString());
    $("#diff").text((20000000-parseInt(http.responseText)).toLocaleString());
    console.log(start);
  };
  return parseInt(http.responseText);
}
getTrees();
start = getTrees();
setInterval(getTrees, 2000);
