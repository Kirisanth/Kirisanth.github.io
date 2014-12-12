"use strict";
// main.js

//scene
var scene = new THREE.Scene();

//camera
// Perspective Camera
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.z = 5;

//Orthographic Camera
var width = 10;
var height = 10;
// OrthographicCamera( left, right, top, bottom, near, far )
var camera = new THREE.OrthographicCamera(width/-2, width/2, height/2, height/-2, 1, 500);
camera.position.z = 10;
camera.position.y = 1;
camera.rotateX(-0.2)
scene.add( camera );

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('canvas').appendChild( renderer.domElement );

//TODO: initilize scene make a function
//initilize robot
var robot = new Robot();

// var light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 0, 5, 0 );
// robot.body.add( light );


var m1 = new THREE.Matrix4();
var m2 = new THREE.Matrix4();
var m3 = new THREE.Matrix4();
var m4 = new THREE.Matrix4();

m1.makeTranslation(3,0,0);
m3.makeRotationY(0.01);
m2.makeRotationZ(0.01);
m4.makeTranslation(-1,0,0);

m1.makeTranslation(4,0,0);
robot.body.applyMatrix(m1);

m1.makeTranslation(1,0,0);

var cube = new Cube();
cube.add();

var geometry = new THREE.PlaneGeometry(20, 20);
var material = new THREE.MeshBasicMaterial({color: 0xff00ff, side: THREE.DoubleSide});
var plane = new THREE.Mesh(geometry, material);
plane.rotateX(1.5);
// _x: 1.5000000000000004, _y: -1.6653345369377348e-16, _z: -0.8
plane.position.y = -1
scene.add(plane);

// // add subtle blue ambient lighting
// var ambientLight = new THREE.AmbientLight(0x000044);
// scene.add(ambientLight);

// // directional lighting
// var directionalLight = new THREE.DirectionalLight(0xffffff);
// directionalLight.position.set(1, 1, 1).normalize();
// scene.add(directionalLight);

var isPaused = false;

function render() {
	if(!isPaused)
		requestAnimationFrame(render);
	renderer.render(scene, camera);

	cube.cube.applyMatrix(m3);
	cube.cube.applyMatrix(m2);
	robot.body.applyMatrix(m3);
	

	robot.walk();
}
render();

// pauses animation
function pause() {
	isPaused = true;
}

// resume animation
function resume() {
	red = true;
	render();
}


//controls
function moveUp() {

}

function moveBack() {

}

function moveLeft() {

}

function moveRight() {

}

function moveCameraForward() {
	// camera.position.x = camera.position.x + 1
	// console.log("Forward")
	camera.rotateX(-0.2)
}

function moveCameraBackward() {
	// camera.position.x = camera.position.x - 1
	// console.log("Backward")
	camera.rotateX(0.2)
}


$(function(){
    $('html').keydown(function(e){
    	if (e.which == 37)
       		moveCameraBackward()
    	if (e.which == 39)
    		moveCameraForward()
    });
});