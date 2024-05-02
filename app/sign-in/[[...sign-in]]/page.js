import {SignIn} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div styles={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}
