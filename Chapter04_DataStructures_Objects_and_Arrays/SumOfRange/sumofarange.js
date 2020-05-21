// solution

function range(start, end, step = start < end ? 1 : -1)
{
    let result = [];
    if (step >= 0) {
        for (let ii = start; ii <= end; ii += step) {
            result.push(ii);
        }
    } else {
        for (let ii = start; ii >= end; ii += step) {
            result.push(ii);
        }
    }
    
    return result;
}

function sum(nums)
{
    let total = 0;
    for (let ii of nums) {
        total += ii;
    }
    
    return total;
}

// tests.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

