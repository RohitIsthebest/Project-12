var garden,rabbit,apple,orangeleaf,redleaf
var gardenImg,rabbitImg,orangeLimg,appleimg,redleafimg

function preload(){
    gardenImg = loadImage("garden.png")
    rabbitImg = loadImage("rabbit.png")
    orangeLimg = loadImage("orangeLeaf.png")
    appleimg = loadImage("apple.png")
    redleafimg =  loadImage("redImage.png")

}

function setup(){
    createCanvas(400,400)

    garden = createSprite(200,200)
    garden.addImage("bg", gardenImg)


    rabbit = createSprite(200,330,50,50)
    rabbit.addImage("r", rabbitImg)
    rabbit.scale = 0.1


}

function draw(){
    background("white")

    rabbit.x = World.mouseX

   
   if (frameCount % 200 === 0) {
        if (apple = 1) {
            createApples();
    } else 
        if (apple = 2) {
            createOrange();
     }
    }
    
    if (frameCount % 400 === 0) {
        if (orangeleaf = 1) {
            createOrange();
    } else 
        if (orangeleaf = 2) {
            redl();
    }
}

    if (frameCount % 600 === 0) {
        if (redleaf = 1) {
            redl();
    } else 
        if (redleaf = 2) {
            createApples();
    }
}





    drawSprites()
}

function createApples(){
    
    apple = createSprite(random(0,400),10)
    apple.addImage("apple",appleimg)
    apple.scale = 0.1
    apple.velocityY = 3
    
}

function createOrange(){
    orangeleaf = createSprite(random(0,400),10)
    orangeleaf.addImage("leaft",orangeLimg)
    orangeleaf.scale = 0.1
    orangeleaf.velocityY = 3

}

function redl(){
    redleaf = createSprite(random(0,400),10)
    redleaf.addImage("red",redleafimg)
    redleaf.scale = 0.1
    redleaf.velocityY = 3

}





