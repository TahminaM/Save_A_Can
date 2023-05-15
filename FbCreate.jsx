import React, {useState} from 'react'
import { firestoreRef } from './App';
import { doc, setDoc } from 'firebase/firestore';

//fucntion is recycled and modified with the help of code snippet mentioned in my report
function FbCreate(){

    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");


    function createDoc(newDataObject) {
        //console.log("test worked");
        setDoc(doc(firestoreRef, newDataObject))
    }

    return (
        <div>
            <input type="text" id ="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" id ="url" placeholder="image url" onChange={(e) => setUrl(e.target.value)}/>
            <button onClick={() => {
                createDoc({email, url})
                document.getElementById("email").value = ""
                document.getElementById("url").value = ""
            }}>create new doc</button>
        </div>
    )
}

export default FbCreate