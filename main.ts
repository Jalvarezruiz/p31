input.onGesture(Gesture.LogoUp, function () {
    luz.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    luz.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    luz.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    luz.change(LedSpriteProperty.Y, -1)
})
let luz: game.LedSprite = null
luz = game.createSprite(2, 2)
