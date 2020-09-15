import independentArrayVectorSection from "../../src/independentArrayVectorSection.js";

let startVec = [0, 0, 0, 1];
let endVec = [0, 0, 0, 2];
let minLength =25;
let opt = {
    onlySection: false
}

//let newVec = independentVectorSection( startVec3, endVec3, minLength, opt );
//let newVec = independentVectorSection( startVec2, endVec2, minLength, opt );

let newVec = independentArrayVectorSection( startVec, endVec, minLength, opt );

console.log(
    //"\nStart Vektor", startVec,
    //"\nEnd Vektor", endVec,
    //"\nMinimale Länge", minLength,
    "\nNeuer Vektor", newVec
);

function test ( newVec, endVec )
{
    let tempVec = [];
    let length = 0;
    for ( let i = 0; i < endVec.length; i++ ) 
    {
        tempVec.push( endVec[i] - newVec[i] );
        length += tempVec[i] * tempVec[i];
    }

    length = Math.sqrt( length );

    return length;
}

console.log( "\nTest:", test( newVec, endVec) );