function arrayToList(array)
{
    let list = null;
    for (let ii = array.length - 1; ii >= 0; --ii) {
        list = {value: array[ii], rest: list};
    }
    
    return list;
}


function listToArray(list)
{
    let array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    
    return array;
}

function prepend(element, list)
{
    let newList = {vaule: element, rest: list};
    return newList;
}

function nth(list, pos)
{
    while(pos > 0) {
        list = list.rest;
        --pos;
    }
    
    return list.value;
}

function nthRecursive(list, pos)
{
    if (pos == 0) {
        return list.value;
    }
    
    return nthRecursive(list.rest, pos - 1);
}

// tests

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20