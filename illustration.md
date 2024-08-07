#### 非常遗憾，由于MakeCode加载项目需要读取README.md，先前将说明放在自述文件使得体积过大，易导致MakeCode加载项目失败，现将说明移至此处，感谢支持
#### I apologize for the inconvenience, as MakeCode needs to read the README. md file to load the project.  Previously, the instructions were placed in the README. md file, which made the file too large and caused MakeCode to fail to load the project.  I have moved the instructions here, and thank you for your support.
> Open this page at [https://meowcata.github.io/microbit-Snake/](https://meowcata.github.io/microbit-Snake/)
> 
> My GitHub Page: [Click](https://meowcata.github.io/)

an open-source snake game based on **micro:bit**

made by a ***Chinese** middle school student: [DingDang](https://github.com/MeowCata)*

DOCX type introduction(only Simplified Chinese): [Here](https://github.com/MeowCata/snake-docx)

**Please follow the open-source protocol! *Enjoy!***

*If u find bugs while using, why not write an issue? this can help develop this project&I will fix it ASAP*

*Also, if you have creative ideas about this project, share it! please send me an email: 2797663076@qq.com* or write down in [Discussion](https://github.com/MeowCata/microbit-Snake/discussions)😆

could u plz star this repository? thank u very much😊

---
> [!IMPORTANT]
> **support all micro:bit versions!**
> 
> my goal is *to make FULL use of micro:bit without an extension board*
>
> *v1.1*+ means version 1.1 or higher

## All Versions: 
> [v1.5 *(recommended)*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.5)
>
> [v1.4](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.4)
>
> [v1.3](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.3)
>
> [v1.2](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.2Dev)
>
> [v1.1](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1)
>
> [v1.0](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.0)

## Info
![GitHub repo size](https://img.shields.io/github/repo-size/MeowCata/microbit-Snake)

![GitHub last commit](https://img.shields.io/github/last-commit/MeowCata/microbit-Snake)

### View Source
[click here](https://github.com/MeowCata/microbit-Snake/blob/master/main.ts)

## How to play it?
* First,you should have a micro:bit,it's a **Pocket Programming Computer**.

* Next,download the code and flash it into micro:bit

* Then,read the game instructions below carefully
> [!NOTE]
> **1.Press(Hold in v1.1+)) `Btn-B` to start after flashing**
> 
> **2.Next,tilt your micro:bit to adjust angle(*this angle is the tilt angle that allows the snake to move one block/dot*)**
>
>     the angle you chose will be displayed on the screen   if you want to continue,press `Btn-A`(press A+B in v1.1)  press `Btn-A` in v1.2+ 
> 
> **3.Play!Tilt your micro:bit to make the snake move to the food and **EAT it**. Then,look for another food!(press `Btn-A` to quit in *v1.0*,double click `Btn-B` in *v1.1*,hold `Btn-A`in *v1.2*+)**
>
> **4.If the snake moved out of the screen,that means you died**
> 
>     HOWEVER, you have 2 lives and you will "respawn(it is so-called in Minecraft)"in the middle of the screen
> 
>     BUT, because of some bugs(that were not fixed),if you were tilting when you died,the respawn point might not be in the middle
> ***you won't die again although the respawn point wasn't in the middle:) and in *v1.1* or later version, the shield will enable after respawning/spawning***
> 
>**5.If your lives were all ran out,you *died*,then you can watch the whole game replay,it shows all the food you ate and all the ways your snake *walked*(shows the score you earned in *v1.1*+, score animation is only in *v1.2*+, score animation is removed in v1.5)**
> 
> **6.Winning! only *v1.2*+ | when score>=12(>=20 in v1.5),show score animation(plot dots as your score) and you win!**
> 
> *this project really took a long time to make...*
>
> okay,that's all for this time | *have a nice day~*

---

## Features🎇
- [x] **controllable snake movement** you can use the parameter(*enabled*, called `moveEnabled` in *v1.1*+) to control whether the snake moves
- [x] **food creation & getting food**(*the food production point is at least two dots away from the snake*)
- [x] **manual tilt angle**(15° 20° ***25°(default)*** 30°, 4 feels, based on *motion sensor*)
- [x] **snake tail process & trailing effect**
- [x] **scores & lives!**(default:2 lives) score animation only *v1.2*+
- [x] **the whole game replay(like Hypixel :D)!** it shows how the snake moved and got food, based on *arrays*, but bugs are NOT fixed until v1.5
- [x] **Ai!(only in *v1.1*+)** *double click `Btn-A` to launch*, it will automatically help you eat food(one launch for one food **:D**)
- [x] **Shield!(only in *v1.1*+)** **if the remainder of the score divided by 3 is 0** or **score equals to 0**, you won't die(move out of the screen) until your score changed| enable shield after respawning(in v1.2+)
### Pities😭
- [ ] Snake lengthening. However, an lengthened snake will block the screen, and micro:bit only has an `5x5 LED screen`
- [ ] Obstacles. the snakes loses one *live* when it touches them, but it's hard to tell which bright spots(dots) are food and which are obstacles

## Functions🎲
* **Start:** press `Btn-B` in v1.0, hold `Btn-B` in v1.1 and v1.2
* **Adjust the Angle:** hold `Btn-A` in both v1.0&v1.1, removed in v1.2&1.3
* **Stop:** press `Btn-A` in v1.0, double click `Btn-B` in v1.1, hold `Btn-A` in v1.2, removed in v1.3
* **Ai(only in *v1.1*+):** double click `Btn-A`
* **Data Sending to Computer** only in v1.2&v1.3

***

This project used one extension: [microbit-pxt-buttons](https://github.com/bsiever/microbit-pxt-clicks)
