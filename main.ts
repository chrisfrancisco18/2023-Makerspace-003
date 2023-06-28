function _31 () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _25 () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}
function _16 () {
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
}
function _17 () {
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.setTempo(508 / 3)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.setTempo(127)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}
function _2 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    music.setTempo(127)
    _1()
    _2()
    _3()
    _4()
    _5()
    _1()
    _2()
    _8()
    for (let index = 0; index < 2; index++) {
        _9()
        _10()
    }
    _13()
    _14()
    _15()
    _16()
    for (let index = 0; index < 3; index++) {
        _17()
        _18()
    }
    _17()
    _24()
    _25()
    _26()
    _27()
    _28()
    _25()
    _26()
    _31()
    _32()
})
function _9 () {
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function _15 () {
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    music.rest(music.beat(BeatFraction.Half))
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function _5 () {
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
}
function _28 () {
    music.setTempo(127 / 3)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.setTempo(127)
    music.rest(music.beat(BeatFraction.Whole))
}
function _13 () {
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _27 () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _3 () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _8 () {
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function _18 () {
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
}
function _32 () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _10 () {
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
}
function _26 () {
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(466, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _4 () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Double))
}
function _14 () {
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    music.rest(music.beat(BeatFraction.Half))
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _24 () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _1 () {
    music.rest(music.beat(BeatFraction.Breve))
}
