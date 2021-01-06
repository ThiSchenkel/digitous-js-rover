//variable grille 

// var grid = [
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
// ];

// variable rover
var rover = {
    direction: "N",
    x: 0,
    y: 0,
}

//les functions

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E"
    } else if (rover.direction === "E") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "W"
    } else {
        rover.direction = "N"
    }
    return rover;
}
/* turnRight(rover);
console.log(rover);
turnRight(rover);
console.log(rover);
turnRight(rover);
console.log(rover);
turnRight(rover);
console.log(rover); */

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W"
    } else if (rover.direction === "W") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "E"
    } else {
        rover.direction = "N"
    }
    return rover;
}

/* turnLeft(rover);
console.log(rover);
turnLeft(rover);
console.log(rover);
turnLeft(rover);
console.log(rover);
turnLeft(rover);
console.log(rover); */

function moveForward(rover) {

    if (rover.direction === "N" && rover.y >= 0 && rover.y < 10) {
        rover.y++;
    } else if (rover.direction === "E" && rover.x >= 0 && rover.x < 10) {
        rover.x++;
    } else if (rover.direction === "S" && rover.y >= 0 && rover.y < 10) {
        rover.y--;
    } else if (rover.direction === "W" && rover.x >= 0 && rover.x < 10) {
        rover.x--;
    } else {
        console.log("le mouvement impossible");
    }
    return rover;
}

moveForward(rover)
console.log(rover)
moveForward(rover)
console.log(rover)
turnRight(rover)
console.log(rover)
moveForward(rover)
console.log(rover)