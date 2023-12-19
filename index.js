// Write your code here!
var mainElement = document.getElementById('main');

if (mainElement) {
  mainElement.parentNode.removeChild(mainElement);
}

var newHeader = document.createElement('h1');

newHeader.id = 'victory'

document.body.appendChild(newHeader);

var yourName = 'Austin Rivera ';

newHeader.innerHTML = yourName + 'is the champion';

document.body.appendChild(newHeader);