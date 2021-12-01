function blink (位置: number, 色リスト: any[], 間隔: number) {
    for (let 色 of 色リスト) {
        strip.setPixelColor(位置, 色)
        strip.show()
        basic.pause(間隔)
    }
}
let 色セット: number[] = []
let strip: neopixel.Strip = null
let 葉の色 = neopixel.rgb(0, 255, 0)
let 幹の色 = neopixel.colors(NeoPixelColors.Orange)
let 空の色 = neopixel.rgb(0, 0, 0)
strip = neopixel.create(DigitalPin.P1, 256, NeoPixelMode.RGB)
strip.setBrightness(16)
tree.firTree(幹の色, 葉の色, 空の色)
basic.forever(function () {
    色セット = [
    neopixel.colors(NeoPixelColors.Red),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Black),
    葉の色
    ]
    blink(75, 色セット, 100)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.Orange), 空の色]
    blink(3, 色セット, 1000)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.Red), 空の色]
    blink(4, 色セット, 1000)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.Purple), 空の色]
    blink(12, 色セット, 1000)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.Blue), 空の色]
    blink(11, 色セット, 1000)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.White), 葉の色]
    blink(131, 色セット, 200)
})
basic.forever(function () {
    色セット = [neopixel.colors(NeoPixelColors.Orange), 葉の色]
    blink(93, 色セット, 312)
})
