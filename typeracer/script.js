let running = false;
let texts =[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
    "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];
let text = "";
let textLength = 0;

let time = 0;

let timeLoop;

let ms = 0;

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function addItem(element, title, text){
    let itemContainer = document.createElement("div");
    itemContainer.className = "itemcontainer";

    let titleElement = document.createElement("div");
    titleElement.className = "subtitle";
    titleElement.innerText = title;

    let textElement = document.createElement("div");
    textElement.className = "text";
    textElement.innerText = text;

    itemContainer.appendChild(titleElement);
    itemContainer.appendChild(textElement);
    element.appendChild(itemContainer);

    return element;
}
function random(to) {
    return Math.floor(Math.random() * to);
}
function chooseRandom(list){
    return list[random(list.length)];
}
function setState() {
    if (!running) {
        running = !running;
        start();
    }
    else {
        running = !running;
        stop();
    }
}
function start() {
    document.getElementById("textInput").disabled = false;
    text = chooseRandom(texts);
    textLength = text.length;
    let textElement = document.getElementById("text");
    let textInputElement = document.getElementById("textInput");
    textElement.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        let char = document.createElement("span");
        char.id = "char" + i;
        char.className = "none";
        char.innerHTML = text[i];
        textElement.appendChild(char);
    }
    textElement.height = "auto";
    textInputElement.height = textElement.offsetHeight;
    time = new Date().getTime();
    let timeElement = document.getElementById("time");
    timeLoop = setInterval(function() {
        ms = new Date().getTime() - time;
        timeElement.innerHTML = pad(Math.round((Math.floor(ms)%1000)/10)) + ":" + pad(Math.floor(ms/1000)%60) + ":" + pad(Math.floor(ms/(1000*60))%60);
    }, 1);
}
function stop() {
    document.getElementById("text").innerHTML = "";
    document.getElementById("textInput").value = "";
    document.getElementById("textInput").disabled = true;
    clearInterval(timeLoop);
    document.getElementById("finishedBox").remove();
    document.getElementById("time").innerHTML = "";
}
function changed() {
    if (running) {
        let typedText = document.getElementById("textInput").value;
        for (let i = 0; i < typedText.length; i++) {
            if (i < textLength) {
                if (typedText[i] == text[i]) {
                    document.getElementById("char" + i).className = "true";
                }
                else {
                    document.getElementById("char" + i).className = "false";
                }
                if (i+1 < textLength) {
                    document.getElementById("char" + (i+1)).className = "cursor";
                }
            }
            if (parseInt(parseInt(typedText.length)+1) < textLength) {
                for (let j = typedText.length+1; j < textLength; j++) {
                    document.getElementById("char" + j).className = "none";
                }
            }
        }
        if (parseInt(typedText.length) >= textLength) {
            finished();
        }
    }
}
function finished() {
    document.getElementById("textInput").disabled = true;
    clearInterval(timeLoop);
    let finishedBox = document.createElement("div");
    finishedBox.className = "finishedBox";
    finishedBox.id = "finishedBox";
    finishedBox = addItem(finishedBox, "time:", pad(Math.round((Math.floor(ms)%1000)/10)) + ":" + pad(Math.floor(ms/1000)%60) + ":" + pad(Math.floor(ms/(1000*60))%60));
    finishedBox = addItem(finishedBox, "letters: ", text.length);
    finishedBox = addItem(finishedBox, "letters right: ", document.getElementsByClassName("true").length);
    finishedBox = addItem(finishedBox, "letters wrong: ", document.getElementsByClassName("false").length);
    document.getElementById("grid").appendChild(finishedBox);
}