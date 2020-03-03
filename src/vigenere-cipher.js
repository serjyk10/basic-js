class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        let keyArr = key.toUpperCase().split('');

        let result = message.split('').map(letter => {
            let codeOfLetter = letter.toUpperCase().charCodeAt(0) - 65;
            if (codeOfLetter < 0 || codeOfLetter > 25) return letter;

            let codeOfKey = keyArr.shift().charCodeAt(0) - 65;
            keyArr.push(String.fromCharCode(codeOfKey + 65));

            return String.fromCharCode((codeOfLetter + codeOfKey) % 26 + 65);
        });

        return this.direct ? result.join('') : result.reverse().join('');
    }  

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw new Error();
        let keyArr = key.toUpperCase().split('');

        let result = encryptedMessage.split('').map(letter => {
            let codeOfLetter = letter.toUpperCase().charCodeAt(0) - 65;
            if (codeOfLetter < 0 || codeOfLetter > 25) return letter;

            let codeOfKey = keyArr.shift().charCodeAt(0) - 65;
            keyArr.push(String.fromCharCode(codeOfKey + 65));

            return String.fromCharCode((codeOfLetter + 26 - codeOfKey) % 26 + 65);
        });

        return this.direct ? result.join('') : result.reverse().join('');
    }
}
module.exports = VigenereCipheringMachine;
