import LoginForm  from "../components/loginForm"
import { SubmitLogin } from "../lib/data.js";
export default function login(user){


    return (
        <div>
            <LoginForm SubmitLogin={SubmitLogin}/>


        </div>
    )
}
