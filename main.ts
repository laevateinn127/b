basic.forever(function () {
    mbit_小車類.RGB_Car_Big(132, 148, 241)
    mbit_小車類.RGB_Car_Big(255, 169, 255)
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Blue)
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Yellow)
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Green)
    mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Pinkish)
    mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 43)
    basic.pause(2000)
    mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, 47)
    basic.pause(2000)
    mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Right, 0, 70)
    basic.pause(2000)
    mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Left, 70, 0)
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Half))
    basic.showNumber(555)
    mbit_小車類.Music_Car(mbit_小車類.enMusic.dadadum)
})
