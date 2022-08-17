 function preload() {
     classifier = ml5.imageClassifier('DoddleNet');
 }

 function setup() {
     canvas = createCanvas(280, 280);
     canvas.center();
     background("aqua");
     canvas.mouseReleased(classifyCanvas);
     synth = window.speechSynthesis;
 }

 function clearCanvas() {

     background("white");

     background("aqua");
 }

 function classifyCanvas() {
     classifier.classify(canvas, gotResult);
 }

 function draw() {
     strokeWeight(13);
     stroke(100);

     if (mouseIsPressed) {
         line(pmouseX, pmouseY, mouseX, mouseY);
     }
 }

 function gotResult(error, result) {
     if (error) {
         console.error(error);
     }
     console.log(results);
     document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

     document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

     utterThis = new SpeechSynthesisUtterance(results[0].label);
     synth.speak(utterThis);
 }

