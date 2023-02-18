import "../css/password.css"
import { useState } from "react";

export default function Password(){

    const [input, setInput] = useState("");
    const [password, setPassword] = useState(false);
    const [errorSpan, setErrorSpan] = useState(false);

    function passwordHandler(){
        if (input === "pasevip") {
            setPassword(true)
        }else{
            setErrorSpan(true)
            console.log(errorSpan)
            setTimeout(() => {setErrorSpan(false)}, "2000")
        }
    }
    console.log(errorSpan)
    return(
        <div className={`passwordContainer ${password === true && "hidden"}` }>
            <form onSubmit={(e) => {
                e.preventDefault()
                passwordHandler()
            }}>
                <input type="text" value={input} onChange={(e) => (setInput(e.target.value))}/>
                <input type="submit" value={"Submit"} />
            </form>
            <span className={`${errorSpan === true ? "errorSpan" : "hidden"}`}>Thats not the correct password</span>
        </div>
    )
}