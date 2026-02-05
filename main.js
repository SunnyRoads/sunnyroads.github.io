import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Load village model
const loader = new GLTFLoader();
loader.load('assets/models/village.glb', (gltf) => {
  scene.add(gltf.scene);
});

// Load a walking person (optional)
loader.load('assets/models/people.glb', (gltf) => {
  const person = gltf.scene;
  person.position.set(0,0,0);
  scene.add(person);
});

// Camera initial position
camera.position.set(0, 2, 5);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
