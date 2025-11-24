const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height)

class Sprite {
    constructor ({position,velocity,health,attack,movalbilty_for_placement_towers}) {
        this.position = position
        this.velocity = velocity
        this.width = 50;
        this.height = 50;
        this.color = c.fillStyle(this.color);
        this.draw = c.fillRect(this.position.x,this.position.y,this.width,this.height);
        this.health = this.health;
        this.attack = this.attack;
        this.movalbilty = false;
        movalbilty_for_placement_towers = false;
        
        

    }
    
}
const easy_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 25,

    attack: 0,

    color: 'green',

    movalbilty: false

    
    
})
const medium_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 50,

    attack: 0,

    color: 'yellow'
    
})
const hard_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 100,

    attack: 0,

    color: 'red'
    
})

const basic_tower = new Sprite({
position: {
    x:0,
    y:0
},
velocity:{
    x:0,
    y:0,
},
health: 200,

attack: 5,


})


function animate() {
    draw()
    c.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
