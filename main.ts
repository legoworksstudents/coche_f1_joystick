radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, value)
    } else if (name == "y") {
        wuKong.setAllMotor(value, value)
    }
})
radio.setGroup(4)
basic.showNumber(4)
basic.forever(function () {
	
})
