console.log("it's time to JS party");
alert("So it begins...");

var friend = prompt("Welcome to RefactorU. \nWhat's your name friend? ");

if (friend != null) {
  document.getElementById("welcome-banner").innerHTML =
  "Hello " + friend + ", welcome!";
}
