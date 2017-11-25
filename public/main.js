var typedDiv = document.getElementById('typed');

var myDescription =
  "I'm a full stack javascript developer. I'm a graduate of Founders and Coders.  I am passionate about the environment and sustainability, and always looking for projects with a positive footprint.";

function typeText(element, str) {
  setTimeout(() => {
    element.textContent += str.charAt(0);
    typeText(element, str.slice(1));
  }, Math.random() * 200);
}

typeText(typedDiv, myDescription);
