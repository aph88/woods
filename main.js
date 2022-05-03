//define constants
const mainChar = {};
mainChar.x = 0;
mainChar.y = 0;


const tiles = ["G", "T", "B", "E", "F"];
const tileStore = {};
tileStore[`${mainChar.x},${mainChar.y}`] = tiles[0];

//define functions

function defineTiles(a, b) {
    for (let y = b - 1; y <= (b + 1); y++) {
        for (let x = a - 1; x <= (a + 1); x++) {
            if (!(x === a && y === b)) {
                const seed = Math.floor(Math.random() * 100);
                if (seed < 25) {
                    tileStore[`${x},${y}`] = tiles[1];

                } else if (seed < 50) {
                    tileStore[`${x},${y}`] = tiles[2];

                } else {
                    tileStore[`${x},${y}`] = tiles[0];

                }

                console.log(`${x},${y} = ${tileStore[`${x},${y}`]}`)
            }
        }

    }

}

function fillDisplay(a, b) {
    display = [];
    for (let y = 0; y < 3; y++) {
        display.push([]);
        for (let x = 0; x < 3; x++) {
            display[y].push(tileStore[`${a - 1 + x},${b - 1 + y}`]);
        }
    }

    return display;
}

defineTiles(mainChar.x, mainChar.y);

const displayTest = fillDisplay(mainChar.x, mainChar.y);
//test outputs
console.log(tileStore["0,0"])
console.log(displayTest);


