import RSVPForm from '../components/RSVPForm.js';
import AttendanceMetrics from '../components/AttendanceMetrics.js';
import { SubmitRSVP, getAttendanceMetrics } from '../lib/data.js';



const RSVP = async () => {
    return (
        <div>
        <h1>RSVP</h1>
        <AttendanceMetrics metrics={await getAttendanceMetrics().then(data=>data)} />
        <RSVPForm Submit={SubmitRSVP}/>
    </div>
    )
}
export const dynamic = 'force-dynamic'
export default RSVP;
