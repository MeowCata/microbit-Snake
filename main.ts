function getFood () {
    if (SnakeX == FoodX && SnakeY == FoodY) {
        return true
    } else {
        return false
    }
}
function scoreAni () {
    if (score <= 5) {
        for (let scoreCnt = 0; scoreCnt <= score - 1; scoreCnt++) {
            led.plot(scoreCnt, 0)
            basic.pause(200)
        }
    } else if (5 < score && score <= 10) {
        for (let scoreCnt = 0; scoreCnt <= 4; scoreCnt++) {
            led.plot(scoreCnt, 0)
            basic.pause(200)
        }
        for (let scoreCnt = 0; scoreCnt <= score - 5 - 1; scoreCnt++) {
            led.plot(scoreCnt, 1)
            basic.pause(200)
        }
    } else if (10 < score && score <= 12) {
        for (let scoreCnt = 0; scoreCnt <= 4; scoreCnt++) {
            led.plot(scoreCnt, 0)
            basic.pause(200)
        }
        for (let scoreCnt = 0; scoreCnt <= 4; scoreCnt++) {
            led.plot(scoreCnt, 1)
            basic.pause(200)
        }
        for (let scoreCnt = 0; scoreCnt <= score - 10 - 1; scoreCnt++) {
            led.plot(scoreCnt, 2)
            basic.pause(200)
        }
    } else {
        basic.showIcon(IconNames.Happy)
    }
}
function Snake () {
    generateFood()
    Main()
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
    scoreAni()
    basic.pause(500)
    basic.clearScreen()
    basic.showNumber(score)
    basic.pause(500)
    basic.clearScreen()
    ReplayMod()
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    LaunchAi()
})
function showNumber2 (num: number) {
    basic.showNumber(Math.floor(num / 10))
    basic.showNumber(num - Math.floor(num / 10) * 10)
    basic.pause(100)
    basic.clearScreen()
}
function adjustAngle () {
    basic.showNumber(angle)
    while (!(input.buttonIsPressed(Button.A))) {
        if (input.rotation(Rotation.Roll) < -30) {
            angle += -5
            if (angle < 15) {
                angle = 15
            }
            showNumber2(angle)
        } else if (input.rotation(Rotation.Roll) > 30) {
            angle += 5
            if (angle > 30) {
                angle = 30
            }
            showNumber2(angle)
        }
        basic.pause(100)
    }
    basic.clearScreen()
    basic.pause(200)
    showNumber2(angle)
}
function death () {
    if (SnakeX < 0 || SnakeX > 4 || (SnakeY < 0 || SnakeY > 4)) {
        return true
    } else {
        return false
    }
}
function ReplayMod () {
    indexReplay = 0
    replayCnt = 0
    for (let index = 0; index <= replayFX.length - 1; index++) {
        replayXSpare = replayX[index]
        replayYSpare = replayY[index]
        replayFXSpare = replayFX[index]
        replayFYSpare = replayFY[index]
        replayDirS = replayDir[index]
        led.plot(replayFXSpare, replayFYSpare)
        while (!(replayXSpare == replayFXSpare && replayYSpare == replayFYSpare)) {
            replayXSpare = replayX[index + indexReplay]
            replayYSpare = replayY[index + indexReplay]
            replayDirS = replayDir[index + indexReplay]
            indexReplay += 1
            led.plot(replayXSpare, replayYSpare)
            basic.pause(200)
            tailProcess(replayXSpare, replayYSpare, replayDirS)
        }
        led.unplot(replayXSpare, replayYSpare)
        basic.pause(200)
    }
    basic.pause(500)
    clearScreenExcept(-1, -1)
}
function clearScreenExcept (x: number, y: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        for (let index3 = 0; index3 <= 4; index3++) {
            if (!(index2 == x && index3 == y)) {
                led.unplot(index2, index3)
            }
        }
    }
}
function init () {
    startTime += 1
    replayX = []
    replayY = []
    replayFX = []
    replayFY = []
    replayDir = []
    cnt = 0
    cntSpare = 0
    SnakeX = 2
    SnakeY = 2
    lives = 2
    score = 0
    Ax = 0
    Ay = 0
    AFx = 0
    AFy = 0
    scoreCnt = 0
    AiEnabled = false
    stopped = false
    shieldEnabled = false
    antiCrash = false
}
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    init()
    basic.clearScreen()
    if (startTime == 1) {
        Program()
    } else {
        Program2()
    }
})
function shield () {
    if (SnakeX < 0) {
        SnakeX = 0
    } else if (SnakeY < 0) {
        SnakeY = 0
    } else if (SnakeX > 4) {
        SnakeX = 4
    } else if (SnakeY > 4) {
        SnakeY = 4
    }
}
function LaunchAi () {
    AiEnabled = true
}
function calculateDistance (x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}
input.onButtonPressed(Button.B, function () {
    serial.redirectToUSB()
    serial.writeLine("angle: " + angle)
    serial.writeLine("FoodX: " + FoodX)
    serial.writeLine("FoodY: " + FoodY)
    serial.writeLine("SnakeX: " + SnakeX)
    serial.writeLine("SnakeY: " + SnakeY)
    serial.writeLine("score: " + score)
    serial.writeLine("lives(remaining): " + lives)
    serial.writeLine("shieldEnable: " + shieldEnabled)
    serial.writeLine("-------------")
})
function snakeMove (Angle: number, moveEnabled: boolean) {
    if (moveEnabled) {
        angle2 = 0 - Angle
        if (input.rotation(Rotation.Pitch) > Angle) {
            SnakeY += 1
            direction = 3
        } else if (input.rotation(Rotation.Pitch) < angle2) {
            SnakeY += -1
            direction = 1
        } else if (input.rotation(Rotation.Roll) > Angle) {
            SnakeX += 1
            direction = 4
        } else if (input.rotation(Rotation.Roll) < angle2) {
            SnakeX += -1
            direction = 2
        }
        if (shieldEnabled) {
            shield()
        }
        replayX[cnt] = SnakeX
        replayY[cnt] = SnakeY
        replayDir[cnt] = direction
        cnt += 1
        led.plot(SnakeX, SnakeY)
        basic.pause(240)
        tailProcess(SnakeX, SnakeY, direction)
        basic.pause(100)
    }
}
function tailProcess (x: number, y: number, dir: number) {
    if (dir == 3) {
        led.unplot(x, y - 1)
    } else if (dir == 1) {
        led.unplot(x, y + 1)
    } else if (dir == 4) {
        led.unplot(x - 1, y)
    } else {
        led.unplot(x + 1, y)
    }
}
function Program2 () {
    StartUp()
    Snake()
}
function Main () {
    while (!(stopped)) {
        snakeMove(angle, true)
        if (death()) {
            lives += -1
            if (lives == 0) {
                break;
            }
            SnakeX = 2
            SnakeY = 2
            shieldEnabled = true
            antiCrash = true
        }
        if (getFood()) {
            antiCrash = false
            snakeMove(angle, false)
            score += randint(0, 1)
            replayFX[cntSpare] = FoodX
            replayFY[cntSpare] = FoodY
            cntSpare += 1
            generateFood()
        }
        if (score == 0 || score % 3 == 0 || antiCrash == true) {
            shieldEnabled = true
        } else {
            shieldEnabled = false
        }
        if (score >= 12) {
            basic.pause(100)
            basic.clearScreen()
            basic.pause(200)
            basic.showString("You Win!")
            break;
        }
        while (AiEnabled) {
            snakeMove(angle, false)
            AiMain()
            AiEnabled = false
        }
    }
    basic.pause(500)
}
function Program () {
    StartUp()
    adjustAngle()
    Snake()
}
function AiMain () {
    while (!(FoodX == SnakeX && FoodY == SnakeY)) {
        Ax = SnakeX
        Ay = SnakeY
        AFx = FoodX
        AFy = FoodY
        if (AFx > Ax) {
            SnakeX += 1
            direction = 4
        } else if (AFx < Ax) {
            SnakeX += -1
            direction = 2
        } else if (AFy > Ay) {
            SnakeY += 1
            direction = 3
        } else if (AFy < Ay) {
            SnakeY += -1
            direction = 1
        }
        replayX[cnt] = SnakeX
        replayY[cnt] = SnakeY
        replayDir[cnt] = direction
        cnt += 1
        led.plot(SnakeX, SnakeY)
        basic.pause(200)
        tailProcess(SnakeX, SnakeY, direction)
        basic.pause(100)
    }
}
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    stopped = true
})
function StartUp () {
    rollNum = -5
    for (let index = 0; index < 6; index++) {
        images.createImage(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `).showImage(rollNum, 300)
        rollNum += 1
    }
    basic.pause(1200)
    basic.clearScreen()
    rollNum = -5
}
function generateFood () {
    FoodX = randint(0, 4)
    FoodY = randint(0, 4)
    distance = Math.floor(calculateDistance(FoodX, FoodY, SnakeX, SnakeY))
    if (distance < 2) {
        generateFood()
    } else {
        led.plot(FoodX, FoodY)
    }
}
let distance = 0
let rollNum = 0
let direction = 0
let angle2 = 0
let antiCrash = false
let shieldEnabled = false
let stopped = false
let AiEnabled = false
let scoreCnt = 0
let AFy = 0
let AFx = 0
let Ay = 0
let Ax = 0
let lives = 0
let cntSpare = 0
let cnt = 0
let replayDir: number[] = []
let replayDirS = 0
let replayFY: number[] = []
let replayFYSpare = 0
let replayFXSpare = 0
let replayY: number[] = []
let replayYSpare = 0
let replayX: number[] = []
let replayXSpare = 0
let replayFX: number[] = []
let replayCnt = 0
let indexReplay = 0
let score = 0
let FoodY = 0
let SnakeY = 0
let FoodX = 0
let SnakeX = 0
let angle = 0
let startTime = 0
led.setBrightness(100)
startTime = 0
angle = 25
if (angle < 0) {
    angle = 0 - angle
}
