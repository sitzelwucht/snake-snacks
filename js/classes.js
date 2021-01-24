
class Snake {
    constructor(x, y) {
        this.x = x; 
        this.y = y
        this.health = 3
        this.points = 0
        this.collided = false
    }

    drawSnake(x, y) {
        if (isDown && (this.y < canvas.height - 60)) {
            this.y += 3
        }
        if (isUp && (this.y > 0)) {
            this.y -= 3
        }
        if (isLeft && (this.x > 0)) {
            this.x -= 3
        }
        if (isRight && (this.x < canvas.width - 60)) {
            this.x += 3
        }
        if(this.x < canvas.width - 60) {
            this.x++
        }
        ctx.drawImage(snakeImg, x, y)
    }

    dropSnake() {
        this.y = this.y + 4
        if (this.y > canvas.height + 50) {
            gameOver()
        }
    }

    checkStatus() {
        if (this.health <= 0) {
            this.dropSnake()
        }
    }
}

class Obstacle {
    constructor(coords, speed, frequency, damage, img) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.speed = speed
        this.frequency = frequency,
        this.damage = damage,
        this.img = img
    }
    
    drawObstacle(img, x, y) {
        ctx.drawImage(img, x, y)  
    }

    generateObstacle() {
        for (let i = 0; i < this.coords.length; i++) {
            this.coords[i].x = this.coords[i].x - this.speed
            if (this.coords[i].x == this.frequency) {
                this.coords.push({x: canvas.width + 30, y: randomInt(20, 550)})  
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
                    snake.health = snake.health - this.damage
                }
            }
        })
    }
 }

 class Monkey {
     constructor(coords, speed, frequency) {
        this.coords = [{
            x: 600,
            y: 600
        }],
         this.speed = speed;
         this.frequency = frequency
     }

    drawMonkey(x, y) {
        ctx.drawImage(monkeyImg, x, y)
    }

    generateMonkey() {
        for (let i = 0; i < this.coords.length; i++) {
            this.coords[i].x = this.coords[i].x - this.speed
            if (this.coords[i].x == this.frequency) {
                this.coords.push({x: canvas.width + 30, y: randomInt(20, 550)})  
                }
            if (this.coords[i].x < 0) {
                this.coords.splice(i, 1)
                snake.collided = false
            }
        }
    }

    monkeyCollision() {
        let x = randomInt(1, 4)
        this.coords.forEach(item => {
            if (item.x < snake.x + 50  && item.x > snake.x && item.y + 50 > snake.y && item.y < snake.y + 50) {
                if (!snake.collided) {
                    snake.collided = true;
                    switch(x) {
                        case 1:
                            snake.health = snake.health - 2
                            break;
                        case 2:
                            snake.health++
                            break;
                        case 3:
                            snake.points = snake.points - 5
                            break;   
                        case 4:
                            snake.points = snake.points + 5                      
                    }
                }
            }
        })
    }
 }

class FoodItem {
    constructor(coords, value, frequency, img) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.value = value,
        this.frequency = frequency,
        this.img = img
    }

    drawFood(img, x, y) {
        ctx.drawImage(img, x, y)
    }
    
    generateFood() {
        for (let i = 0; i < this.coords.length; i++) {
            this.coords[i].x = this.coords[i].x - 1
            if (this.coords[i].x == this.frequency) {
                this.coords.push({x: canvas.width + 30, y: randomInt(20, 550)}) 
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
                this.coords.push({x: canvas.width + 30, y: randomInt(20, 550)})
                snake.points = snake.points + this.value
            }
        })
    }
}

const snake = new Snake(20, 350, 3, 0)
const gorilla = new Obstacle([{ x: 180, y: 120}], 2, 300, 2, gorillaImg)
const sloth = new Obstacle([{ x: 100, y: 200}], 1, 75, 1, slothImg)
const parrot = new Obstacle([{ x: 300, y: 100}], 2.5, 125, 1, parrotImg)
const narwhal = new Obstacle([{ x: 550, y: 400}], 1, 50, 3, narwhalImg)
const dog = new Obstacle([{ x: 700, y: 400}], 2, 150, 2, dogImg)

const monkey = new Monkey([{ x: 800, y: 50}], 2, 50)

const apple = new FoodItem([{ x: 750, y: 390}], 1, 325, appleImg)
const blueberry = new FoodItem([{ x: 900, y: 450}], 3, 50, blueberryImg)

let obstacleArr = [gorilla, sloth, parrot, narwhal, dog]
let foodArr = [apple, blueberry]