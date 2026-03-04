// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 0;       
  y = 0;       
  speedX = 50; 
  speedY = 50; 
  c = 0;       

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    
    this.x += this.speedX * deltaTime;
    this.y += this.speedY * deltaTime;

    if (this.x >= 700) {
      this.speedX = -50;
    }
    if (this.x <= 0) {
      this.speedX = 50;
    }
    if (this.y >= 550) {
      this.speedY = -50;
    }
    if (this.y <= 0) {
      this.speedY = 50;
    }


    this.c += 20 * deltaTime;
  }

  render(ctx) {
    // Rechteck zeichnen
    ctx.fillStyle = `hsl(${this.c % 360},100%,50%)`;;
    ctx.fillRect(this.x, this.y, 100, 50);

    // Beispiel für andere Zeichnungen (auskommentiert)
    // ctx.fillStyle = "#da5590";
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fillRect(this.x, this.y, 50, 50);
    // ctx.strokeRect(200, 200, 100, 100);
    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);
    // ctx.fill();
  }
}

// Spiel initialisieren
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
