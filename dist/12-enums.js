"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 8] = "Up";
    Direction[Direction["Down"] = 9] = "Down";
    Direction[Direction["Left"] = 10] = "Left";
    Direction[Direction["Right"] = 11] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Left; // 9
// String enum
var Statuses;
(function (Statuses) {
    Statuses["Pending"] = "PENDING";
    Statuses["Approved"] = "APPROVED";
    Statuses["Rejected"] = "REJECTED";
})(Statuses || (Statuses = {}));
let sts = Statuses.Approved;
function handleResponse(status) {
    if (status === 200 /* HttpStatus.OK */) {
        console.log("Success!");
    }
}
