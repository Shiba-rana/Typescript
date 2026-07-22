// Direction 
enum Direction {
    Up = 8,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Down // 9

// String enum
enum Statuses  {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}

let sts: Statuses = Statuses.Approved

// Const enum (more performant)
const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}

function handleResponse(status: HttpStatus): void {
    if(status === HttpStatus.OK) {
        console.log("Success!");
    }
}
