import {SignUp} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div className="clerkContainer signup">
      <SignUp signInUrl="/sign-in"/>
    </div>
  )
}
