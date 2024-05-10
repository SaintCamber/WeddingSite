import Link from 'next/link'
import { currentUser } from "@clerk/nextjs/server";
import ContactInfo from '../components/ContactInfo.js'


export default async function Contact() {
    let user = await currentUser()
    return (
        <div>

            {user&&<ContactInfo/>}
            {!user&&<div>
                <h1>Please Sign-in to view Contact info</h1>
                <Link href="/sign-in">Sign-in</Link>
                </div>}

        </div>
    )
}
