const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var tronco1;
var red1;
var bgImg;
var platform;

function preload(){
    bgImg = loadImage("bg.png");

}

function setup(){
    var canvas = createCanvas(1450,730);
    engine = Engine.create();
    world = engine.world;

    red1 = new Red(200,320,50,50);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    tronco1 = new Tronco(810,260,300,40);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig1 = new Pig(810, 350, 50, 50);
    tronco2 = new Tronco(810,180,300,40);
    pig2 = new Pig(810, 250, 50, 50);
    box5 = new Box(810,160,70,70);
    box6 = new Box(1100,420,70,70);
    box7 = new Box(1100,420,70,70);
    tronco3 = new Tronco(760,120,150,30,PI/7);
    tronco4 = new Tronco(870,120,150,30,-PI/7);
    ground = new Ground(width = width/2,height,1450,20)
    platform = new Ground(150,655,300,170);
    slingshot = new Slingshot(red1.body,{x:200, y:380});
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    red1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    tronco1.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    pig1.display();
    pig2.display();
    ground.display();
    platform.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(red1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keycode===32 && red1.body.speed<1){
        red1.trajectory = [];
        Matter.Body.setPosition(red1.body, {x:200, y:50});
        slingshot.attach(red1.body);
    }
}