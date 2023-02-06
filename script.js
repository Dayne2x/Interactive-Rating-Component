function showCard() {
    
    document.getElementById('card2').style.display = 'block';
    document.getElementById('card1').style.display = 'none';
}

function changeText(value) {

    if(value == 'btn1') {
        document.getElementById('text').innerHTML = "1";
    }
    else if(value =='btn2') {
        document.getElementById('text').innerHTML = "2";
    }
    else if(value == 'btn3') {
        document.getElementById('text').innerHTML = "3";
    }
    else if(value == 'btn4') {
        document.getElementById('text').innerHTML = "4";
    }
    else if(value == 'btn5') {
        document.getElementById('text').innerHTML = "5";
    }
}