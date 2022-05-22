let fields = 0;

function addField() {
    let container = document.getElementById("kgv-container");
    fields += 1;
    let field = document.createElement("input");
    field.id =  "num" + fields;
    field.placeholder =  "num: " + fields;
    field.type = "text";
    field.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    });
    field.className = "input";
    container.appendChild(field);
}
function removeField() {
    if (fields > 2) {
        document.getElementById("num" + fields).remove();
        fields -= 1;
    }
    else {
        console.log("cannot remove more fields");
    }
}
function calculateKgv() {
    let list = []
    let go = true;
    for (let i=1; i<=fields; i++) {
        list[i-1] = document.getElementById("num" + i).value;
        if (list[i-1] == "") {
            go = false;
        }
        try {
            parseInt(list[i-1])
        } catch (e) {
            go = false;
        }
    }
    if (go) {
        let kgv = getKGV(list);
        document.getElementById("kgv").innerHTML = kgv;
        for (let i=1; i<=fields; i++) {
            let field = document.getElementById("num" + i);
            field.value = kgv + "/" + field.value + "=" + kgv/field.value;
        }
    } else {
        document.getElementById("kgv").innerHTML = "ERROR";
    }
}

function clear() {
    for (let i=1; i<=fields; i++) {
        document.getElementById("num" + i).value = "";
    }
    document.getElementById("kgv").innerHTML = "";
}

addField();
addField();

document.getElementById("add").addEventListener("click", addField);
document.getElementById("remove").addEventListener("click", removeField);
document.getElementById("calculate").addEventListener("click", calculateKgv);
document.getElementById("clear").addEventListener("click", clear);