let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b 5 5 5 . . . . . . 
    . . . . . b 5 5 a 5 5 . . . . . 
    . . . . . 5 5 a a a 5 5 . . . . 
    . . . . . 5 5 a a a 5 5 . . . . 
    . . . . . . 5 5 a 5 5 b . . . . 
    . . . . . . . 5 5 5 b . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . 5 f . . . . . . 
        . . . . . f 5 f 5 f 5 . . . . . 
        . . . . 5 f 5 f 5 f 5 f 5 . . . 
        . . . . 5 f 5 f 5 f 5 f 5 . . . 
        . . . . 5 f 5 f 5 f 5 f 5 . . . 
        . . . . . . . f 5 f 5 . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (0 < 0) {
        projectile.vx = 0
        projectile.image.flipX()
    }
})
