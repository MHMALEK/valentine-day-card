window.onload = function () {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?mime_types=gif",
    true
  );

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var data = JSON.parse(this.response);
      console.log(this.response);
      document.getElementById("catImage").src = data[0].url;
    } else {
      console.log("Server returned an error");
    }
  };

  request.onerror = function () {
    console.log("There was a connection error");
  };

  request.send();
};
