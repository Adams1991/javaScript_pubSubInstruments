const PubSub = require('../helpers/pub_sub.js');

const DropDownVeiw = function (element) {
  this.element = element;
};

DropDownVeiw.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:data-ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

DropDownVeiw.prototype.populate = function (instrumentFamilyData) {
  instrumentFamilyData.forEach((familiy, index) => {
    const option = document.createElement('option');
    option.textContent = familiy.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = DropDownVeiw;
