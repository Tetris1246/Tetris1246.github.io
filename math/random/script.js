function clear() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("num").innerHTML = "";
}
function getRndInteger(min, max) {
    max = parseFloat(max) + parseFloat(1);
    return Math.floor(Math.random() * (max - min) ) + parseFloat(min);
}
function generate() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let random = getRndInteger(from, to);
    document.getElementById("num").innerHTML = random;
}

document.querySelectorAll(".input").forEach(function(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    });
});


document.getElementById("clear").addEventListener("click", clear);
document.getElementById("generate").addEventListener("click", generate);