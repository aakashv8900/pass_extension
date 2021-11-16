const crypto = require('crypto')
const algorithm = "aes-256-cbc"
const initVector = crypto.randomBytes(16)
const Securitykey = crypto.randomBytes(32)
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)

let text = document.getElementById("text")
let encrypt = document.getElementById("en-btn")
let decrpyt = document.getElementById("de-btn")
let data = document.getElementById("data")


let encryptedData = cipher.update(text, "utf-8", "hex")
encryptedData += cipher.final("hex")

encrypt.addEventListener("click", function(){
    data.textContent += encryptedData
})

let decryptedData = decipher.update(encryptedData, "hex", "utf-8")
decryptedData += decipher.final("utf8")

decrpyt.addEventListener("click", function(){
    data.textContent += decryptedData
})