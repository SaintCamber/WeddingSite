'use client'
import {SignIn} from "@clerk/nextjs"
import {useEffect} from "react"


export default async function Login() {
  return (
    <div className="clerkContainer signin">
      <SignIn signInUrl="/sign-in" />
    </div>
  )
}
// signInForceRedirectUrl={`${previous}`}
// signInForceRedirectUrl={Router.back()}
