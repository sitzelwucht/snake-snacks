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
    constructor(coords, speed, frequency) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.speed = speed
        this.frequency = frequency 
    }
    
    drawObstacle(img, x, y) {
        ctx.drawImage(img, x, y)  
    }

    generateObstacle() {
        for (let i = 0; i < this.coords.length; i++) {
            this.coords[i].x = this.coords[i].x - this.speed
            if (this.coords[i].x == this.frequency) {
                this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 300}) 
                }
            if (this.coords[i].x < 0) {
                this.coords.splice(i, 1)
                snake.collided = false
            }
        }
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
    constructor(coords, value, frequency) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.value = value,
        this.frequency = frequency
    }

    drawFood(img, x, y) {
        ctx.drawImage(img, x, y)
    }
    
    generateFood() {
        for (let i = 0; i < this.coords.length; i++) {
            this.coords[i].x = this.coords[i].x - 2
            if (this.coords[i].x == this.frequency) {
                this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 300}) 
                }
            if (this.coords[i].x < 0) {
                this.coords.splice(i, 1)
                snake.collided = false
            }
        }
    }

    foodCollision() {
        this.coords.forEach(item => {
            if (item.x <= snake.x + 50  && item.x >= snake.x && item.y + 50 >= snake.y && item.y <= snake.y + 50) {
                this.coords.splice(item, 1)
                this.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 325})
                snake.points = snake.points + this.value
            }
        })
    }
}


