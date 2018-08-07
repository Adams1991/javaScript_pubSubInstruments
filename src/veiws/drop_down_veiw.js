const PubSub = require('../helpers/pub_sub.js');

const DropDownVeiw = function(menuItems) {
  this.menuItems = menuItems;
};

DropDownVeiw.prototype.bindEvents = function() {
  this.menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      const selectedFamily = event.target.id;
      PubSub.publish('DropDownVeiw:selected', selectedFamily);
    });
  });
};

module.exports = DropDownVeiw;
