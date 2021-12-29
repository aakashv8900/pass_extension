const express = require("express");
const cors = require("cors")
const port = 8000

function cipher(str) {
    
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var alphabetscipher = ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','1','2','3','4','5','6','7','8','9','0'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabetscipher[j]);
            }
        }
    }
    return resultStr.join("");
  };

const app = express();
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

let encryptedData

app.get("/", cors(), async (req, res) => {
    res.send("This is working");
})

app.post("/post_pass", cors(), async (req, res) => {
    let name = req.body
    for (let value of Object.values(name)) {
        encryptedData = cipher(value);
    }
    console.log(encryptedData);
    res.send(encryptedData);
})

app.get("/home", cors(), async (req, res) => {
    res.send(encryptedData);
})

app.listen(port, () => {
    console.log("Listening");
});