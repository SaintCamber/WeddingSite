// This is the main page of the website. It is the first page that is loaded when the website is accessed.
// app/page.js
// Purpose: Main page of the website

import React from 'react';
import Bride from './components/Bride.js';
// import Groom from '../components/Groom.js';


import "./globals.css";


export default function Home({children}) {

  return (

    <div className='MainPage'>
      <div className='Title'>
        <h1>Wedding Website</h1>
        <p> </p>
      </div>
      <div className='PictureBox'>
        <div className='Bride'>
          <Bride />
        </div>
        <div className='Groom'>
          {/* <Groom /> */}
        </div>
      </div>

    </div>


  );
}
