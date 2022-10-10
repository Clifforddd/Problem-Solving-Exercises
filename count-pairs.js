// add whatever parameters you deem necessary
function countPairs(arr, target) {
    arr.sort((a, b) => a - b);
    let counter = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            counter++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return counter;
}
