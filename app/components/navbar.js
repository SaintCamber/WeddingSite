// components/navbar.js
// Purpose: Navbar component for the website

import React from 'react';
import Link from 'next/link';
import { auth } from "@clerk/nextjs/server";
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
    const { userId } = auth();
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-purple-700 shadow-md">
            <div className="bg-gray-800 text-white text-center py-2">
                <p>Some text above the navbar</p>
            </div>
            <div className="flex justify-between items-center py-4 px-8">
                <nav className="flex justify-around w-full">
                    <Link href="/" className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">Home</Link>
                    <Link href="/RSVP" className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">RSVP</Link>
                    <Link href="/registry" className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">Registry</Link>
                    <Link href="/Gallery" className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">Gallery</Link>
                    <Link href="/Contact" className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">Contact</Link>
                </nav>
                <ProfileMenu userId={userId} />
            </div>
        </div>
    );
}

export default Navbar;
