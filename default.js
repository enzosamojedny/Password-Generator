const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function passGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generator(length) {
    let password = ''
    while (password.length <= length) {
        const randomize = passGenerator(0, 1)
        let randomSpecialCharacters;
        if (randomize === 0) {
            randomSpecialCharacters = specialCharacters[passGenerator(0, specialCharacters.length - 1)]
        } else {
            randomSpecialCharacters = numbers[passGenerator(0, numbers.length - 1)]
        }
        password += randomSpecialCharacters
    }
    for (let i = password.length - 1; i > 0; i--) {
        const j = passGenerator(0, i)
        const temp = password[i]
        //Randomizador de contraseña
        password = password.slice(0, i) + password[j] + password.slice(i + 1);
        password = password.slice(0, j) + temp + password.slice(j + 1);
    }
    return password;
}
const passwordLength = parseInt(prompt("Enter your desired password length: "))
const password = generator(passwordLength)
alert(`Your password is: ${password}`)