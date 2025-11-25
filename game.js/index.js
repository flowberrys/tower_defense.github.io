const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height)

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
//const for basic tower
const basic_tower = new Sprite({
position: {
    x:0,
    y:0
},
velocity:{
    x:0,
    y:0,
},
health: Infinity,

attack: 5,

movalbilty_for_placement_towers: false,

attack_radius: 10,

})
//const for better tower
const better_tower = new Sprite({
position: {
    x:0,
    y:0
},
velocity:{
    x:0,
    y:0,
},
health: Infinity,

attack: 15,

movalbilty_for_placement_towers: false,

attack_radius: 50,

})
addEventListener(MouseEvent('click'))
addEventListener(mouseX)
//basic tower control and placement
if(MouseEvent(mouseX) <= 69 && MouseEvent(mouseY) >= 506 && MouseEvent(click) === true){
    basic_tower.movalbilty_for_placement_towers = true
    basic_tower.position.x = MouseEvent(mouseX)
    basic_tower.position.y = MouseEvent(mouseY)
    if(basic_tower.position.y <=506){
        basic_tower.movalbilty_for_placement_towers = false
        basic_tower.position.x = MouseEvent(mouseX)
    } else {
        basic_tower.position.y = MouseEvent(mouseY)
        basic_tower.position.x = MouseEvent(mouseX)
    }

    if(MouseEvent('click') === true && coins >= 19){

        basic_tower.movalbilty_for_placement_towers === false
        basic_tower.draw(
        basic_tower.position.x = mouseX,
        basic_tower.position.y = mouseY

        )
    } else{
        basic_tower.movalbilty_for_placement_towers === false
        ctx.fillStyle = 'red';
        ctx.fillCircle(mouseX,mouseY,basic_tower.attack_radius)
    }
}


    if(basic_tower.movalbilty_for_placement_towers === false + MouseEvent('click') === true === Sprite.position.x, Sprite.position.y){
        ctx.fillStyle = ' red';
        ctx.fillCircle(mouseX,mousey,50)
    } 
//better tower control and placment
if(MouseEvent(mouseX) >= 71 && MouseEvent(mouseY)>= 506 && MouseEvent(click) === true && coins === 90 ){
    coins - 90 
    movalbilty_for_placement_towers === true
    better_tower.position.x = mouseX
    better_tower.position.y = mouseY
    new Sprite(
    better_tower.draw(
        better_tower.position.x = mouseX,
        better_tower.position.y = mouseY
    )
)
}
    


function draw(){
    this.draw
}


function animate() {
    draw()
    c.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
