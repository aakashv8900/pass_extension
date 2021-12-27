import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Encrypter() {

  const [pass, setPass] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/home").then(function(response) {
      setHome(response.data)
    })
  }, [])

  async function postPass(e) {
    e.preventDefault()

    try{
      await axios.post("http://localhost:8000/post_pass", {
        pass
      })
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className='App'>
    <form className='form' id='form' onSubmit={postPass}>

      <label>Encryption & Decryption</label>

      <div className='form-group' id='form-group'>
        <input type='text' name='pass' id='name' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>

      <div className='form-group form-button' id='form-group form-button'>
        <input type='submit' name='encrypt' id='encrypt' value='Encrypt'/>
      </div>
    </form>
    {home}
    </div>
  );
}

export default Encrypter;
