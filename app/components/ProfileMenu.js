// components/ProfileMenu.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';

const ProfileMenu = ({ userId }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative">
            {userId ? (
                <div className="bg-white whitespace-nowrap text-purple-700 hover:bg-purple-600 hover:text-white py-1 px-3 rounded-md shadow-md transform hover:scale-105 transition-transform">
                    <SignOutButton />
                </div>
            ) : (
                <>
                    <button onClick={toggleDropdown} className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white py-1 px-3 rounded-md shadow-md transform hover:scale-105 transition-transform">
                        Menu
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                            <Link href="/sign-in" className="block px-4 py-2 text-purple-700 hover:bg-purple-600 hover:text-white">Sign in</Link>
                            <Link href="/sign-up" className="block px-4 py-2 text-purple-700 hover:bg-purple-600 hover:text-white">Sign up</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProfileMenu;
