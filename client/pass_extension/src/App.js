import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Encrypter() {

  const [pass, setPass] = useState("");
  const [cipher, setCipherData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/home").then(function(response) {
      setCipherData(response.data)
    })
  }, [])

  async function postPass(e) {
    e.preventDefault()

    try{
      await axios.post("http://localhost:8000/post_pass", {
        pass
      })
    } catch (error) {
        console.log(error);
    }
  }

  function refreshPage(){
    window.location.reload();
}

  return (
    <div className='App'>
    <form className='form' id='form' onSubmit={postPass}>
      <div className='heads' id='heads'>
        <h2>Password Encrypter</h2>
      </div>

      <div className='form-group' id='form-group'>
        <input type='text' name='pass' id='name' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>

      <div className='form-group-form-button' id='form-group-form-button'>
        <button type='submit' name='encrypt' id='encrypt' value='Encrypt' onClick={refreshPage}>Encrypt</button>
      </div>
    </form>
    <div className='data' id='data'>
      <h3>{cipher}</h3>
    </div>
    </div>
  );
}

export default Encrypter;
