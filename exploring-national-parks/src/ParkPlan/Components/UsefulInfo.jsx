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
        const fetchFees = async () => {
            try {
                console.log("parkCode", parkCode.value);
                const fee = await FetchPassFees(parkCode.value);
                console.log(fee);
                setFees(fee.fees);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchPasses = async () => {
            try {
                console.log("parkCode", parkCode.value);
                const pass = await FetchPassFees(parkCode.value);
                console.log(pass);
                setFees(pass.passes);
            } catch (error) {
                console.log(error);
            }
        }
        //
        if (parkCode != null) {
            fetchFees();
            fetchPasses();
        }
    }, [parkCode]);

    if (parkCode === null) {
        return null;
    }

    return (
        <div className='useful-info-container'>
            <h1>Useful Information</h1>

            {fees.length === 0 && passes.length === 0 ? (
                <div className='fee'>No fee information available.</div>
            ) : (
                <div>
                    <h4>Fees</h4>
                    <div className='fee'>
                        {fees.map((fee, index) => (
                            <div key={index} className='fee'>
                                <p>Description: {fee.description}</p>
                                <p>Cost: {fee.cost}</p>
                            </div>
                        ))}
                    </div>

                    <h4>Passes</h4>
                    <div className='pass'>
                        {passes.map((pass, index) => (
                            <div key={index} className='pass'>
                                <p>Description: {pass.description}</p>
                                <p>Cost: {pass.cost}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UsefulInfo