// Union
let pid: string | number
pid = '22'

// Enum 1
enum Color {
    Red = 1,
    Green = 2,
    Blue= 4,
}

let c: Color = Color.Green
let colorName: string = Color[2]

// Displays 'Green'
console.log(colorName)

// Enum 2
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction1.Up)