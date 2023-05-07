// JavaScript source code
var oldSize = document.getElementById('pink-text').style.fontSize;

function newSize() {
    document.getElementById('pink-text').style.fontSize = "30px";
}

function revertSize() {
    document.getElementById('pink-text').style.fontSize = oldSize;
}