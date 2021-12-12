function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.SpeechSynthesis;
}

function clearCanvas() {
    background("white");
}