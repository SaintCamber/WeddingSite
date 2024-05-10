'use client'
import Link from 'next/link';
import {setPreviousUrlCookie} from '../lib/data.js'
import {useEffect} from 'react'

export default function RSVPpleaseLogin(){
    useEffect(
        ()=>setPreviousUrlCookie('/RSVP')
    )

    return (
        <div className='RSVPage'>
            <h1>RSVP</h1>
            <Link href={'/sign-in'} >Please login to RSVP</Link>
        </div>
    )
}
