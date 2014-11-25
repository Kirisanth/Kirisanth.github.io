// Our Javascript will go here.
// three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.getElementById('canvas').appendChild( renderer.domElement );

//render cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

m = new THREE.Matrix4();
m1 = new THREE.Matrix4();
m2 = new THREE.Matrix4();

m1.makeTranslation(3,0,0);
// m2.makeRotationX(2)
m.makeRotationY(0.01)
m2.makeRotationZ(0.01)
// m.multiplyMatrices(m1,m2);
cube.applyMatrix(m1)



// cube.multiplyMatrices(m1,m);
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	cube.applyMatrix(m2)
	cube.applyMatrix(m)
	

	

	// cube.quaternion = quaternion;
	// cube.updateMatrix();

}
render();