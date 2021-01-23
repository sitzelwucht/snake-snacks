let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

let intervalId = 0
let foodInterval = 0
let obstacleInterval = 0

let isDown = false
let isUp = false
let isRight = false
let isLeft = false

let bgImg = new Image()
bgImg.src = './images/battleback1.png'
let healthImg = new Image()
healthImg.src = './images/heart.png'
let snakeImg = new Image()
snakeImg.src = './images/snake_1.png'
let slothImg = new Image()
slothImg.src = './images/sloth_1.png'
let gorillaImg = new Image()
gorillaImg.src = './images/gorilla_1.png'
let parrotImg = new Image()
parrotImg.src = './images/parrot_1.png'

let appleImg = new Image()
appleImg.src = './images/apple1.png'
let blueberryImg = new Image()
blueberryImg.src = './images/blueberry.png'
