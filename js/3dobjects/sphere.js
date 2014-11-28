"use strict";

var Sphere = function() {
	this.init();
}

Sphere.prototype.init = function() {
	this.object = this.build();
}

Sphere.prototype.build = function() {
	var sphereGeometry = new THREE.SphereGeometry(0.5,32,32);
	var sphereMaterial = new THREE.MeshBasicMaterial({color:0xffff00});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

	return sphere;
}

Sphere.prototype.add = function() {
	scene.add(this.object);
}