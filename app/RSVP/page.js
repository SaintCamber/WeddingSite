'use server';
import RSVPForm from '../components/RSVPForm.js';
import AttendanceMetrics from '../components/AttendanceMetrics.js';
import { SubmitRSVP, getAttendanceMetrics,checkRSVPStatus } from '../lib/data.js';
import { currentUser } from "@clerk/nextjs/server";
import Link from 'next/link';



const RSVP = async () => {
    'use server';
    const user = await currentUser();
    
    if(user){

        const RSVPStatus = await checkRSVPStatus(user.id);
        if (RSVPStatus){
            return (
            <div className="RSVPage">
                <h1>RSVP</h1>
                <p>You have already submitted an RSVP!</p>
                <Link href='/RSVP/success'>View RSVP</Link>
            </div>
        )
    } else {
        return (
            <div className="RSVPage">

                <h1>Please RSVP below</h1>
                <RSVPForm Submit={SubmitRSVP} user={{id:user.id,name:user.fullName}}/>
            </div>
        )
    }
} else {
    return (
        <div className='RSVPage'>
            <h1>RSVP</h1>
            <Link href='/sign-in'>Please login to RSVP</Link>
        </div>
    )

}
}


export default RSVP;
