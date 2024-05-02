
// components/navbar.js
// Purpose: Navbar component for the website

import React from 'react';
import Link from 'next/link';
import { auth, currentUser } from "@clerk/nextjs/server";
import { Modal } from '@mui/material'



 const Navbar = ()=> {
    const { userId } = auth();
    return (
        <div className={"navcontainer"} style={{"display":"flex","flexDirection":"row"}}>
        <nav className="navbar">
                <ul className="links">
                    <li>
                        <Link className="link" href="/">Home</Link>

                    </li>
                    <li>
                        <Link className="link" href="/RSVP">RSVP</Link>

                    </li>
                    <li>
                        <Link className="link" href="/registry">Registry</Link>

                    </li>
                    <li>
                        <Link className="link" href="/Gallery">Gallery</Link>

                    </li>
                    <li>
                        <Link className="link" href="/Contact">Contact</Link>

                    </li>
                </ul>
            </nav>
                <div className='ProfileContainer'>
                {userId && (<Link  className="profile" href="/dashboard">Dashboard</Link>)}
                {!userId && (<>
                    <Link className="profile"  href="/sign-in">Sign in</Link>
                    <Link className="profile"  href="/sign-up">Sign up</Link>

                </>)}

                </div>
    </div>

);

}


export default Navbar;
