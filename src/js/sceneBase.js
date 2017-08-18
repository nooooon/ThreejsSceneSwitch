'use strict'

export default class sceneBase{

  constructor(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    console.log("sceneBase > constructor");
    this.start();
  }

  start(){
    console.log("sceneBase > start");
    /* scene */
    this.scene = new THREE.Scene();

    /* camera */
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.set(200, 300, 500);
  }

  update(){
  
  }

  resize(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }
}