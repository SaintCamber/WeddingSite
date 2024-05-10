import LoginForm  from "../components/loginForm"
import { SubmitLogin } from "../lib/data.js";
import {cookies} from 'next/headers'
export default function login(user){
    let prev = cookies.get('previous')

    return (
        <div>
            <LoginForm SubmitLogin={SubmitLogin}/>


        </div>
    )
}
