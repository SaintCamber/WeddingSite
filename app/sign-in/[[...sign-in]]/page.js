import {SignIn} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div className="clerkContainer signin">
      <SignIn signUpUrl="/sign-up"/>
    </div>
  )
}
