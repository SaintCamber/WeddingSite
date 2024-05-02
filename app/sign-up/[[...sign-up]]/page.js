import {SignUp} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div>
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
