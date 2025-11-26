const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const ctx = canvas.getContext('2d');

canvas.width = 1350;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height)

// test for button

if (document.getElementById(basic_btn).click === true) {
    c.fillStyle = 'red';
    c.fillRect(0,0,70,100);
}
class Sprite {
    constructor ({position,velocity,health,attack,movalbilty_for_placement_towers,cost,attack_radius}) {
        this.position = position
        this.velocity = velocity
        this.width = 50;
        this.height = 50;
        this.color = c.fillStyle(this.color);
        this.attack_radius = this.attack_radius
        this.draw = (c.fillRect(this.position.x,this.position.y,this.width,this.height),ctx.fillStyle = "#ADD8E6", ctx.fillStyle.opacity = 0.5 ,  ctx.fillCircle(this.position.x,this.position.y,this.attack_radius) );
        this.health = this.health;
        this.attack = this.attack;
        this.movalbilty = false;
        this.cost = this.cost

        this.movalbilty_for_placement_towers = false;
        
        

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
//buttons for towers
const basic_btn = document.getElementById(basic_btn)
const better_btn = document.getElementById(better_btn)

    


function draw(){
    this.draw
}


function animate() {
    draw()
    c.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
