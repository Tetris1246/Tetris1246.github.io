 function getBiggest(list) {
    let biggest = 0;
    for (let i=0; i<list.length; i++) {
        if (list[i] > biggest) {
            biggest = list[i];
        }
    }
    return biggest;
}

function isKGV(KGVs, kgv) {
    for (let i=0; i<KGVs.length; i++) {
        if (kgv % KGVs[i] != 0) {
            return false;
        }
    }
    return true;
}

function getKGV(nums) {
    let biggest = getBiggest(nums);
    let KGVs = nums;
    const index = KGVs.indexOf(biggest);
    if (index > -1) {
        KGVs.splice(index, 1);
    }
    let kgv = biggest;

    while (!isKGV(KGVs, kgv)) {
        kgv = parseInt(kgv) + parseInt(biggest);
    }
    return kgv;
}
