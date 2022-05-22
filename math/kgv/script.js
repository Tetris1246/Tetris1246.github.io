let fields = 0;

function addField() {
    let container = document.getElementById("kgv-container");
    fields += 1;
    let field = document.createElement("input");
    field.id =  "num" + fields;
    field.placeholder =  "num" + fields;
    field.type = "text";
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
function kgv() {
    let list = []
    for (let i=1; i<=fields; i++) {
        list[i-1] = document.getElementById("num" + i).value;
    }
    document.getElementById("kgv").innerHTML = getKGV(list);
}

addField()
addField()

document.getElementById("add").addEventListener("click", addField);
document.getElementById("remove").addEventListener("click", removeField);
document.getElementById("calculate").addEventListener("click", kgv);