/*
// First version, assumes x is positive or zero
function isEven(x)
{
    if (x === 0) {
        return true;
    }
    
    if (x === 1) {
        return false;
    }
    
    return (isEven(x - 2));
}


// tests
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
 console.log(isEven(-1)); // stack blows up
// → ??

*/

///*
// Second version, caters for negative numbers
function isEven(x)
{
    if (x < 0) {
        x *= -1;
    }
    
    if (x === 0) {
        return true;
    }
    
    if (x === 1) {
        return false;
    }
    
    return (isEven(x - 2));
}


// tests
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
//*/