// Main Data
var TimeElements = ["month", "year"];
var Resources = ["Ore"];

// Main functions
function GatherOre() {
    document.getElementById("Ore").innerHTML = parseInt(document.getElementById("Ore").innerHTML) + 1;
}

function build_building(to_build) {
    var current_amount = document.getElementById(to_build + "_amount");
    
    
}

function GameTime() {
    var MonthAndDay = document.getElementById("month").innerHTML.split("-");
    var year = parseInt(document.getElementById("year").innerHTML);
    var day = parseInt(MonthAndDay[1]);
    var month = parseInt(MonthAndDay[0]);

    if (day < 40) {
        document.getElementById("month").innerHTML = month.toString() + "-" + (day + 1).toString();
    } else if (day === 40 && month < 10) {
        document.getElementById("month").innerHTML = (month + 1).toString() + "-01";
    } else if (day === 40 && month === 10) {
        year += 1;
        year = pad(year, 4);
        document.getElementById("year").innerHTML = year;
        document.getElementById("month").innerHTML = "1-01";
    }
}

function ResourceCollection() {
    var ore = localStorage.getItem("OrePerSec");

    if (ore !== null) {

    } else {
        document.getElementById("OrePerSec").innerHTML = "(+0/sec)";
    }
}

function saveGame() {
    for (var i = 0; i < Resources.length; ++i) {
        localStorage.setItem(Resources[i], document.getElementById(Resources[i]).innerHTML);
    }
    for(var i = 0; i < TimeElements.length; ++i) {
        localStorage.setItem(TimeElements[i], document.getElementById(TimeElements[i]).innerHTML);
    }
}

function loadGame() {
    // Load Time
    var dayMonth = localStorage.getItem('month');
    var year = localStorage.getItem("year");
    if (dayMonth === null) {
        document.getElementById("month").innerHTML = "1-01";
    } else {
        document.getElementById("month").innerHTML = dayMonth.toString();
    }
    if (year === null) {
        document.getElementById("year").innerHTML = "0001";
    } else {
        document.getElementById("year").innerHTML = year.toString();
    }

    // Load Resources
    for (var i = 0; i < Resources.length; ++i) {
        var element = localStorage.getItem(Resources[i]);
        if (element === null) {
            document.getElementById(Resources[i]).innerHTML = 0;
        } else {
            document.getElementById(Resources[i]).innerHTML = element.toString();
        }
    }
    
    var gametime = window.setInterval(GameTime, 50);
    var resources = window.setInterval(ResourceCollection, 1000);
    var save = window.setInterval(saveGame, 10000);
}

// Test Functions
function updateTest() {
    var value = parseInt(document.getElementById('left').innerHTML);
    value += 1;
    document.getElementById('left').innerHTML = value;
}

// Starts all this nonsense off
window.onload = loadGame();

