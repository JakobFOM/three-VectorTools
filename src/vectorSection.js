//Logik:

import { Vector3 } from "three/build/three.module.js";
/**
 * 
 * @param {*} startVec 
 * @param {*} endVec 
 * @param {*} minLength 
 */

function newVectorCalc( startVec, endVec, minLength )
{
  let percentage = 1 - ( minLength / startVec.distanceTo( endVec ) );

  let tempVec = new Vector3().copy( endVec ).sub( startVec );
  tempVec.multiplyScalar( percentage ).add( startVec );

  return tempVec;
}

export default newVectorCalc;