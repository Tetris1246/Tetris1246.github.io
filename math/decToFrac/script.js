function clear() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("input").value = "";
}
function calculate() {
    let dec = document.getElementById("input").value;
    let frac = decToFrac(dec);
    document.getElementById("1").innerHTML = frac[0];
    document.getElementById("2").innerHTML = frac[1];
}
document.getElementById("input").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
});
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("calculate").addEventListener("click", calculate);