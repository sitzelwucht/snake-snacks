let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let intervalId = 0
let isDown = false
let isUp = false
let isRight = false
let isLeft = false
let pointScored = false
let foodIntervalID = 0

let bgImg = new Image()
bgImg.src = './images/battleback1.png'
let healthImg = new Image()
healthImg.src = './images/heart.png'
let snakeImg = new Image()
snakeImg.src = './images/snake_1.png'
let slothImg = new Image()
slothImg.src = './images/sloth_1.png'
let gorillaImg = new Image()
gorillaImg.src = './images/gorilla.png'
let parrotImg = new Image()
parrotImg.src = './images/parrot_1.png'

let appleImg = new Image()
appleImg.src = './images/apple1.png'
let blueberryImg = new Image()
blueberryImg.src = './images/blueberry.png'


const snake = new Snake(200, 200, 3)
const gorilla = new Obstacle([{ x: 80, y: 20}])
const parrot = new Obstacle([{ x: 600, y: 200 }])
const sloth = new Obstacle([{ x: 800, y: 300}])
const apple = new FoodItem([{ x: 900, y: 400}])
const blueberry = new FoodItem([{ x: 750, y: 375}])


let gorillaCoords = gorilla.coords
let slothCoords = sloth.coords
let parrotCoords = parrot.coords
let appleCoords = apple.coords
let blueberryCoords = blueberry.coords 



document.querySelector('button').addEventListener('click', () => {
    document.querySelector('#startscreen').classList.add('fade')

    setTimeout(() => {
        document.querySelector('#startscreen').classList.add('hidden')
    }, 1000);

    document.querySelector('#game').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('#game').classList.remove('fade')
    }, 1100);
   
    startGame()
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.key == 'ArrowRight') {
        isRight = true
        isLeft = false
        isUp = false
        isDown = false
    }
    else if (event.keyCode == 37 || event.key == 'ArrowLeft') {
        isRight = false
        isLeft = true
        isUp = false
        isDown = false
    }
    else if (event.keyCode == 38 || event.key == 'ArrowUp') {
        isRight = false
        isLeft = false
        isUp = true
        isDown = false
    }
    else if (event.keyCode == 40 || event.key == 'ArrowDown') {
        isRight = false
        isLeft = false
        isUp = false
        isDown = true
    }

})

document.addEventListener('keyup', (event) => {
    isRight = false
    isLeft = false
    isUp = false
    isDown = false
})



function draw() {
    ctx.drawImage(bgImg, 0, 0)
    ctx.font = '20px monospace'
    ctx.fillStyle = 'white'
    ctx.fillText('Score: '+ snake.points, 35, 580)
    ctx.fillText('Health:', 780, 580)

    for(let i = 0; i < snake.health; i++) {
        ctx.drawImage(healthImg, 900 + i * 50, 550)
    }
 
    if (isDown && (snake.y < canvas.height - 60)) {
        snake.y += 3
    }
    if (isUp && (snake.y > 0)) {
        snake.y -= 3
    }
    if (isLeft && (snake.x > 0)) {
        snake.x -= 3
    }
    if (isRight && (snake.x < canvas.width - 60)) {
        snake.x += 3
    }

    drawSnake(snake.x, snake.y)


    // drawObstacle(gorilla, gorillaImg, 100)
    // drawObstacle(sloth, slothImg, 100)
   

}


function drawSnake(x, y) {
    ctx.drawImage(snakeImg, x, y)
 }
 

function drawObstacle(name, img, frequency) {

    for (let i = 0; i < name.coords.length; i++) {
        if (name.coords[i].x < snake.x + 50 && name.coords[i].x + 50 > snake.x && name.coords[i].y + 100 > snake.y && name.coords[i].y < snake.y + 50){
                alert('dd')
                snake.health--
            }
       ctx.drawImage(img, name.coords[i].x, name.coords[i].y)
       name.coords[i].x--

    if (name.coords[i].x == frequency) {
            name.coords.push({
                x: canvas.width + 30,
                y: -Math.floor(Math.random() * 300) + 300
            }) 
        }
   }
}



function drawFood(name, img, frequency) {
    //TODO restart interval
    for (let i = 0; i < name.coords.length; i++) {
    if (name.coords[i].x < snake.x + 50  && name.coords[i].x > snake.x && name.coords[i].y + 50 > snake.y && name.coords[i].y < snake.y + 50){
        ctx.drawImage(img, 0, 0, 0, 0);
        clearInterval(foodIntervalID)
        snake.points++
    }
    else {
        ctx.drawImage(img, name.coords[i].x, name.coords[i].y)
        name.coords[i].x--
    }
       
    if (name.coords[i].x == frequency) {
        name.coords.push({
            x: canvas.width + 30,
            y: -Math.floor(Math.random() * 300) + 325
        })
      }

    }

}

function drawApple() {
    drawFood(apple, appleImg, 240)
}
function collision() {

}

function startGame() {
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
    
    foodIntervalID = setInterval(() => {
        requestAnimationFrame(drawApple)
    }, 10)
}


