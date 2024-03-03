def Snake():
    generateFood()
    Main()
    basic.show_icon(IconNames.HEART)
    basic.pause(200)
    basic.show_leds("""
        . # . # .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(200)
    basic.clear_screen()
    ReplayMod()
def showNumber2(num: number):
    basic.show_number(Math.floor(num / 10))
    basic.show_number(num - Math.floor(num / 10) * 10)
    basic.pause(100)
    basic.clear_screen()
def adjustAngle():
    global angle
    basic.show_number(angle)
    while not (input.button_is_pressed(Button.A)):
        if input.rotation(Rotation.ROLL) < -30:
            angle += -5
            if angle < 20:
                angle = 20
            showNumber2(angle)
        elif input.rotation(Rotation.ROLL) > 30:
            angle += 5
            if angle > 30:
                angle = 30
            showNumber2(angle)
        basic.pause(100)
    basic.clear_screen()
    basic.pause(200)
    showNumber2(angle)
def death():
    if SnakeX < 0 or SnakeX > 4 or (SnakeY < 0 or SnakeY > 4):
        return True
    else:
        return False
    basic.pause(200)
def ReplayMod():
    global indexReplay, replayCnt, replayXSpare, replayYSpare, replayFXSpare, replayFYSpare, replayDirS
    indexReplay = 0
    replayCnt = 0
    index = 0
    while index <= len(replayFX) - 1:
        replayXSpare = replayX[index]
        replayYSpare = replayY[index]
        replayFXSpare = replayFX[index]
        replayFYSpare = replayFY[index]
        replayDirS = replayDir[index]
        led.plot(replayFXSpare, replayFYSpare)
        while not (replayXSpare == replayFXSpare and replayYSpare == replayFYSpare):
            replayXSpare = replayX[index + indexReplay]
            replayYSpare = replayY[index + indexReplay]
            replayDirS = replayDir[index + indexReplay]
            indexReplay += 1
            led.plot(replayXSpare, replayYSpare)
            basic.pause(200)
            tailProcess(replayXSpare, replayYSpare, replayDirS)
        led.unplot(replayXSpare, replayYSpare)
        basic.pause(200)
        index += 1
    basic.pause(500)
    basic.pause(200)
    clearScreenExcept(-1, -1)
def clearScreenExcept(x: number, y: number):
    for index2 in range(5):
        for index3 in range(5):
            if not (index2 == x and index3 == y):
                led.unplot(index2, index3)
def Initialization():
    global startTime, replayX, replayY, replayFX, replayFY, replayDir, cnt, cntSpare, SnakeX, SnakeY, lives
    startTime += 1
    replayX = []
    replayY = []
    replayFX = []
    replayFY = []
    replayDir = []
    cnt = 0
    cntSpare = 0
    SnakeX = 0
    SnakeY = 0
    lives = 2

def my_function():
    adjustAngle()
buttonClicks.on_button_held(buttonClicks.AorB.B, my_function)

def calculateDistance(x1: number, y1: number, x2: number, y2: number):
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

def on_button_pressed_b():
    Initialization()
    basic.clear_screen()
    if startTime == 1:
        Program()
    else:
        Program2()
input.on_button_pressed(Button.B, on_button_pressed_b)

def snakeMove(Angle: number):
    global angle2, SnakeY, direction, SnakeX, cnt
    angle2 = 0 - Angle
    if input.rotation(Rotation.PITCH) > Angle:
        SnakeY += 1
        direction = 3
    elif input.rotation(Rotation.PITCH) < angle2:
        SnakeY += -1
        direction = 1
    elif input.rotation(Rotation.ROLL) > Angle:
        SnakeX += 1
        direction = 4
    elif input.rotation(Rotation.ROLL) < angle2:
        SnakeX += -1
        direction = 2
    replayX[cnt] = SnakeX
    replayY[cnt] = SnakeY
    replayDir[cnt] = direction
    cnt += 1
    led.plot(SnakeX, SnakeY)
    basic.pause(200)
    tailProcess(SnakeX, SnakeY, direction)
    basic.pause(100)
def tailProcess(x3: number, y3: number, dir2: number):
    if dir2 == 3:
        led.unplot(x3, y3 - 1)
    elif dir2 == 1:
        led.unplot(x3, y3 + 1)
    elif dir2 == 4:
        led.unplot(x3 - 1, y3)
    else:
        led.unplot(x3 + 1, y3)
def Program2():
    StartUp()
    Snake()
def Main():
    global lives, SnakeX, SnakeY, cntSpare
    while not (input.button_is_pressed(Button.A)):
        if death():
            lives += -1
            if lives == 0:
                break
            SnakeX = 2
            SnakeY = 2
        snakeMove(angle)
        if SnakeX == FoodX and SnakeY == FoodY:
            replayFX[cntSpare] = FoodX
            replayFY[cntSpare] = FoodY
            cntSpare += 1
            generateFood()
    basic.pause(500)
def Program():
    StartUp()
    adjustAngle()
    Snake()
def StartUp():
    global rollNum
    rollNum = -5
    for index4 in range(6):
        images.create_image("""
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            """).show_image(rollNum, 300)
        rollNum += 1
    basic.pause(1200)
    basic.clear_screen()
    rollNum = -5
def generateFood():
    global FoodX, FoodY, distance
    FoodX = randint(0, 4)
    FoodY = randint(0, 4)
    distance = Math.floor(calculateDistance(FoodX, FoodY, SnakeX, SnakeY))
    if distance < 3:
        generateFood()
    else:
        led.plot(FoodX, FoodY)
distance = 0
rollNum = 0
FoodY = 0
FoodX = 0
direction = 0
angle2 = 0
lives = 0
cntSpare = 0
cnt = 0
replayDir: List[number] = []
replayDirS = 0
replayFY: List[number] = []
replayFYSpare = 0
replayFXSpare = 0
replayY: List[number] = []
replayYSpare = 0
replayX: List[number] = []
replayXSpare = 0
replayFX: List[number] = []
replayCnt = 0
indexReplay = 0
SnakeY = 0
SnakeX = 0
angle = 0
startTime = 0
led.set_brightness(100)
startTime = 0
angle = 25
if angle < 0:
    angle = 0 - angle