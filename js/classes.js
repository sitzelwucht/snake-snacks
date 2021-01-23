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

    checkStatus() {
        if (this.health === 0) {
            gameOver()
        }
    }
}



class Obstacle {
    constructor(coords) {
        this.coords = [{
            x: 600,
            y: 600
        }] 
    }
    
    drawObstacle(img, x, y) {
        ctx.drawImage(img, x, y)  

    }

    collision() {
        this.coords.forEach(item => {
            if (item.x < snake.x + 50  && item.x > snake.x && item.y + 50 > snake.y && item.y < snake.y + 50) {
                if (!snake.collided) {
                    snake.collided = true;
                    snake.health--
                }
            }
        })

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

    drawFood(img, x, y) {
        ctx.drawImage(img, x, y)
    }
    
    collision() {
        this.coords.forEach(item => {
            if (item.x <= snake.x + 50  && item.x >= snake.x && item.y + 50 >= snake.y && item.y <= snake.y + 50) {
                this.coords.splice(item, 1)
                this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 325})
                snake.points++
            }
        })
    }


}


