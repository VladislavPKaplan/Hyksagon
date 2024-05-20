console.log("Script is running!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 500;

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
   
    renderer.render(scene, camera);
}

animate();
