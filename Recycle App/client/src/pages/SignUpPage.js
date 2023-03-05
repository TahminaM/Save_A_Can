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

function SignUpPage(props) {
    return (
        <>
            <div id="graySide">
            </div>
            <div id="redSide">
                <div id="signUpDiv1">
                    <p>CREATE ACCOUNT</p>
                </div>
                <div id="signUpDiv2">
                    <form onSubmit={(event) => post(event)}>
                        <input type="text" id="signUpFirstName" name="signUpFirstName" placeholder='FIRST NAME'></input>
                        <input type="text" id="signUpLastName" name="signUpLastName" placeholder='LAST NAME'></input>
                        <input type="text" id="signUpEmail" name="signUpEmail" placeholder='EMAIL'></input>
                        <input type="text" id="signUpPassword" name="signUpPassword" placeholder='PASSWORD'></input>
                        <button id="signUpSubmit">SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
    );
}
  
export default SignUpPage;