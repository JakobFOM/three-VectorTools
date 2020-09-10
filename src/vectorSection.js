//Logik:

import { Vector3 } from "../node_modules/three/build/three.module.js";
/**
 * 
 * @param {*} startVec 
 * @param {*} endVec 
 * @param {*} minLength 
 */

const defaults = {
    onlySection : false
};

function vectorSection( startVec, endVec, minLength, options ) 
{
    startVec = startVec || new Vector3( 0, 0, 0 );
    endVec = endVec || new Vector3( 1, 0, 0 );
    minLength = minLength || 0.5;
    let opt = Object.assign({}, defaults, options);

    if ( typeof minLength === "string" ) minLength = parseFloat(minLength);
        
    if ( isNaN( minLength ) ) return null;

    let percentage = 1 - ( minLength / startVec.distanceTo( endVec ) );

    if ( opt.onlySection === true && ( percentage < 0 || percentage > 1 ) ) return null;
        
    let tempVec = new Vector3().copy( endVec ).sub( startVec );

    tempVec.multiplyScalar( percentage ).add( startVec );

    return tempVec;
}

export default vectorSection;