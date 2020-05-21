// solution
function deepEqual(obj1, obj2)
{
    if (obj1 === null || obj2 === null) {
        return false;
    }
    
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        
        if (keys1.length !== keys2.length) {
            return false;
        }
        
        for (let ii = 0; ii < keys1.length; ++ii) {
            if (keys1[ii] != keys2[ii]) {
                return false;
            }
            
            if (!deepEqual(obj1[keys1[ii]], obj2[keys1[ii]])) {
                return false;
            }
        }
        
        return true;
    }
    
    return (obj1 === obj2);
}

// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

let o1 = {a:1,b:2,c:3,d:4};
let o2 = {d:4,c:3,b:2,a:1};
console.log(deepEqual(o1,o2));