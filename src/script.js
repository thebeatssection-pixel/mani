import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import Module from 'manifold-3d';
import { exportTo3MF } from 'three-3mf-exporter';

// === WASM init Manifold =========================================
const wasm = await Module();
wasm.setup();
const { Manifold } = wasm;

// === Bouw de Manifold vormen ====================================
const { cube, sphere, CrossSection } = wasm; // CrossSection uit de module

// 1) Maak een 2D contour (array van arrays van [x,y])
const scale = 20;
const r = 1 * scale;   // radius van de afronding
const segments = 8;    // aantal punten op de boog

// originele vorm
const points = [
  [0, 0],
  [10, 0],
  [10, 8],
  [7, 8],
  [7, 3],
  [3, 3],
  [3, 8],
  [0, 8],
  [0, 0]
].map(p => [p[0]*scale, p[1]*scale]);

// hoek die we afronden: p1 -> p2 -> p3
const p1 = points[1]; // [10,0]
const p2 = points[2]; // [10,8]
const p3 = points[3]; // [7,8]

// richtingen van lijnen naar het hoekpunt
const v1 = [p1[0]-p2[0], p1[1]-p2[1]];
const v2 = [p3[0]-p2[0], p3[1]-p2[1]];

// hoeken van de lijnen
const angle1 = Math.atan2(v1[1], v1[0]);
const angle2 = Math.atan2(v2[1], v2[0]);

// genereer boogpunten voor echte cirkelafronding
let arc = [];
for(let i=0; i<=segments; i++){
  const t = i/segments;
  const angle = angle1 + t*(angle2 - angle1);
  const x = p2[0] + r * Math.cos(angle);
  const y = p2[1] + r * Math.sin(angle);
  arc.push([x, y]);
}

// nieuwe contour: vervang hoekpunt door boog
const newContour = [
  points[0],
  p1,
  ...arc,
  p3,
  ...points.slice(4)
];

const contours = [newContour];

// 2) Maak een 2D cross‑section
const sketch = new CrossSection(contours);

// 3) Extrudeer naar een manifold
const extrudedBox = sketch.extrude(100);

// 4) Bol
const ball = Manifold.sphere(60, 100);

// 5) Combineer
const result = extrudedBox.subtract(ball);



// === Maak één buffer geometry en hergebruik =====================
const meshData = result.getMesh();
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(meshData.vertProperties, 3));
geometry.setIndex(new THREE.BufferAttribute(meshData.triVerts, 1));
geometry.computeVertexNormals();

// Directe Three.js mesh, zonder extra function calls
const material = new THREE.MeshNormalMaterial({ 
color: 0x00ff00, 
metalness: 0.5, 
roughness: 0.5,
flatShading: true });
const mesh = new THREE.Mesh(geometry, material);

// === Scene setup ================================================
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
scene.add(mesh);

// Licht
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(300, 300, 300);
scene.add(directionalLight);
scene.add(new THREE.AmbientLight(0x404040, 0.5));

// Camera
const sizes = { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(200, 200, 300);
camera.lookAt(0, 0, 0);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// === lil-gui knop voor 3MF export ==============================
const gui = new GUI();
gui.add({
    export3mf: async () => {
        // Hergebruik de Three.js mesh direct, geen extra conversie
        const blob = await exportTo3MF(mesh);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'model.3mf';
        link.click();
        URL.revokeObjectURL(url);
    }
}, 'export3mf').name('Export .3MF');

// Animate loop
function tick() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}
tick();
