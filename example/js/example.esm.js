import vectorSection from "../../src/vectorSection.js"
import * as THREE from "../../node_modules/three/build/three.module.js";



//Deklaration Eingangswerte:

let startVec = new THREE.Vector3( 10, 20,0  );
let endVec = new THREE.Vector3( 70, 300, 0  );
let minLength = 25;

let newVec = vectorSection( startVec, endVec, minLength );

const defaults = {

  primColor: 0xffffff,
  secColor: 0xff0000,
  geometry: "SphereGeometry"

};




//Test:

function test( tempVec, endVec )
{
  let testLength = tempVec.distanceTo( endVec );
  return testLength;
}

let t = test( newVec, endVec );

console.log("newVec", newVec);
console.log("TEST:", t);



//Visuelle Darstellung:

function addElement( scene, vector, mat )
{
  console.log("default", defaults)
  let material = new THREE.MeshBasicMaterial( { color: defaults.primColor } );

  if (mat)
  {
    material = mat;
  }

  //var geometry = new THREE.SphereGeometry( );
  
  var geometry = new THREE[defaults.geometry]( );
  var cubeVec1 = new THREE.Mesh( geometry, material );
  scene.add(cubeVec1);
  cubeVec1.position.add( vector );
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var material = new THREE.MeshBasicMaterial( { color: defaults.secColor } );



camera.position.z = 200;
camera.position.y = 155;
camera.position.x = 50;

addElement(scene, startVec);
addElement(scene, endVec);
addElement(scene, newVec, material);


function animate() 
{
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate();