window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
   main();
}

function main() {

  function  drawScreen() {
      context.fillStyle = '#333';
      context.fillRect(0, 0, headerCanvas.width, headerCanvas.height);

   }


   headerCanvas = document.getElementById("mySketch");
   context = headerCanvas.getContext("2d");

   setInterval(drawScreen, 60);

}
