'use strict'

import '../libs/OrbitControls';
import sceneBase from '../sceneBase';

export default class cube1 extends sceneBase{

  constructor(){
    console.log("cube1 > constructor");
    super();
  }

  start(){

    console.log("cube1 > start");
    
    /* scene */
    this.scene = new THREE.Scene();

    /* camera */
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.set(200, 300, 500);
    this.controls = new THREE.OrbitControls(this.camera);

    /* helper */
    this.axis = new THREE.AxisHelper(1000);
    this.axis.position.set(0,0,0);
    this.scene.add(this.axis);

    /* light */
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    light.castShadow = true;
    this.scene.add(light);

    /* cube */
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshLambertMaterial({
      color: 0x2FCDB4
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 50, 0);
    cube.castShadow = true;
    this.scene.add(cube);


    this.camera.lookAt(cube.position);

    
    const pGeometry = new THREE.PlaneGeometry(300, 300);
    const pMaterial = new THREE.MeshLambertMaterial({
      color: 0xCCCCCC,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const plane = new THREE.Mesh(pGeometry, pMaterial);
    plane.position.set(0, 0, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    plane.receiveShadow = true;
    this.scene.add(plane);
  }
}