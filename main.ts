input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let dist = 0
let lum = 0
bluetooth.startUartService()
basic.forever(function () {
    lum = pins.analogReadPin(AnalogPin.P0)
    dist = GROVE.measureInCentimetersV2(DigitalPin.P1)
    bluetooth.uartWriteString("LUM:" + lum + "\n")
    bluetooth.uartWriteString("DIST:" + dist + "\n")
    if (dist > 0 && dist < 100 && lum < 409) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(200)
})
