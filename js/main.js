// main.js

//scene
var scene = new THREE.Scene();

//camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('canvas').appendChild( renderer.domElement );

//TODO: initilize scene make a function
//initilize robot
var robot = new Robot();




m1 = new THREE.Matrix4();
m2 = new THREE.Matrix4();
m3 = new THREE.Matrix4();
m4 = new THREE.Matrix4();

m1.makeTranslation(3,0,0);
m3.makeRotationY(0.01);
m2.makeRotationZ(0.01);
m4.makeTranslation(-1,0,0);

m1.makeTranslation(4,0,0);
robot.body.applyMatrix(m1);

m1.makeTranslation(1,0,0);

var cube = new Cube();
cube.add();

// add subtle blue ambient lighting
var ambientLight = new THREE.AmbientLight(0x000044);
scene.add(ambientLight);

// directional lighting
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);



function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);

	cube.cube.applyMatrix(m3);
	cube.cube.applyMatrix(m2);
	robot.body.applyMatrix(m3);

	robot.walk();
}
render();