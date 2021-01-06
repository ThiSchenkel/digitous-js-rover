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
    rover.direction = "E";
    console.log(rover.direction);
    for (x = 0; x < 9; x++) {
        if (x <= 0 || x <= 9) {
            x++;
        } else {
            console.log("Error");
        }
    }
}
turnRight(rover);
console.log(rover);

// function moveFoward(rover) {
//     rover.direction = "S";
//     console.log(rover.direction);
// }

// function turnLeft(rover) {
//     rover.direction = "W";
//     console.log(rover.direction);
// }
