const Crypto = require("crypto-js");

class Cipher{
    constructor(text,pass){
        this.text = text;
        this.pass = pass;
    }
    encrypt(text, pass){
        return Crypto.AES.encrypt(text,pass).toString();
    }
    decrypt(text,pass){
        return Crypto.AES.decrypt(text,pass).toString(Crypto.enc.Utf8);
    }
}
const cipher = new Cipher()
// const message = cipher.encrypt('ini tulisan rahasia','p4$$w0rd');
// console.log(message);
// const decryptmessage = cipher.decrypt(message,'p4$$w0rd')
//console.log(decryptmessage);

module.exports = cipher;