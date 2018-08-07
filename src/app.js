const InstrumentFamilies = require('./models/instrument_families.js');
const DropDownVeiw = require('./views/drop_down_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new DropDownVeiw(selectElement);
  familyDropdown.bindEvents();

  const familyContainer = document.querySelector('div#instrument-family');
  const infoView = new InfoView(familyContainer);
  infoView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
