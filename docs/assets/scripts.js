document.getElementById('newpassbutton').addEventListener('click', function() {
    document.getElementById("jspass").innerHTML = generatePassword();
})

/* function generatePassword() {
	var passwordLength = document.getElementById('passwordLength');
    var length = passwordLength;
	var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]\:;?></-=";
	var retVal = "";
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
} */
const passwordLength = document.getElementById('passwordLength');
/* const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
 */const generate = document.getElementById('newpassbutton');
const password = document.getElementById('jspass');
const copy = document.getElementById('copypassbutton');

function generatePassword() {
	const length = parseInt(passwordLength.value);
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]\:;?></-=";
/* 	if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
	if (numbers.checked) chars += "0123456789";
	if (symbols.checked) chars += "!@#$%^&*()_+~|}{[]\:;?></-="; */

	let result = "";
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	password.value = result;
}

generate.addEventListener('click', generatePassword);

copy.addEventListener('click', () => {
	navigator.clipboard.writeText(password.value).then(() => {
		// Optionally, provide feedback to the user that the text was copied
	}).catch(err => {
		console.error('Could not copy text: ', err);
	});
});