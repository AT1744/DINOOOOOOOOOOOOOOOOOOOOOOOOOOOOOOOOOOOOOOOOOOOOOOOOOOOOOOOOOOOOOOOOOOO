kaboom({
    width:1050,
    height:400,
    font: "sinko",
    canvs: document.querySelector('#mycanvas')
})

loadSprite("t-rex","sprites/t-rex.png")
loadSprite("background","sprites/background.png")
loadSprite("cactus","sprites/cactus.png")


loadSound("jump","sounds/jump.mp3")
loadSound("hit","sounds/hit.mp3")

FLOOR_HEIGHT=10
JUMP_FORCE=800
SPEED=480



screen("game",() =>{
    gravity(2400)
    addEventListener([
        rect(width(),FLOOR_HEIGHT),
        pos(0,height()-FLOOR_HEIGHT),
        area(),
        body()
    ])
    //pozadina
    addEventListener([
        sprite("background",{
            width:width(),
            height:height()
        })
    ])
    trex=add([
        sprite("t-rex"),
        pos(80,40),
        area(),
        body()
    ])
    onkeypress("space",jump)
    function jump(){
    if(trex.isGrounded()){
    play("jump")
    trex.jump(JUMP_FORCE)
    }
}

spawnCactus
function spawnCactus(){
    add([
        sprite("cactus"),
        area(),
        pos(width(),height()-FLOOR_HEIGHT),
        origin("botleft"),
        move(LEFT,SPEED),
        "tree"
        ])
        wait(rand(0.5,1.5),spawnCactus)
    }


})

