window.onload = function () {
  // Fetch random cat image
  fetchCatImage();
};

function fetchCatImage() {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?mime_types=gif",
    true
  );

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var data = JSON.parse(this.response);
      document.getElementById("catImage").src = data[0].url;
    } else {
      console.log("Server returned an error");
    }
  };

  request.onerror = function () {
    console.log("There was a connection error");
  };

  request.send();
}

function translateText() {
  var languages = ["es", "fr", "de", "it", "ja"];
  var randomLanguage = languages[Math.floor(Math.random() * languages.length)];

  var text = "Welcome to the random cat image page!";
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(
      text
    )}&target=${randomLanguage}`,
    true
  );

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var data = JSON.parse(this.response);
      document.getElementById("welcomeText").innerText =
        data.data.translations[0].translatedText;
    } else {
      console.log("Translation server returned an error");
    }
  };

  request.onerror = function () {
    console.log("There was a connection error");
  };

  request.send();
}
