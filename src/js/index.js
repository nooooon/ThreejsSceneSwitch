/* index.js */
'use strict'

import scene1 from './scenes/scene1';
import scene2 from './scenes/scene2';

class ThreeBase{
  constructor(arg = {}){
    console.log("ThreeBase", this, arg);

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.container = arg.container;

    this.sceneNumber = 0;
    this.scenes = [];

    /* renderer */
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeee66, 1);
    this.renderer.sortObjects = false;
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      this.resize();
    });

    window.addEventListener('keydown', (e) => {
      this.onKeydown(e)
    });
  }

  start(){

  }

  update(){
    requestAnimationFrame(() => {
      this.update();
    });
    this.scenes[this.sceneNumber].update();

    this.renderer.render(this.scenes[this.sceneNumber].scene, this.scenes[this.sceneNumber].camera);
  }

  stop(){
    cancelAnimationFrame(this.update());
  }

  resize(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setSize(this.width, this.height);

    this.scenes[this.sceneNumber].resize();
  }

  onKeydown(e){
    console.log(e);
    if(e.key == "ArrowRight"){
      this.changeScene(this.sceneNumber + 1);
    }
    if(e.key == "ArrowLeft"){
      this.changeScene(this.sceneNumber - 1);
    }

    if(e.key == "1"){
      this.changeScene(1);
    }
    if(e.key == "2"){
      this.changeScene(2);
    }
  }

  changeScene(num){
    if(num < 0){
      num = this.scenes.length - 1;
    }else if(this.scenes.length <= num){
      num = 0;
    }

    this.sceneNumber = num;
    this.resize();

    console.log(this.sceneNumber);
  }

  addScene(scene){
    this.scenes.push(scene);
  }
}


(function(){
  const threeBase = new ThreeBase({container: document.getElementById('canvas')});

  threeBase.start();
  threeBase.addScene(new scene1());
  threeBase.addScene(new scene2());
  threeBase.update();
})();