/**
 * Component for campground information.
 * @component
 * @module Campgrounds
 * @memberof ParkPlan
 * @returns {JSX.Element} Campgrounds component.
 */
import React, { useState, useEffect } from 'react';
import FetchCampgrounds from '../Functions/FetchCampgrounds';

const Campgrounds = ({parkCode}) => {
    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        const fetchCampgrounds = async () => {
            try {
                console.log("parkCode", parkCode.value);
                const campgrounds = await FetchCampgrounds(parkCode.value);

                const campgroundData = campgrounds[0].data[0]; //access correct campground data
                console.log(campgroundData);

                setCampgrounds(campgroundData);
            } catch (error) {
                console.log(error);
            }
        }
        if (parkCode != null) {
            fetchCampgrounds();
        }
    }, [parkCode]);

    if (parkCode === null) {
        return null;
    }

    return (
        <div className='campgrounds-container'>
            <h1>Park Campgrounds</h1>
            {campgrounds.length === 0 ? ( //
                <div className='campground'>No campgrounds</div>
            ) : (
                <div>
                    <ul>
                        {campgrounds.map((campground) => (
                            <li key={campground.id}>
                                <strong>{campground.name}</strong>
                                <p>Address: {campground.addresses.map(addy => '${addy.line1}, ${addy.city}, ${addy.stateCode} ${addy.postalCode}').join(", ")}</p>
                                <p>Contact: {campground.contacts.map(contact => contact.phoneNumbers.map(num => num.phoneNumber).join(", ")).join(", ")}, {campground.contacts.map(contact => contact.emailAddresses.map(email => email.emailAddress).join(", ")).join(", ")}</p>
                                <p>Operating Hours: {campground.operatingHours ? campground.operatingHours.join(", ") : "N/A"}</p>
                                <p>{campground.description}</p>
                                <p>Available Sites: {campground.campsites.reduce((total, site) => total + site.totalsites, 0)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Campgrounds;