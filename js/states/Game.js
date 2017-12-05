var MrHop = MrHop || {};

MrHop.GameState = {

  init: function() {
    //pool of floors
    this.floorPool = this.add.group();
          
    //gravity
    this.game.physics.arcade.gravity.y = 1000;    
  },
  create: function() {

    //hard-code first platform
    var platform = new MrHop.Platform(this.game, this.floorPool, 5, 100, 200);
    this.add.existing(platform);
  },   
  update: function() {    

  } 
};
