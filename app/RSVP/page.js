'use server';
import RSVPForm from '../components/RSVPForm.js';
import AttendanceMetrics from '../components/AttendanceMetrics.js';
import { SubmitRSVP, getAttendanceMetrics,checkRSVPStatus } from '../lib/data.js';
import { currentUser } from "@clerk/nextjs/server";



const RSVP = async () => {
    'use server'
    const user = await currentUser();

    return (
        <div className='RSVPage'>
        <h1>RSVP</h1>
        {user ? <h2>hello,{user.fullName}!</h2> : <h2>Please sign in</h2>}
        {user&&(user.firstName=='hunter'&&user.lastName=='nodwell')&&(<AttendanceMetrics metrics={await getAttendanceMetrics().then(data=>data)} />)}
        {user&&!checkRSVPStatus(user.id)&&(<RSVPForm Submit={SubmitRSVP} user={{id:user.id}}/>)}
    </div>
    )
}
export default RSVP;
