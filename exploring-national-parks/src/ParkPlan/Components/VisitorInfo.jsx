/**
 * Component for visitor center information.
 * @component
 * @module VisitorInfo
 * @memberof ParkPlan
 * @returns {JSX.Element} VisitorInfo component.
 */
import React, { useState, useEffect } from 'react';
import FetchVisitorCenters from '../Functions/FetchVisitorCenters';
import FetchEvents from "../Functions/FetchEvents";
import '../../Style/visitorInfo.css';
const VisitorInfo = ({parkCode}) => {
    const [visitorCenters, setVisitorCenters] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchVisitorCenters();
        fetchEvents();
    }, [parkCode]);

    const fetchVisitorCenters = async () => {
        try {
            console.log("parkCode", parkCode.value);
            const centers = await FetchVisitorCenters(parkCode.value);

            const centerData = centers.data;
            console.log(centerData);

            setVisitorCenters(centerData);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchEvents = async () => {
        try {
            console.log("parkCode", parkCode.value);
            const events = await FetchEvents(parkCode.value);

            const eventData = events.data;
            console.log(eventData);

            setEvents(eventData);
        } catch (error) {
            console.log(error);
        }
    }

    if (parkCode === null) {
        return null;
    }

    return (
        <div className='visitor-info-container'>
            <h1>Visitor Information</h1>

            <h3>Visitor Centers</h3>
            <div className="visitor-info-container centers">
                {visitorCenters.length > 0 ? (
                    visitorCenters.map((center) => (
                        <div>
                            <h4>{center.name}</h4>
                            <p>{center.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No visitor centers available.</p>
                )}
            </div>

            <h3>Events</h3>
            <div className="visitor-info-container events">
                {events.length > 0 ? (
                    events.map((event) => (
                        <div>
                            <h4>{event.title}</h4>
                            <p>{event.description.replace(/<\/?p>/g, '')}</p>
                            <p>Location: {event.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No events available.</p>
                )}
            </div>
        </div>
    )
}
export default VisitorInfo;