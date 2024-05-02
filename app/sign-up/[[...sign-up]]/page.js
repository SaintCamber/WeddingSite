import {SignUp} from "@clerk/nextjs"


export default async function Login() {
  return (
    <div styles={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
