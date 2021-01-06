//variable grille 

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

// variable rover
var rover = {
    direction: "N",
}

//les functions

function turnRight(rover) {
    rover.direction = "E";
    console.log(rover.direction);
}
/* turnRight(rover);
console.log(rover); */

function turnLeft(rover) {
    rover.direction = "W";
    console.log(rover.direction);
}

function turnDown(rover) {
    rover.direction = "S";
    console.log(rover.direction);
}

function turnUp(rover) {
    rover.direction = "N";
    console.log(rover.direction);
}