console.log("for temprature conversion");
function tempratureconverter1(valNum) {
    valNum = parseFloat(valNum);

    document.getElementById("otcel1").innerHTML = (valNum - 32) * 5 / 9;
    document.getElementById("otkel1").innerHTML = (valNum - 32) * 5 / 9 + 273.15;
}

function tempratureconverter2(valNum) {
    valnum = parseFloat(valNum);

    document.getElementById("otfar2").innerHTML = (valNum * 9 / 5) + 32;
    document.getElementById("otkel2").innerHTML = (valNum * 1) + 273.15;
}

function tempratureconverter3(valNum) {
    valNum = parseFloat(valNum);

    document.getElementById("otcel3").innerHTML = (valNum * 1) - 273.
    document.getElementById("otfar3").innerHTML = (valNum - 273.15) * 9 / 5 + 32;
}