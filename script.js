let screen = document.getElementById("screen");
let ans = document.getElementById("ans");

alert("Close all the brackets for accurate result");
alert("Value of Sin, Cos and Tan will be in Radians");

const {abs, sin, cos, tan, E} = Math; //Since all of them are javascript functions, we need to close the bracket while using them

function clr() {
    screen.value = "";
    ans.value = "";
}

function oper(x) {
    var n = screen.value; // fetching the input value
    var l = n.length - 1; // length of the input value
    var v = n.substring(l, n.length); // last character in input string

    if(screen.value.length > 0) { //if the length of input value is greater than 0
        if(v == '/' || v == '*' || v == '-' || v == '+') { // if last character is equal to + or - or * or /
            var t = screen.value; // fetch the input value
            var len = t.length - 1; // length of the input value
            var u = t.substring(0, len); // whole input value except last character
            screen.value = u; // value in screen will be equal to whole string except last character
            screen.value += x; // replace the operators
        }
        else {
            screen.value += x;
        }
    }
    if(screen.value.length == 0) {
        if(x == '-') {
            screen.value += x;
        }
        else if(x == 'x2^(') {
            x = '2^(';
            screen.value += x;
        }
        else if(x == 'x10^(') {
            x = '10^(';
            screen.value += x;
        }
        else if(x == 'xe^(') {
            x = 'e^(';
            screen.value += x;
        }
        else if(x == ')' || x == '!') {
            screen.value = "";
        }
    }
}

function insert(x) {
    screen.value += x;
}

function backspc() {
    screen.value = screen.value.slice(0,-1);
}

function solve() {
    if(screen.value.length > 0) {
        let inValue = screen.value;
        inValue = inValue.replace("e","E");
        inValue = inValue.replace("x","*");
        inValue = inValue.replace("^","**");
        inValue = inValue.replace(/(\d+\.?\d*)\!/g,"fact($1)");
        try {
            inValue = eval(inValue);
            ans.value = inValue;
        } catch(error) {
            ans.value = "Invalid Expression: " + error;
        }
    }
}

function fact(x) {
    var n = 1;
    while(x != 0) {
        n *= x;
        x -=1;
    }
    return n;
}

function pi () {
    if(screen.value.length != 0) {
        screen.value += Math.PI;
    }
    else {
        screen.value = Math.PI;
    }
}

function rad() {
    ans.value = screen.value * Math.PI / 180;
}

function deg() {
    ans.value = (screen.value * 180) / Math.PI;
}

function log() {
    ans.value = Math.log(screen.value)/Math.log(10);
}

function ln() {
    ans.value = Math.log(screen.value);
}

function sq_rt() {
    ans.value = Math.sqrt(screen.value);
}

function cb_rt() {
    ans.value = Math.cbrt(screen.value);
}

function sign() {
    ans.value = screen.value * -1;
}
