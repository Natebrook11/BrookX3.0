import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Globe = () => {
const containerRef = useRef(null);

useEffect(() => {
// set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();// load the texture
const texture = new THREE.TextureLoader().load('https://previews.123rf.com/images/antonshahrai/antonshahrai2007/antonshahrai200700006/151534030-world-texture-satellite-image-of-the-earth-high-resolution-texture-of-the-planet-with-relief-shading.jpg');

// add the globe to the scene
const globe = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshPhongMaterial({ map: texture }),
);
scene.add(globe);

// add light to the scene
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

// set the size of the renderer and add it to the container element
renderer.setSize(window.innerWidth, window.innerHeight);
containerRef.current.appendChild(renderer.domElement);

// set the position of the camera
camera.position.z = 10;

// start the animation loop
const animate = () => {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.001;
  renderer.render(scene, camera);
};
animate();
}, []);

return <div ref={containerRef} />;
};

export default Globe;