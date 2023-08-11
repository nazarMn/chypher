let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}
console.log(alphabet);



function chypherPassword(password, n) {
    let newPassword = '';
    for (let el of password) {
        let currentIndex = alphabet.indexOf(el)
        if (currentIndex + n <= alphabet.length) {
            newPassword += alphabet[currentIndex + n];
        } else {
            newPassword += alphabet[n - (alphabet.length - currentIndex)];
        }

    }
    console.log(newPassword)
}






function dechupherPassword(password, n) {
    let newPassword = '';
    for (let el of password) {
        let currentIndex = alphabet.indexOf(el);
        if (currentIndex - n >= 0) {
            newPassword += alphabet[currentIndex - n];
        } else {
            let bl = n - currentIndex;
            let ol = alphabet.length - bl;
            newPassword += alphabet[ol];
        }
    }
    console.log(newPassword);
}

$('#encrypt').click( function() {
    const password = document.getElementById("password").value;
    const n = parseInt(document.getElementById("dropdown").value);
    const result = chypherPassword(password, n);
    document.getElementById("result").textContent = " " + result;
});

$('#dechupher').click( function() {
    const password = document.getElementById("password").value;
    const n = parseInt(document.getElementById("dropdown").value);
    const result = dechupherPassword (password, n);
    document.getElementById("result").textContent = " " + result;
});

$('#cleanup').click( function() {
    document.getElementById("password").value = "";
})





// document.getElementById("add").addEventListener("click", function () {
//     let selectedOption = document.getElementById("dropdown");
//     let n = parseInt(selectedOption.value);
//     chypherPassword('nazar', n);
//     dechupherPassword('qdcdu', n);
// });