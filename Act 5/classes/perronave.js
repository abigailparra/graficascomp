function perronave () {
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 20;
    this.rotation = 0;
    this.showFlame = false;
  }
  
  perronave.prototype.draw = function (context) {
    var nave = new Image();
    nave.src = "imgs/perronave.png";

    var flame = new Image();
    flame.src = "imgs/tresfuegos.png";

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    context.drawImage(nave, -nave.width/2, -nave.height/2);
  
    if (this.showFlame) {

        context.drawImage(flame, -flame.width/2-85, -flame.height/2);
      
    }
    context.restore();
  };
  