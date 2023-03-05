import React from 'react';
function post(event){
    console.log("EVENT", event);
    event.preventDefault();
    let loginInformation = {
        Email: event.target.Email.value, 
        Password: event.target.Password.value,
    };
    fetch('http://localhost:8080/api/users', {
        method: 'POST',
      
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: loginInformation,
          }),
    })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
}

function LoginPage(props) {
    return (
        <>
            <div id="graySide">
            </div>
            <div id="redSide">
                <div id="loginDiv1">
                    <p>LOGIN</p>
                </div>
                <div id="loginDiv2">
                    <form onSubmit={(event) => post(event)}>
                        <input type="text" id="loginFirstName" name="loginFirstName" placeholder='FIRST NAME'></input>
                        <input type="text" id="loginLastName" name="loginLastName" placeholder='LAST NAME'></input>
                        <input type="text" id="loginEmail" name="loginEmail" placeholder='EMAIL'></input>
                        <input type="text" id="loginPassword" name="loginPassword" placeholder='PASSWORD'></input>
                        <button id="resetPass">[Reset Password]</button>
                        <button id="loginSubmit">SIGN IN</button>
                    </form>
                </div>
            </div>
        </>
    );
}
  
export default LoginPage;