game_started = True

labirinth = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
ROWS, COLS = labirinth.length, labirinth[0].length

def on_joystick_press():
    global game_started
    if not game_started:
        game_started = True
grove.on_joystick(GroveJoystickKey.PRESS,
    AnalogPin.C16,
    AnalogPin.C17,
    on_joystick_press)

def render(x, y):
    for xo in range(-2, 3):
        for yo in range(-2, 3):
            if 0 <= xo < ROWS and 0 <= yo < COLS:
                if labirinth[x + xo][y + yo]:
                    led.plot(xo+2, yo+2)



def on_forever():
    if game_started:
        render(8, 1)

    
basic.forever(on_forever)
