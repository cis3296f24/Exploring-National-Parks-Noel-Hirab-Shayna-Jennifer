/**
 * Component for operating hours, fees & pass information, and internet & cellular access information.
 * @component
 * @module UsefulInfo
 * @memberof ParkPlan
 * @returns {JSX.Element} UsefulInfo component.
 */
import React, { useState, useEffect } from 'react';
import FetchPassFees from '../Functions/FetchPassFees';
//import style!!!!!!!!!!!!

const UsefulInfo = ({parkCode}) => {
    const [fees, setFees] = useState([]);
    const [passes, setPasses] = useState([]);

    useEffect(() => {
        const fetchPassFees = async () => {
            try {
                console.log("parkCode", parkCode.value);
                const passFees = await FetchPassFees(parkCode.value);
                console.log(passFees);
                setFees(passFees.fees);
                setPasses(passFees.passes);
            } catch (error) {
                console.log(error);
            }
        }

        //
        if (parkCode != null) {
            fetchPassFees();
        }
    }, [parkCode]);

    if (parkCode === null) {
        return null;
    }

    return (
        <div className='useful-info-container'>
            <h1>Useful Information</h1>

            <h4>Fees</h4>
            {fees.length === 0 ? (
                <div className='fee'>No fee information availabel.</div>
            ) : (
                <div>
                    {fees.map((fee, index) => (
                        <div key={index} className='fee'>
                            <p>Description: {fee.description}</p>
                            <p>Cost: {fee.cost}</p>
                        </div>
                    ))}
                </div>
            )}

            <h4>Passes</h4>
            {passes.length === 0 ? (
                <div className='pass'>No pass information availabel.</div>
            ) : (
                <div>
                    {passes.map((pass, index) => (
                        <div key={index} className='pass'>
                            <p>Description: {pass.description}</p>
                            <p>Cost: {pass.cost}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UsefulInfo;