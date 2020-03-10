const Crypto = require("crypto-js");

class Hash{
    md5(input){
        return Crypto.MD5(input).toString(Crypto.enc.Base64);
    }
    sha1(input){
        return Crypto.SHA1(input).toString(Crypto.enc.Base64);
    }
    sha256(input){
        return Crypto.SHA256(input).toString(Crypto.enc.Base64);
        //return input;
    }
    sha512(input){
        return Crypto.SHA512(input).toString(Crypto.enc.Base64);
        //return input;
    }
}

const hash = new Hash()
//console.log(hash.md5('secret'));
module.exports = hash;