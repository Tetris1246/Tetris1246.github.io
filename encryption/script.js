var _normal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '.', ',', ';', ':', '_', "'", '#', '!', '§', '$', '%', '&', '/', '(', ')', '=', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];

var _decode = ['F', "'", 'j', 'e', '%', 'd', 'o', '2', '.', 'L', 'a', '#', 'X', 'K', 'y', 'm', 'P', 'x', 'C', 't', 'T', 'l', 'q', '5', 'u', 'g', 'i', 'H', ':', '/', 'k', 'Y', 'V', 'J', '9', '(', 'w', 'R', '0', 'B', 's', 'r', 'c', 'D', 'U', '3', '§', 'h', 'G', '?', '8', 'n', '6', '/', '!', 'f', 'M', '=', 'S', 'Z', 'Q', '1', 'E', ')', 'O', '_', ',', '$', 'I', '4', 'A', 'z', 'N', 'v', 'W', 'b', ';', '7', 'p', '&', ' '];

function run(){
    if (document.querySelector('#sch:checked') !== null) {
        en();
    }
    else {
        de();
    }
}

function de(){
    var text = document.getElementById("first").value.split("");
    var __encode = "";
    for (let i = 0; i < text.length; i++){
        if (_normal.includes(text[i])) {
            var index = _normal.findIndex(fruit => fruit === text[i]);
            __encode += _decode[index];
        }
        else {
            __encode += text[i];
        }
    }
    document.getElementById("first").value = "";
    document.getElementById("second").textContent = __encode;
    
}

function en(){
    var text = document.getElementById("first").value.split("");
    var __encode = "";
    for (let i = 0; i < text.length; i++){
        if (_decode.includes(text[i])) {
            var index = _decode.findIndex(fruit => fruit === text[i]);
            __encode += _normal[index];
        }
        else {
            __encode += text[i];
        }
    }
    document.getElementById("first").value = "";
    document.getElementById("second").textContent = __encode;
}