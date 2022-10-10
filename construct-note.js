// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let m = makeFreqCounter(msg);
    let l = makeFreqCounter(letters);

    for (let i in m){  
        if (!l[i]) return false;
        if (m[i] > l[i]) return false;
    }
    return true;
}

function makeFreqCounter(str) {
    const freqCounter = {};
    for (let i of str) {
        freqCounter[i] = (freqCounter[i] + 1) || 1;
    }
    return freqCounter; 
}
