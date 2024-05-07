import { currentUser } from "@clerk/nextjs/server";
import {getRSVP} from '../../lib/data.js';


export default async function RSVPSuccess() {
    const user = await currentUser();
    const RSVP = await getRSVP(user.id);

  return (
    <div>
        <h1>RSVP Success</h1>
        <p>Thank you for RSVPing</p>
        <p>Here is your RSVP:</p>
        <p>{user.fullName}</p>
        <p>Attending: {RSVP.attending ? 'Yes' : 'No'}</p>
        <p>Dietary Restrictions: {RSVP.dietaryRestrictions}</p>

    </div>
  )
}
