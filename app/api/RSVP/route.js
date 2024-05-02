// This file contains the route for the RSVP form submission
// It receives the RSVP object from the client and sends it to the server
// it uses the SubmitRSVP function from the lib/data.js file to submit the RSVP
// It then redirects the user to the RSVP page
// It returns an error if the submission fails
// it should not send info to the client as it needs to protect the user's data

'use server';
import { SubmitRSVP } from '../../lib/data.js';

export async function POST(req) {
    'use server'
    // Parse the incoming RSVP data from the request body
    const { user_id, attending, dietaryRestrictions } = JSON.parse(JSON.stringify(req.body))
    // Check if the required fields are present
    console.log(user_id);
    console.log(attending);
    console.log(dietaryRestrictions);
    if(user_id===undefined || attending===undefined || dietaryRestrictions===undefined) {
      return new Response('Missing required fields', { status: 400 });
    }
    try {
        // Create a new RSVP object
        let newRSVP = {
            user_id: user_id,
            attending: attending,
            dietaryRestrictions: dietaryRestrictions
        };
        // Submit the new RSVP object
        await SubmitRSVP(newRSVP);
        return new Response('RSVP submitted', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to submit RSVP', { status: 500 });
    }
}
