var counter = 0

function correct(btnId) {
    document.getElementById(btnId).classList.remove('btn-primary');
    document.getElementById(btnId).classList.add('btn-success');
    document.getElementById(btnId).parentElement.parentElement.disabled = true;

    counter++

    console.log(counter);
    console.log(btnId);
}

function wrong(btnId) {
    document.getElementById(btnId).classList.remove('btn-primary');
    document.getElementById(btnId).classList.add('btn-danger');
    document.getElementById(btnId).parentElement.parentElement.disabled = true;


    console.log(counter);
    console.log(btnId);
}

var correctOnes = 0;
function checkCorrect(btnId) {
    document.getElementById(btnId).classList.remove('btn-secondary');
    document.getElementById(btnId).classList.add('btn-success');
    document.getElementById(btnId).onclick = null;

    correctOnes++

    console.log(correctOnes, wrongOnes);
    return correctOnes;
}

var wrongOnes = 0;
function checkWrong(btnId) {
    document.getElementById(btnId).classList.remove('btn-secondary');
    document.getElementById(btnId).classList.add('btn-danger');
    document.getElementById(btnId).onclick = null;

    wrongOnes++

    console.log(correctOnes, wrongOnes);
    return wrongOnes;

}

function checkAnswer(correctOnes, wrongOnes) {
    var checkAnswer = correctOnes - wrongOnes;

    if (checkAnswer == 4) {
        document.getElementById('btn-7-f').classList.remove('btn-primary');
        document.getElementById('btn-7-f').classList.add('btn-success');
        document.getElementById('btn-7-f').onclick = null;
        counter++
    }
    else {
        document.getElementById('btn-7-f').classList.remove('btn-primary');
        document.getElementById('btn-7-f').classList.add('btn-danger');
        document.getElementById('btn-7-f').onclick = null;
    }

    console.log(checkAnswer)
    console.log(counter)

}

function result() {
    document.getElementById('result').innerHTML = counter + '0%';
    if (counter >= 7) {
        document.getElementById('result').style.color = "green";
    }
    else if (counter >= 5) {
        document.getElementById('result').style.color = "#ffc107";
    }
    else {
        document.getElementById('result').style.color = "red";
    }

}