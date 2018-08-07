const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InfoView.prototype.render = function (family) {
  this.container.innerHTML = '';

  const familyName = this.createElement('h2', family.name);
  this.container.appendChild(familyName);

  const familyDescription = this.createElement('p', family.description);
  this.container.appendChild(familyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(family.instruments);
  this.container.appendChild(instrumentList);
};

InfoView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

InfoView.prototype.createInstrumentList = function (instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });

  return list;
};

module.exports = InfoView;
