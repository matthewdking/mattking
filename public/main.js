const typedDiv = document.getElementById('typed');

const myDescription =
  "I'm a full stack javascript developer. $I'm a graduate of  $^Founders and Coders. $I'm passionate about the environment and sustainability, and always looking for projects with a positive footprint.";

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const a1 = document.createElement('a');
const p3 = document.createElement('p');
typedDiv.appendChild(p1);
typedDiv.appendChild(p2);
typedDiv.appendChild(p3);
a1.href = 'https://foundersandcoders.com/';

const arrayOfEl = [p1, p2, a1, p3];

const typeText = (str, element, arr) => {
  setTimeout(() => {
    if (str[0] === '$') {
      if (str[1] === '^') {
        element.appendChild(arr[1]);
        return typeText(str.slice(2), arr[1], arr.slice(1));
      }
      typeText(str.slice(1), arr[1], arr.slice(1));
    } else if (str.length === 0) {
      return;
    } else {
      element.textContent += str.charAt(0);
      typeText(str.slice(1), element, arr);
    }
  }, Math.random() * 100);
};

typeText(myDescription, p1, arrayOfEl);
