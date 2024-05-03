import RSVPForm from '../components/RSVPForm.js';
import AttendanceMetrics from '../components/AttendanceMetrics.js';
import { SubmitRSVP, getAttendanceMetrics } from '../lib/data.js';
import { currentUser } from "@clerk/nextjs/server";



const RSVP = async () => {
    const user = await currentUser();

    return (
        <div>
        <h1>RSVP</h1>
        {user ? <h2>hello, {user.firstName} {user.lastName}!</h2> : <h2>Please sign in</h2>}
        {user&&(user.firstName=='hunter'&&user.lastName=='nodwell')&&(<AttendanceMetrics metrics={await getAttendanceMetrics().then(data=>data)} />)}
        {user&&(user.firstName!='hunter'&&user.lastName!='nodwell')&&(<RSVPForm Submit={SubmitRSVP}/>)}
    </div>
    )
}
export const dynamic = 'force-dynamic'
export default RSVP;
