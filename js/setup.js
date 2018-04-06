'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var wizards = [];
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardFamilies = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {

  wizards.push(generateWizard());
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);

function generateWizard() {
  return {
    name: getRandomAttr(wizardNames) + ' ' + getRandomAttr(wizardFamilies),
    coat: getRandomAttr(wizardCoats),
    eyeColor: getRandomAttr(wizardEyes)
  };
}

function getRandomAttr(array) {
  return array[Math.floor(Math.random() * array.length)];
}
