import vectorSection from "../../src/vectorSection.js"
import * as THREE from "../../node_modules/three/build/three.module.js";



//alert("test");


let startVec2 = new THREE.Vector2( 0, 0 );
let endVec2 = new THREE.Vector2( 1, 1, );

let startVec3 = new THREE.Vector3( 0, 0,0 );
let endVec3 = new THREE.Vector3( 1, 1, 1 );

let minLength =.2;
let opt = {
    onlySection: false
}

//let newVec = vectorSection( startVec3, endVec3, minLength, opt );
//let newVec = vectorSection( startVec2, endVec2, minLength, opt );

let newVec = vectorSection();


console.log(
    //"\nStart Vektor", startVec,
    //"\nEnd Vektor", endVec,
    //"\nMinimale Länge", minLength,
    "\nNeuer Vektor", newVec
);