import {SignIn} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div className="clerkContainer signin">
      <SignIn signInUrl="/sign-in" />
    </div>
  )
}
// signInForceRedirectUrl={`${previous}`}
// signInForceRedirectUrl={Router.back()}
