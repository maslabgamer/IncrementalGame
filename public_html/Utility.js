// Utility Functions
function pad(num, size) {
    var s = num+"";
    while(s.length < size) s = "0" + s;
    return s;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}