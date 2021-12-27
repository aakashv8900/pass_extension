const crypto = require("crypto");
const express = require("express");
const cors = require("cors")
const port = 8000


const app = express();
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

let encryptedData

const algorithm = "aes-256-cbc"
const initVector = crypto.randomBytes(16)
const Securitykey = crypto.randomBytes(32)
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
// const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)
// let decryptedData = decipher.update(encryptedData, "hex", "utf-8")
// decryptedData += decipher.final("utf8")

app.get("/", cors(), async (req, res) => {
    res.send("This is working");
})

app.post("/post_pass", cors(), async (req, res) => {
    let name = req.body
    for (let value of Object.values(name)) {
        encryptedData = cipher.update(value, "utf-8", "hex")
        encryptedData += cipher.final("hex")
    }
    console.log(encryptedData);
    // console.log(name);
    // console.log(encryptedData);
})

app.get("/home", cors(), async (req, res) => {
    res.send(encryptedData);
})

app.listen(port, () => {
    console.log("Listening");
});