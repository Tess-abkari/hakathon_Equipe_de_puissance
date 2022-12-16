function d3()
{  

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // position de camera
    camera.rotation.x=0.5;
    camera.position.z = 10;
    camera.position.x = 5 ;
    camera.position.y = -4;
    //couleur 
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //couleur de map
    scene.background = new THREE.Color( 0x808080 );
    //box pour le damier 
    var geometry_damier = new THREE.BoxGeometry( 1, 1, 1 );

    //couleur pour le damier 
    var blanc = new THREE.MeshBasicMaterial( { color: 0xffffff } );
   //tableau pour les pion selectionable
    var selectionables = new THREE.Group();
    var selectiondamier = new THREE.Group();
    scene.add(selectiondamier);
    scene.add(selectionables);
    
      
    //creation du terrain
    for (let i=0;i<13;i++){
        for (let j=0;j<6;j++){
          
          if((i + j) % 2 == 0){
            let noir= new THREE.MeshBasicMaterial( { color: 0x000000 } );
            var cube = new THREE.Mesh( geometry_damier, noir);    
          }
          else 
          {
            var cube = new THREE.Mesh( geometry_damier, blanc);
          }
          cube.position.set(j,i,0);
          scene.add( cube );
          selectiondamier.add(cube);
         
          
        }

      }
    //rendu
     renderer.render( scene, camera );
     document.addEventListener( 'pointerup', onMouseUp, false );
     document.addEventListener( 'mousemove', onMouseMove, false );
     var change=0
     var x=0
     
     function onMouseMove(event)
     {    
       if (change==1){
         x=x+0.001
         scene.rotation.z=scene.rotation.z+x   
 
       renderer.render( scene, camera );}
     }
     
     function onMouseUp(event)
     {
       if (change==1){change=0}
       else if (change==0){change=1}
     
       renderer.render( scene, camera ); 
     }
}