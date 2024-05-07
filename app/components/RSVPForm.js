'use client';
import React, { useState,useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import './componentCSS/RSVPForm.css';
import {useRouter} from 'next/navigation';

const RSVPForm = ({Submit,user})=>{
    const [checked, setChecked] = useState('');
    const router = useRouter();
    const [dietaryRestrictions,setDietaryRestrictions] =useState("");
    const [disabled,setDisabled] =useState(true);
    useEffect(() => {
        // Enable the submit button only if 'yes' or 'no' is checked
        setDisabled(checked !== 'yes' && checked !== 'no');
      }, [checked]);

    // Handler for checkbox change
    const handleCheckboxChange = (Event) => {
        setChecked(Event.target.value);
      };


    // Handler for dietary restrictions change
    const handleDietaryRestrictionsChange = (Event) => {
        setDietaryRestrictions(Event.target.value);
      };

    // Handler for form submit
    const handleSubmit = async (Event) => {
        Event.preventDefault();


        // Create a new RSVP object
        let newRSVP = {
            user_id: user.id,
            attending: checked === 'yes' ? true : false,
            dietaryRestrictions: dietaryRestrictions=='' ? 'None' : dietaryRestrictions
        };

        // Send the new RSVP object to the server for now console.log it
        await Submit(newRSVP);
        // Reset the form
        setChecked('');
        setDietaryRestrictions('');
        router.push('/RSVP/success');
      }

    return (
        <div className="RSVPFormContainer">

            <p>Hello, {user.name},  Will you be attending the wedding?</p>
            <form className='RSVPForm' onSubmit={handleSubmit}>
                <label>
                    Yes, I will be attending the wedding.
                    <Checkbox  checked={checked === 'yes' ? true : false} onChange={handleCheckboxChange} value='yes'/>

                </label>

                <label>
                    No, I will not be attending the wedding.
                    <Checkbox  checked={checked === 'no' ? true : false} onChange={handleCheckboxChange} value='no'/>
                </label>

                <label>
                    Any dietary restrictions?
                    <input type="text" name="dietaryRestrictions"  value={dietaryRestrictions} onChange={handleDietaryRestrictionsChange}/>
                </label>
                <input type="submit" value="Submit" disabled={disabled} />

            </form>


        </div>
    )



};

export default RSVPForm;
