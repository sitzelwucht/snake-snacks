let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let intro = document.querySelector('#intro')
let iBtn = document.querySelector('#info')
let startScreen = document.querySelector('#startscreen')
let game = document.querySelector('#game')
let end = document.querySelector('#end')

let isDown = false
let isUp = false
let isRight = false
let isLeft = false
let intervalId = 0
let dropInterval = 0

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
let dogImg = new Image()
dogImg.src = './images/dog.png'
let monkeyImg = new Image()
monkeyImg.src = './images/monkey.png'

let appleImg = new Image()
appleImg.src = './images/apple.png'
let blueberryImg = new Image()
blueberryImg.src = './images/blueberry.png'
