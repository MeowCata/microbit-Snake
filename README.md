
> Open this page at [https://meowcata.github.io/microbit-Snake/](https://meowcata.github.io/microbit-Snake/)

open-source snake game based on **micro-bit**

made by a ***Chinese** middle school student: [DingDang](https://github.com/MeowCata)*

**Please follow the open-source protocol! *Enjoy!***

---

## How to play it?
* First,you should have a micro:bit,it's a **Pocket Programming Computer**.

* Next,download the code and flash it into micro:bit

* Then,read the game instructions below carefully
> [!NOTE]
> **1.Press(Hold in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1)) `Btn-B` to start after flashing**
> 
> **2.Next,tilt your micro:bit to adjust angle(*this angle is the tilt angle that allows the snake to move one block/dot*)**
>
>     the angle you chose will be displayed on the screen   if you want to continue,press `Btn-A`(press A+B in v1.1)
> 
> **3.Play!Tilt your micro:bit to make the snake move to the food and **EAT it**. Then,look for another food!(press `Btn-A` to quit in [*v1.0*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.0),double click `Btn-B` in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1))**
>
> **4.If the snake moved out of the screen,that means you died**
> 
>     HOWEVER, you have 2 lives and you will "respawn(it is so-called in Minecraft)"in the middle of the screen
> 
>     BUT, because of some bugs(that were not fixed),if you were tilting when you died,the respawn point might not be in the middle
> ***you won't die again although the respawn point wasn't in the middle:)***
> 
>**5.If your lives were all ran out,you *died*,then you can watch the whole game replay,it shows all the food you ate and all the ways your snake *walked*(shows the score you earned in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1))**
> 
> *this function really took a long time to make...*
>
> okay,that's all for this time | *have a nice day~*

> [!IMPORTANT]
> my micro:bit ver is 2.21 so I can't test my code on an elder version,*but the simulator shows that the code works:)*

---

## Features🎇
- [x] **controllable snake movement** you can use the parameter(*enabled*, called `moveEnabled` in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1)) to control whether the snake moves
- [x] **food creation & getting food**(*the food production point is at least two dots away from the snake*)
- [x] **manual tilt angle**(15° 20° *25°(default)* 30°, 4 feels, based on *motion sensor*)
- [x] **snake tail process & trailing effect**
- [x] **scores & lives!**(default:2 lives)
- [x] **the whole game replay!** it shows how the snake moved and got food, based on *arrays*
- [x] **Ai!(only in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1))** *double click `Btn-A` to launch*, it will automatically help you eat food(one launch for one food **:D**)
- [x] **Shield!(only in [*v1.1*](https://github.com/MeowCata/microbit-Snake/releases/tag/v1.1))** **if the remainder of the score divided by 3 is 0** or **score equals to 0**,you won't die until your score changed
- [ ] Snake lengthening. for some reason(~~it's obviously not that I can't do it...~~), an lengthened snake will block the screen, resulting in a limited range of food creating
- [ ] Obstacles. the snakes loses one *live* when it touches them, but it's hard to tell which bright spots(dots) are food and which are obstacles

## Functions🎲
* **Start:** press `Btn-B` in v1.0, hold `Btn-B` in v1.1
* **Adjust the Angle:** hold `Btn-A` in both v1.0&v1.1
* **Stop:** press `Btn-A` in v1.0, double click `Btn-B` in v1.1
* **Ai(only in *1.1*:)** double click `Btn-A`

***
the following content is generated by MakeCode

## Use as Extension(does not work,it only adds [microbit-pxt-buttons](https://github.com/bsiever/microbit-pxt-clicks))

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/meowcata/snakepro** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/meowcata/snakepro** and click import
