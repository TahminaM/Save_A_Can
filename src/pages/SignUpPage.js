import React, {useState,useEffect} from 'react'
import { UserAuth } from '../components/auth/AuthContext'
import { useNavigate } from 'react-router-dom'
//Set up state to hold the user's sign-up information:
const SignUpPage = (props) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        console.log("EVENT", event.target)
        event.preventDefault()
        // prevent the default form submission behavior
        try {
            await createUser(Email, Password);
            navigate('/prediction');
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnchnage = (e) => {
        switch (e.target.id) {
            case "Email":
                setEmail(e.target.value)
                break;
            default:
                setPassword(e.target.value)
                break;
        }
    }

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            window.location.href = "/"
        }
    },[])

    return (
        <div className='SignUpPage container'>
            <div className="redSide">
                <div id="signUpDiv1">
                   <h1>Create Account</h1>
               </div>
               <form onSubmit={onSubmit}>
                   <input onChange={handleOnchnage} type="text" id="FirstName" name="signUpFirstName" placeholder='First Name'/>
                   <input onChange={handleOnchnage} type="text" id="LastName" name="signUpLastName" placeholder='Last Name'/>
                   <input onChange={handleOnchnage} type="email" id="Email" name="signUpEmail" placeholder='Email'/>
                   <input onChange={handleOnchnage} type="password" id="Password" name="signUpPassword" placeholder='Password'/>
                   <a href='/login' style={{textAlign: "end", width: "100%", paddingRight: 30}}>Login</a>

                   <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
  
export default SignUpPage;