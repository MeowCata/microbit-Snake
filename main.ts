function getFood () {
    if (SnakeX == FoodX && SnakeY == FoodY) {
        return true
    } else {
        return false
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
    basic.showNumber(score)
    basic.pause(500)
    basic.clearScreen()
    ReplayMod()
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    Ai()
})
function showNumber2 (num: number) {
    basic.showNumber(Math.floor(num / 10))
    basic.showNumber(num - Math.floor(num / 10) * 10)
    basic.pause(100)
    basic.clearScreen()
}
function adjustAngle () {
    basic.showNumber(angle)
    while (!(input.buttonIsPressed(Button.AB))) {
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
function Ai () {
    AiEnabled = true
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
function Initialization () {
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
    AiEnabled = false
    stopped = false
}
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    Initialization()
    basic.clearScreen()
    if (startTime == 1) {
        Program()
    } else {
        Program2()
    }
})
function calculateDistance (x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}
function snakeMove (Angle: number, enabled: boolean) {
    if (enabled) {
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
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    stopped = true
})
function Main () {
    while (!(stopped)) {
        if (death()) {
            lives += -1
            if (lives == 0) {
                break;
            }
            SnakeX = 2
            SnakeY = 2
        }
        snakeMove(angle, true)
        if (getFood()) {
            snakeMove(angle, false)
            score += 1
            replayFX[cntSpare] = FoodX
            replayFY[cntSpare] = FoodY
            cntSpare += 1
            generateFood()
        }
        while (AiEnabled) {
            snakeMove(angle, false)
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
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    adjustAngle()
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
let stopped = false
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
let AiEnabled = false
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
