// Sorry for being bad at js :(

var camera, scene, renderer;
var geometry, material, mesh, cylinderMesh, cylinderMaterial;
let group;

init();
animate();

function init() {
  scene = new THREE.Scene();

  var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspect, 1, 1000);
  camera.position.z = 500;
  scene.add(camera);

  geometry = new THREE.BoxGeometry(200,75,150);
  material = new THREE.MeshBasicMaterial({
    color: 0x85231c,
    //wireframe: true,
    wireframeLinewidth: 2
  });

  var cylinderGeometry = new THREE.CylinderGeometry(20, 20, 30, 9, 2);
  cylinderMaterial = new THREE.MeshBasicMaterial({
    color: 0xeb4034,
    //wireframe: true,
    wireframeLinewidth: 2
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set( 0, 0, 0 );
  cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinderMesh.position.set( -50, 50, -40 );

  cmesh2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cmesh2.position.set( -50, 50, 40 );

  cmesh3 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cmesh3.position.set( 0, 50, -40 );

  cmesh4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cmesh4.position.set( 0, 50, 40 );

  cmesh5 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cmesh5.position.set( 50, 50, -40 );

  cmesh6 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cmesh6.position.set( 50, 50, 40 );

  group = new THREE.Group();
  group.add(mesh);
  group.add(cylinderMesh);
  group.add(cmesh2);
  group.add(cmesh3);
  group.add(cmesh4);
  group.add(cmesh5);
  group.add(cmesh6);

  scene.add(group);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.style.margin = 0;
  document.body.style.overflow = 'hidden';
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  group.rotation.x = Date.now() * 0.0005;
  group.rotation.y = Date.now() * 0.001;

  renderer.render(scene, camera);
}