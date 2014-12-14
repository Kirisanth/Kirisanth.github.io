"use strict";

//Script requires three.js library

// The MIT License (MIT)

// Copyright (c) 2014 Kirisanth

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var Robot = function(firstName) {
	this.firstName = firstName;
	this.walkMultipler = 1;
	this.position = 0;
	this.init();
}

Robot.prototype.init = function() {
	this.body = this.buildBody();

	this.leftArm = this.buildArms(0.5,0,0);
	this.rightArm = this.buildArms(-0.5,0,0);

	this.leftLeg = this.buildLegs(0.5,-0.5,0);
	this.rightLeg = this.buildLegs(-0.5,-0.5,0);

	this.head = this.buildHead(0,1,0);

	this.body.add(this.leftArm);
	this.body.add(this.rightArm);
	this.body.add(this.leftLeg);
	this.body.add(this.rightLeg);
	this.body.add(this.head);

	//TODO: Find a better way to do this
	scene.add(this.body);
}

//Walking animation
Robot.prototype.walk = function() {
	console.log("I am walking!");
	var m = new THREE.Matrix4();

	var movementBound = 1;
	var movementSpeed = 0.05;

	if(Math.abs(this.rightLeg.position.z) > movementBound)
		this.walkMultipler *= -1;

	m.makeTranslation(0,0,this.walkMultipler*movementSpeed);

	this.rightLeg.applyMatrix(m);

	m.makeTranslation(0,0,-1*this.walkMultipler*movementSpeed);

	this.leftLeg.applyMatrix(m);
}

Robot.prototype.sayHello = function() {
	console.log("Hello, I'm " + this.firstName);
}

Robot.prototype.buildBody = function() {
	var m = new THREE.Matrix4();

	return this.cube(1,1,1,0x00ff00);
}

Robot.prototype.buildArms = function(x,y,z) {
	var m = new THREE.Matrix4();
	var sphere = this.sphere(0.3,32,32);

	m.makeTranslation(x,y,z);

	sphere.applyMatrix(m);

	return sphere;
}

Robot.prototype.buildLegs = function(x,y,z) {
	var m = new THREE.Matrix4();
	var sphere = this.sphere(0.3,32,32);

	m.makeTranslation(x,y,z);

	sphere.applyMatrix(m);

	return sphere;
}

Robot.prototype.buildHead = function(x,y,z) {
	var m = new THREE.Matrix4();
	var sphere = this.sphere(0.5,32,32);

	m.makeTranslation(x,y,z);

	sphere.applyMatrix(m);

	return sphere;
}

// radius, widthSegment, heightSegment
Robot.prototype.sphere = function(r,w,h) {
	var sphereGeometry = new THREE.SphereGeometry(r,w,h);
	var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xffff00});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

	return sphere
}

Robot.prototype.cube = function(x,y,z,color) {
	var cubeGeometry = new THREE.BoxGeometry(x, y, z);
	// var cubeMaterial = new THREE.MeshBasicMaterial( { color: color } );
	var cubeMaterial = new THREE.MeshLambertMaterial({color: color});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

	return cube;
};

Robot.prototype.add = function() {
	scene.add(this.body)
};