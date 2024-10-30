let game_started = true
let labirinth = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 0, 1], [1, 0, 1, 0, 1, 0, 1, 0, 0, 1], [1, 0, 1, 0, 1, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let [ROWS, COLS] = [labirinth.length, labirinth[0].length]
grove.onJoystick(GroveJoystickKey.Press, AnalogPin.C16, AnalogPin.C17, function on_joystick_press() {
    
    if (!game_started) {
        game_started = true
    }
    
})
function render(x: number, y: number) {
    for (let xo = -2; xo < 3; xo++) {
        for (let yo = -2; yo < 3; yo++) {
            if (0 <= xo && xo < ROWS && (0 <= yo && yo < COLS)) {
                if (labirinth[x + xo][y + yo]) {
                    led.plot(xo + 2, yo + 2)
                }
                
            }
            
        }
    }
}

basic.forever(function on_forever() {
    if (game_started) {
        render(8, 1)
    }
    
})
