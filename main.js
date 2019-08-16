function checkFunction(data) {
    let value = document.getElementById('data').value;
    for (let i = 0; i < value.length; i++) {
        if (value[i] != data[i]) {
            return false;
        }
    }
    return  true;
}
function insertData() {
    let arrayText = [];
    let data = document.getElementById('data').value;
    for (let i = data.length - 1; i >= 0; i--) {
        arrayText.push(data[i]);
    }

    if (checkFunction(arrayText)) {
        document.getElementById('display').innerHTML=data+" "+ "is symmetrical words";
    } else {
        document.getElementById('display').innerHTML=data+' '+"not symmetrical words";
    }

}