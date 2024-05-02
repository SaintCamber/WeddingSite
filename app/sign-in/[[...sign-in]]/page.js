import {SignIn} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div>
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}
