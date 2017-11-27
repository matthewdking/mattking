var typedDiv = document.getElementById('typed');

var myDescription =
  "I'm a full stack javascript developer. I'm a graduate of  <a href='https://foundersandcoders.com/' id='faclink'></a>.";

var part2 =
  ' I am passionate about the environment and sustainability, and always looking for projects with a positive footprint.';

var counter = 0;

function typeText(str, element) {
  setTimeout(() => {
    if (str.charAt(0) === '<') {
      element.innerHTML += str.substr(0, str.indexOf('>') + 1);
      var faclink = document.getElementById('faclink');
      typeText('Founders and Coders.', faclink);
    } else if (str.length === 0 && counter === 0) {
      counter++;
      typeText(part2, typedDiv);
    } else {
      element.innerHTML += str.charAt(0);
      if (str.length === 0) {
        return;
      }
      typeText(str.slice(1), element);
    }
  }, Math.random() * 20);
}

typeText(myDescription, typedDiv);
