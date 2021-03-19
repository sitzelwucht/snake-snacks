# SNAKE SNACKS GAME

![startscreen](https://user-images.githubusercontent.com/61108220/105641659-8cc03480-5e85-11eb-83f5-2d1f8ae63ca4.png)

## Description

The goal of this game is to avoid the various appearing enemy creatures and grab snacks, which the player is flying amongst.

#### How to play ####

The player controls a snake character using the 4 arrow keys of the keyboard. Pressing space pauses/resumes the game. Player initially has 3 lives, and upon colliding with an obstacle, 1-3 healthpoint(s) will be deducted depending on the obstacle (the obstacle type **monkey** can cause any one of 4 random events to happen to the player: reduce or add health, reduce or add points).

Correspondingly, for each snack, points are awarded depending on the snack. The objective is to get as many points as possible before the health count goes down to 0.
When this occurs, the game ends and a gameover screen is shown. The player can enter their name, and a leaderboard is shown with the 10 highest scores.

![gamepause](https://user-images.githubusercontent.com/61108220/105881014-4e04b880-6004-11eb-8c5a-2458158e7438.png)

## MVP

Basic functionality including: one type of enemy items and food items, possibility to score points and lose game.

## Backlog

- ~~Different types of enemies that move faster or cause different amounts of damage~~
- ~~Different types of food items that restore varying number of health points~~
- ~~Add option to enter your name and save score to leaderboard and save it to localstorage~~
- Add boss enemy when a certain score is reached during the game
- ~~Add pause option~~

![scoreboard](https://user-images.githubusercontent.com/61108220/105999581-28cc8480-60ae-11eb-917b-23a2467f3032.png)

## Data Sructure

#### Classes:
1. Snake (Player)
- ```drawSnake()```
- ```checkStatus()```
- ```dropSnake()```

2. Food
- ```drawFood()```
- ```generateFood()```
- ```foodCollision()```

3. Obstacle
- ```drawObstacle()```
- ```generateObstacle()```
- ```collision()```

4. Monkey
- ```drawMonkey()```
- ```generateMonkey()```
- ```monkeyCollision()```


## States & Transitions

- Intro screen
- Game screen
- End screen

## Links

- [Deployment](https://sitzelwucht.github.io/snake-snacks/)




