function change(){
    let value = document.getElementById("color").value;
    let img = document.getElementById("sus");
    let cc = document.getElementById("colorcode");
    img.style = "background-color: " + value + ";";
    cc.innerHTML = value;
}