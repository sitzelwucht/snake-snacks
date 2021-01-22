class Snake {
    constructor(x, y, health, points) {
        this.x = 20; 
        this.y = 350
        this.health = 3
        this.points = 0
    }

}

class Obstacle {
    constructor(coords) {
        this.coords = [{
            x: 600,
            y: 600
        }]
        
    }
}


class FoodItem {
    constructor(coords) {
        this.coords = [{
            x: 600,
            y: 600
        }],
        this.status = 0
        
    }
}


