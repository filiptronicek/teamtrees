function getTrees() {
  const http = new XMLHttpRequest();

  http.open("GET", "./api/trees");
  http.send();

  http.onload = () => {
    $("#num").text(parseInt(http.responseText).toLocaleString());
    $("#diff").text((20000000-parseInt(http.responseText)).toLocaleString());
    console.log(parseInt(http.responseText) - start);
    return http.responseText;

  };
}


setInterval(function() {
    getTrees();
}, 2000);
