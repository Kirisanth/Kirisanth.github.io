// Our Javascript will go here.
// three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.getElementById('canvas').appendChild( renderer.domElement );

//render cube
var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//render sphere
function makeSphere() {
	var sphereGeometry = new THREE.SphereGeometry(0.5,32,32);
	var sphereMaterial = new THREE.MeshBasicMaterial({color:0xffff00});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

	return sphere;
}
sphere = makeSphere();
sphere2 = makeSphere();

//add child sphere to cube
cube.add(sphere);
cube.add(sphere2)

//add cube to scene
scene.add( cube );


var testRobot = new Robot();

camera.position.z = 5;

m1 = new THREE.Matrix4();
m2 = new THREE.Matrix4();
m3 = new THREE.Matrix4();
m4 = new THREE.Matrix4();

m1.makeTranslation(3,0,0);
m3.makeRotationY(0.01)
m2.makeRotationZ(0.01)
m4.makeTranslation(-1,0,0);

cube.applyMatrix(m1)
m1.makeTranslation(4,0,0);
testRobot.body.applyMatrix(m1)

m1.makeTranslation(1,0,0);

sphere.applyMatrix(m1);
sphere2.applyMatrix(m4);



function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );

	cube.applyMatrix(m2)
	cube.applyMatrix(m3)
	// testRobot.body.applyMatrix(m2)
	testRobot.body.applyMatrix(m3)

	testRobot.walk();
}
render();