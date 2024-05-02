'use client';
const { useState, useEffect } = require('react');
const { useSelector } = require('react-redux');



// fetch from database the attending and not attending counts...this can be done with fetch requests
// or by using redux and the useSelector hook to grab the attending and notAttending counts from the store
// though that would still require a fetch request to update the store so it's probably better to just use fetch requests
// this is a server component so it can't use hooks like useSelector anyway so fetch requests are the way to go
// what would the fetch request look like?
// fetch('/api/attending',{method:'GET'}).then(res=>res.json()).then(data=>return data);?
// or would it be better to use the fetch API directly in the component?
// useEffect(()=>{
//     fetch('/api/attending',{method:'GET'}).then(res=>res.json()).then(data=>setAttending(data));
// },[]);
// ^ that would require the component to be a client component though so it would have to be a different component?
// ......hmmmmmmmmmmmmmm

// if i made this a client component i could use redux but i am still uncertain how to connect the store to the server
// i think i built the appropriate component i.e storeProvider.js but i'm not sure how to use it



const AttendanceMetrics = ({metrics}) => {


    return (
        <div>
            <h2>Attendance Metrics</h2>
            <p>Attending: {metrics.attending}</p>
            <p>Not Attending: {metrics.notAttending}</p>

        </div>
    );
    }

    export default AttendanceMetrics;
