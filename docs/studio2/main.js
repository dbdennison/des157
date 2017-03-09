document.f.onsubmit = processForm;
function processForm() {
	let mainMap = document.querySelector('.main-map');
	let mainForm = document.querySelector('.main-form');
	let mapTrail = document.querySelector('.map-trail');
	//var userName = document.f.nDavis.value;
	//alert('Hi ' + userName);
	mainForm.classList.toggle('form-hidden');
	mainMap.classList.toggle('hidden');
	mapTrail.classList.toggle('map-trail-active');
	setEntries();
	//prevent page from reloading
	return false;
}

function setEntries() {
	//map labels
	let p1 = document.f.p1.value;
	let p2 = document.f.p2.value;
	let p3 = document.f.p3.value;
	let p4 = document.f.p4.value;
	let p5 = document.f.p5.value;
	document.querySelector('.p1').textContent = p1;
	document.querySelector('.p2').textContent = p2;
	document.querySelector('.p3').textContent = p3;
	document.querySelector('.p4').textContent = p4;
	document.querySelector('.p5').textContent = p5;

	//paragraph
	document.querySelector('.story').textContent =
	"A traveler from " + document.f.p1.value + " steps across the " + document.f.noun1.value + ". Having been " + document.f.action1.value + " at the " + document.f.noun1.value + " for many hours, the traveler continued on to " + document.f.p2.value + ". There a great " + document.f.noun2.value + " was discovered, which the traveler quickly sold to continue on to " + document.f.p3.value + ". After many hours the traveler arrived at " + document.f.p3.value + " where it was told that people " + document.f.action2.value + " for all their lives. After many more hours of searching the traveler heard tale of " + document.f.p4.value + ", where it is said that " + document.f.action2.value + " could truly be done. Upon arrival, the traveler quickly left " + document.f.p4.value + ", for it was clear there was nothing here at all except " + document.f.noun3.value + ". After but a week in the neighboring " + document.f.p5.value + ", the traveler took a train to… somewhere else.";
}
