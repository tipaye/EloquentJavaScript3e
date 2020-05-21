function reverseArray(array)
{
    let reversedArray = [];
    for (let ii of array) {
        reversedArray.unshift(ii);
    }
    
    return reversedArray;
}

function reverseArrayInPlace(array)
{
    let bb = 0;
    let ee = array.length - 1;
    
    while (bb !== ee) {
        let tmp = array[ee];
        array[ee] = array[bb];
        array[bb] = tmp;
        ++bb;
        --ee;
    }
}

// tests
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]