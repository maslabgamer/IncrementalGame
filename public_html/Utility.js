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

function valueChanged(tab) {
    var ancestor = document.getElementById(tab),
            descendants = ancestor.getElementsByTagName('*');
    
    var e, checkbox = document.getElementById(tab + "_hide_finished").checked;
    for(var i = 0; i < descendants.length; ++i) {
        e = descendants[i];
        if (e.innerHTML.indexOf("(Completed)") >= 0 && checkbox === true)
            e.style.display = "none";
        else
            e.style.display = "inline-block";
    }
}