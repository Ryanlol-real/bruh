controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -180
    }
    controller.moveSprite(cat, 100, 0)
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(true)
})
let cat: Sprite = null
scene.setBackgroundColor(1)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . f f . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f f . . . . . . . . . . f . . . 
    . f . . . . . . . . . . f f . . 
    . . f . f f f f f f f f f 5 f . 
    . . f f f f f f f f f f f f f f 
    . . f f f f f f f f f f . . . . 
    . . f . f . . . . f . f . . . . 
    . . f . f . . . . f . f . . . . 
    . . f . f . . . . f . f . . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cat, 100, 100)
scene.setTileMap(img`
    7 7 7 . . . . . 7 . 7 . . . . . 7 . . . . . . . . 7 . 7 7 7 7 7 
    e 2 . . . e . . e . e . . . . . e . . . . . . . . e . e e e e e 
    e e e . . . . . . . e . . . . . e . . . . . . . 7 e . . . . . . 
    . . . . . . . . 7 . e . . . 7 . e . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . e . e . . . e . . . . . 7 7 7 . . . . 7 e e e e 
    7 7 7 7 7 7 7 . e . . . . 7 e . 7 . 7 . e . . . . e . e 2 e e e 
    e . . . . . . . e . 7 7 . e e . e . e . e . 7 7 . . . e e e 2 e 
    2 . . . . . e . e . e e . e e . e . e . e . . . . . . e e 2 e e 
    `)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 e 7 e 7 e 7 7 7 7 e 7 7 7 
    7 7 e e 7 e 7 e 7 7 7 7 e 7 e e 
    e e e e e e e e 7 7 7 e e 7 e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e 7 e e e e 7 e e 
    e e e e e e e e e e e e e e e e 
    e e e 7 e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    b b b b b b b e e e e e e e e e 
    b 1 1 b b 5 b b b b b b b b b b 
    b 1 b b b 5 b b b b b b b 2 2 b 
    b b b b b b f f b b b b b 2 b b 
    b b f f b b f b b b b 5 5 b b b 
    9 b b f b b b b b b b 5 b b b 9 
    b b b b b b b b b b b b b b b 9 
    `, true)
scene.setTile(2, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 e e e e e e e e e e 5 . . 
    . 5 e e e e e e e e e e e e 5 . 
    . 5 e e e e 5 5 5 5 e e e e 5 . 
    . 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
    . 5 5 e e e 5 5 5 5 e e e 5 5 . 
    . . 5 e e e e e e e e e e 5 . . 
    . . 5 e e e e e e e e e e 5 . . 
    . . 5 e e e e e e e e e e 5 . . 
    . . 5 e e e e e e e e e e 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    `, true)
scene.setTile(14, img`
    b b b b b b b b 9 9 9 b b b b b 
    b b f f b b b b 9 b b b b b b b 
    b b b b 3 3 3 3 b b f f b b b b 
    b 7 b b b b b b f f f b b 3 b b 
    b b b b b 7 b b b b b b b 3 b b 
    b b b b b 7 b b b b 3 b b b b b 
    b b 8 b b b b b b 3 b b b b b b 
    b b 8 8 b b b b 3 3 b b b f b b 
    b b b b b 4 4 b b b b b b f b b 
    b b b b b b 4 4 b b b b f f b b 
    b 1 1 b b 5 b 4 b b f f f b b b 
    b 1 b b b 5 b b b b b b b 2 2 b 
    b b b b b b f f b b b b b 2 b b 
    b b f f b b f b b b b 5 5 b b b 
    9 b b f b b b b b b b 5 b b b 9 
    b b b b b b b b 9 b b b b b b 9 
    `, true)
cat.ay = 350
scene.cameraFollowSprite(cat)
game.onUpdate(function () {
    if (cat.y >= scene.screenHeight()) {
        game.over(false)
    }
})
