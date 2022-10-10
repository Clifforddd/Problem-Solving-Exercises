// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let n1 = makeFreqCounter(num1)
    let n2 = makeFreqCounter(num2)

    if (n1.lenght !== n2.lenght) return false;

    for (let i in n1) {
        if (n1[i] !== n2[i])
            return false;
        return true;    
    }

}

function makeFreqCounter(num) {
    num = num.toString();
    const freqCounter = {};
    for (let i of num) {
        freqCounter[i] = (freqCounter[i] + 1) || 1;
    }
    return freqCounter; 
}

