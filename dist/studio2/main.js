document.f.onsubmit = processForm;
function processForm() {
  var mainMap = document.querySelector('.main-map');
  var mainForm = document.querySelector('.main-form');
  //var userName = document.f.nDavis.value;
  //alert('Hi ' + userName);
  mainForm.classList.toggle('form-hidden');
  mainMap.classList.toggle('hidden');
  //prevent page from reloading
  return false;
}

function toggleHidden() {
  this.classList.toggle('hidden');
}
