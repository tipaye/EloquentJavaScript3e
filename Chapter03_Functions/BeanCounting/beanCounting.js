/*
// first version, hard-coded for "B"
function countBs(line)
{
    let numBs = 0;
    for (let ii = 0; ii < line.length; ++ii){
        if (line[ii] === "B") {
            numBs +=1;
        }
    }
    
    return numBs;
}
*/

function countChar(line, char)
{
    let numChar = 0;
    for (let ii = 0; ii < line.length; ++ii){
        if (line[ii] === char) {
            numChar += 1;
        }
    }
    
    return numChar;    
}

///*
// second version uses general function
let countBs = line => countChar(line, "B");

// tests

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

