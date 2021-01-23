let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let intervalId = 0

let isDown = false
let isUp = false
let isRight = false
let isLeft = false

let bgImg = new Image()
bgImg.src = './images/battleback1.png'
let healthImg = new Image()
healthImg.src = './images/heart.png'
let snakeImg = new Image()
snakeImg.src = './images/snake.png'
let slothImg = new Image()
slothImg.src = './images/sloth.png'
let gorillaImg = new Image()
gorillaImg.src = './images/gorilla.png'
let parrotImg = new Image()
parrotImg.src = './images/parrot.png'
let narwhalImg = new Image()
narwhalImg.src = './images/narwhal.png'

let appleImg = new Image()
appleImg.src = './images/apple.png'
let blueberryImg = new Image()
blueberryImg.src = './images/blueberry.png'

const snake = new Snake(20, 350, 3, 0)
const gorilla = new Obstacle([{ x: 180, y: 120}], 2, 300, 2)
const sloth = new Obstacle([{ x: 100, y: 200}], 1, 75, 1)
const parrot = new Obstacle([{ x: 300, y: 100}], 2.5, 125, 1)
const narwhal = new Obstacle([{ x: 600, y: 400}], 1, 50, 3)
const apple = new FoodItem([{ x: 900, y: 400}], 1, 300)
const blueberry = new FoodItem([{ x: 900, y: 400}], 3, 100)