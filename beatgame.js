

debug = true;
if (debug) {
    console.log("DEBUG mode: ON");
} else {
    console.log("DEBUG mode: OFF");
}

let submitBtn = document.querySelector("#submitBtn")

let userRow = document.querySelector("#userRow");
let userCol = document.querySelector("#userCol");

userRow

if (isNaN(userRow)){
    if (debug) {console.log("isNaN is true lmao")};
}



const currentMap = {
    /* This is description */
    "numRow": 3,
    "numCol": 3,
    "keys":[
        false, false, false,
        false, false, false,
        false, false, false
    ],
    "startTime": new Date()
}

currentMap