//Logik:
/**
 * 
 * @param {*} startVec 
 * @param {*} endVec 
 * @param {*} minLength 
 */

const defaults = {
    onlySection : false
}

function independentArrayVectorSection( startVec, endVec, minLength, options ) 
{
    startVec = startVec || [0];
    endVec = endVec || [1];
    minLength = minLength || 0.5;
    let opt = Object.assign({}, defaults, options);
    let tempVec = [];
    
    if (startVec.length !== endVec.length) return null;

    let length = 0;

    for (let i = 0; i < startVec.length; i++) 
    {
        tempVec.push( endVec[i] - startVec[i] );
        length += tempVec[i] * tempVec[i];
    }

    length = Math.sqrt(length);
    let percentage = 1 - (minLength / length);

    if ( opt.onlySection === true && ( percentage < 0 || percentage > 1 ) ) return null;

    for (let i = 0; i < startVec.length; i++) 
    {
        tempVec[i] = tempVec[i] * percentage + startVec[i];
    }

    return tempVec;
}

export default independentArrayVectorSection;