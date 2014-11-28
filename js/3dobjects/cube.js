"use strict";

var Cube = function() {
	this.init();
}

Cube.prototype.init = function() {
	this.cube = this.build();
}

Cube.prototype.build = function() {
	var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
	var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

	return cube;
}

Cube.prototype.add = function() {
	scene.add(this.cube);
}