input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
timeanddate.setTime(9, 2, 0, timeanddate.MornNight.AM)
basic.forever(function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
})
