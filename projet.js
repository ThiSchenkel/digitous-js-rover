// installation prompt
var prompt = require('prompt');

var schema = {
    properties: {
        roverString: {
            description: `Tourner à gauche => "l" , tourner à droite => "r", avancer d'une case => "f" ou reculer => "b"`,
            pattern: /^[lrbf]+$/,
            message: 'Commande incorrecte, essayez encore une fois ',
            required: true
        },
    }
};
prompt.start();

prompt.get(schema, function (err, result) {
    console.log(grid.join("\n"));
    console.log('Commandes indiquées:');
    console.log('  roverString: ' + result.roverString);
    pilotRover(result.roverString);
    console.log(rover);
    console.table(grid.join("\n"));

});
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
    x: 0,
    y: 0,
    travelLog: [],
}

//les functions

//Mars Rover tourne à droite
function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "W";
    } else {
        rover.direction = "N";
    }
    return rover;
}

//Mars Rover tourne à gauche
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else {
        rover.direction = "N";
    }
    // return rover;
}

//Mars Rover bouge d'une case
function moveForward(rover) {
    grid[rover.y][rover.x] = " ";
    if (rover.direction === "N") {
        if (rover.y > 0 && rover.y < 10) {
            rover.y--;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "E") {
        if (rover.x >= 0 && rover.x < 10) {
            rover.x++;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "S") {
        if (rover.y >= 0 && rover.y < 10) {
            rover.y++;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "W") {
        if (rover.x > 0 && rover.x < 10) {
            rover.x--;
        } else { console.log("Le mouvement impossible"); }
    };
    // return rover;
    grid[rover.y][rover.x] = rover.direction;
}

//Mars Rover recule 
function moveBackward(rover) {

    if (rover.direction === "N") {
        if (rover.y >= 0 && rover.y < 10) {
            rover.y++;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "E") {
        if (rover.x > 0 && rover.x < 10) {
            rover.x--;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "S") {
        if (rover.y > 0 && rover.y < 10) {
            rover.y--;
        } else { console.log("Le mouvement impossible"); }

    } else if (rover.direction === "W") {
        if (rover.x >= 0 && rover.x < 10) {
            rover.x++;
        } else { console.log("Le mouvement impossible"); }
    };
    // return rover;
}



// Outil de commande
function pilotRover(roverString) {
    for (var i = 0; i < roverString.length; i++) {
        if (roverString[i] === "r") {
            turnRight(rover);
            rover.travelLog.push(`Je tourne à droite ${rover.direction}`);
        } else if (roverString[i] === "l") {
            turnLeft(rover);
            rover.travelLog.push(`Je tourne à gauche ${rover.direction}`);
        } else if (roverString[i] === "f") {
            moveForward(rover);
            rover.travelLog.push(` Je bouge d'une case, x = ${rover.x} et y = ${rover.y}`);
        } else if (roverString[i] === "b") {
            moveBackward(rover);
            rover.travelLog.push(`Je recule d'une case, x = ${rover.x} et y = ${rover.y}`);
        }
    };
    grid[rover.x][rover.y].slice(rover.direction);
    return (grid);
}

// pilotRover("rfflffrb");
// console.log(rover);