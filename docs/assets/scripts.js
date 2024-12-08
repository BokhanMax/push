document.getElementById('newpass').addEventListener('click', function() {
    document.getElementById("jspass").innerHTML = generatePassword();
})


function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
    return retVal;
}
document.getElementById("jspass").innerHTML = generatePassword();


const copyContent = async () => {
    try {
        let text = document.getElementById('jspass').innerHTML;
        await navigator.clipboard.writeText(text);
        console.log('Скопійовано:', text);
    } catch (err) {
    console.error('Помилка: ', err);
    }
}
