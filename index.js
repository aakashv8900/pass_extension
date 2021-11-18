const crypto = require("crypto")
const algorithm = "aes-256-cbc"
const initVector = crypto.randomBytes(16)
const Securitykey = crypto.randomBytes(32)
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)

let text = window.document.getElementById("text")
let data = window.document.getElementById("data")


let encryptedData = cipher.update(text, "utf-8", "hex")
encryptedData += cipher.final("hex")

function encr(){
    data.innerHTML =  encryptedData;
    alert('Encryption')
}

let decryptedData = decipher.update(encryptedData, "hex", "utf-8")
decryptedData += decipher.final("utf8")


function decr(){
    data.innerHTML = decryptedData;
    alert('Decryption')
}