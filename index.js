const http = require("http");
const crypto = require("crypto");
const path = require("path");


const algorithm = "aes-256-cbc"
const initVector = crypto.randomBytes(16)
const Securitykey = crypto.randomBytes(32)
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)


const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"Content-type":"text/html"});
        res.sendFile(path.join(__dirname+'/index.html'));
    }
});


// let encryptedData = cipher.update(text, "utf-8", "hex")
// encryptedData += cipher.final("hex")

// function encr(){
//     data.innerHTML =  encryptedData;
//     alert('Encryption')
// }

// let decryptedData = decipher.update(encryptedData, "hex", "utf-8")
// decryptedData += decipher.final("utf8")


// function decr(){
//     data.innerHTML = decryptedData;
//     alert('Decryption')
// }

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening");
});