console.log("ready")
let btnNext = document.querySelector('.next');


function doNext() {
  let voyPath1 = document.querySelector('.voy-path-1');
  let voyPath2 = document.querySelector('.voy-path-2');
  let voyMain = document.querySelector('.voy-main');
  voyMain.classList.toggle('voy-main-3');
  voyPath1.classList.toggle('voy-path-1-o');
  voyPath2.classList.toggle('voy-path-2-o');
}
