// String literal types
let direction: "north" | "south" | "east" | "west";
direction = "north"

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4
diceRoll = 1

// Combining with other types
type SuccessRes = {
    status: "success"
    data: any
}

type ErrorRes = {
    status: "error"
    message: string
}

type ApiResponse = SuccessRes | ErrorRes