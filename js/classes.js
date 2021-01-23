class Snake {
    constructor(x, y, health, points) {
        this.x = x; 
        this.y = y
        this.health = 3
        this.points = 0
        this.collided = false
    }

    drawSnake(x, y) {
        ctx.drawImage(snakeImg, x, y)
    }

    updateCollision() {
        this.collided == false ? this.collided = true : this.collided = false
    }

}

class Obstacle {
    constructor(coords) {
        this.coords = [{
            x: 600,
            y: 600
        }]
    }
    

    drawObstacle(img, frequency) {
      
        for (let i = 0; i < this.coords.length; i++) {

        if (this.coords[i].x < snake.x + 50 && this.coords[i].x + 50 > snake.x && this.coords[i].y + 100 > snake.y && this.coords[i].y < snake.y + 50) {
                this.collision()
        }
        else { 
            ctx.drawImage(img, this.coords[i].x, this.coords[i].y)  
            this.coords[i].x--
        }

        if (this.coords[i].x == frequency) {
            this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 300}) 
            }

        // remove items outside canvas from array
        if (this.coords[i].x <= 0) {
            this.coords.splice(i, 1)
            }

        }
    }
 

    collision() {
        if (!snake.collided) {
            snake.collided = true;
            snake.health--
          }
    }

 }


class FoodItem {
    constructor(coords) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.status = 1
    }

    drawFood(img, frequency) {
        for (let i = 0; i < this.coords.length; i++) {
            if (this.coords[i].x < snake.x + 50  && this.coords[i].x > snake.x && this.coords[i].y + 50 > snake.y && this.coords[i].y < snake.y + 50) {
                this.collision()
            }
                ctx.drawImage(img, this.coords[i].x, this.coords[i].y)
                this.coords[i].x--
        
            if (this.coords[i].x == frequency) {
                this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 325})
          }
          // remove items outside canvas
            if (this.coords[i].x <= 0) {
                this.coords.splice(i, 1)
            }
    
        }
    }

    collision() {
        clearInterval(foodInterval)
        ctx.drawImage(appleImg, 0, 0, 0, 0)
        if (!snake.collided) {
                snake.collided = true;
                snake.points++
            }
        
        setTimeout(() => {
            for(let i = 0; i < this.coords.length; i++) {
                if (this.coords[i].x < 0) startFood()
                }
            }, 3000);

    }
}


