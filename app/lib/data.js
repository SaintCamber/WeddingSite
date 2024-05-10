'use server';
import { sql } from '@vercel/postgres';
import { saltAndHashPassword,comparePasswordToHash } from './utils.js';
import bcrypt from 'bcryptjs';
import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';

export const getAttendanceMetrics = async () => {
    const attending = await sql`SELECT COUNT(*) FROM rsvp WHERE attending = true;`
    const notAttending = await sql`SELECT COUNT(*) FROM rsvp WHERE attending = false;`
    return {attending : attending.rows[0].count, notAttending : notAttending.rows[0].count}
}

export const SubmitRSVP = async (newRSVP) => {
    // console.log(newRSVP);
    try {
        await sql`INSERT INTO rsvp (user_id, attending, dietaryRestrictions) VALUES (${newRSVP.user_id}, ${newRSVP.attending}, ${newRSVP.dietaryRestrictions})`
    } catch (error) {
        console.log(error);
        return false;
    }
    revalidatePath('/RSVP')
    return true;
};


export const SubmitLogin = async ({user}) => {
    'use server';

    try {
       let loginAttempt = await sql`SELECT * FROM users WHERE name = ${user.name};`
         if (loginAttempt.rows.length > 0){
            let passwordMatch = await comparePasswordToHash(user.password, loginAttempt.rows[0].password)
            if (passwordMatch){
                console.log('Login Successful')
                console.log(loginAttempt.rows[0])
                return loginAttempt.rows[0];
            } else {
                return {error: 'Invalid Login Attempt'};
            }
         } else {
            return {error:'Invalid Login Attempt'};
         }

    } catch (error) {
        console.log(error);

    }
};

export const SubmitRegistration = async ({user}) => {
    'use server';

    try {
        let hashedPassword = await saltAndHashPassword(user.password);
        let registrationAttempt = await sql`INSERT INTO users (name, email,password) VALUES (${user.name},${user.email},${hashedPassword})`
        return registrationAttempt;
    } catch (error) {
        console.log(error);
    }
}



export async function checkRSVPStatus(user_id) {
    'use server'
    try {
        const {rows,fields} = await sql`SELECT * FROM rsvp WHERE user_id =${user_id};`
        return rows.length;
    } catch (error) {
        console.log(error);
};
}


export const getRSVP = async (user_id) => {
    'use server'
    try {
        const {rows,fields} = await sql`SELECT * FROM rsvp WHERE user_id =${user_id};`
        return rows;
    } catch (error) {
        console.log(error);
    }
}


