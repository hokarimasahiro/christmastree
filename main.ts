let 葉の色 = neopixel.rgb(0, 255, 0)
let 幹の色 = neopixel.rgb(116, 80, 48)
let 空の色 = neopixel.rgb(0, 0, 0)
let strip = neopixel.create(DigitalPin.P1, 256, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.showColor(葉の色)
let 幹 = [
203,
204,
209,
211,
212,
214,
218,
219,
220,
221,
227,
228,
235,
236,
243,
244,
251,
252
]
for (let neo of 幹) {
    strip.setPixelColor(neo, 幹の色)
}
let 空 = [
232,
233,
234,
237,
238,
239,
240,
241,
242,
245,
246,
247,
248,
249,
250,
253,
254,
255
]
for (let neo of 空) {
    strip.setPixelColor(neo, 空の色)
}
空 = [
0,
1,
2,
3,
4,
5,
6,
7
]
for (let neo of 空) {
    strip.setPixelColor(neo, 空の色)
}
空 = [
0,
1,
2,
5,
6,
7
]
for (let neo of 空) {
    strip.setPixelColor(neo + 8, 空の色)
    strip.setPixelColor(neo + 16, 空の色)
    strip.setPixelColor(neo + 24, 空の色)
    strip.setPixelColor(neo + 32, 空の色)
    strip.setPixelColor(neo + 40, 空の色)
    strip.setPixelColor(neo + 48, 空の色)
    strip.setPixelColor(neo + 56, 空の色)
}
空 = [
0,
1,
6,
7
]
for (let neo of 空) {
    strip.setPixelColor(neo + 64, 空の色)
    strip.setPixelColor(neo + 72, 空の色)
    strip.setPixelColor(neo + 80, 空の色)
    strip.setPixelColor(neo + 88, 空の色)
    strip.setPixelColor(neo + 96, 空の色)
    strip.setPixelColor(neo + 104, 空の色)
    strip.setPixelColor(neo + 112, 空の色)
}
空 = [0, 7]
for (let neo of 空) {
    strip.setPixelColor(neo + 120, 空の色)
    strip.setPixelColor(neo + 128, 空の色)
    strip.setPixelColor(neo + 136, 空の色)
    strip.setPixelColor(neo + 144, 空の色)
    strip.setPixelColor(neo + 152, 空の色)
    strip.setPixelColor(neo + 160, 空の色)
    strip.setPixelColor(neo + 168, 空の色)
}
strip.show()
basic.forever(function () {
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.pause(100)
    strip.setPixelColor(75, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
    basic.pause(100)
})
basic.forever(function () {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(3, 空の色)
    strip.setPixelColor(4, 空の色)
    strip.setPixelColor(11, 葉の色)
    strip.setPixelColor(12, 葉の色)
    strip.show()
    basic.pause(1000)
})
basic.forever(function () {
    strip.setPixelColor(98, neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(98, 葉の色)
    strip.show()
    basic.pause(500)
})
basic.forever(function () {
    strip.setPixelColor(123, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.pause(345)
    strip.setPixelColor(123, 葉の色)
    strip.show()
    basic.pause(345)
})
