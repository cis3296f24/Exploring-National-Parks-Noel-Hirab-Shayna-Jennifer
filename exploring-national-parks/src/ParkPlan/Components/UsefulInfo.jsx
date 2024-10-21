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
        const fetchData = async () => {
            try {
                console.log("parkCode", parkCode.value);
                const feePassData = await FetchPassFees(parkCode.value);
                console.log(feePassData);
                setFees(feePassData.data.fees || []);
                setPasses(feePassData.data.passes || []);
            } catch (error) {
                console.log(error);
            }
        };

        if (parkCode != null) {
            fetchData();
        }
    }, [parkCode]);

    if (parkCode === null) {
        return null;
    }

    return (
        <div className='useful-info-container'>
            <h1>Useful Information</h1>

            {fees.length === 0 && passes.length === 0 ? (
                <div className='info'>No additional useful information available.</div>
            ) : (
                <div>
                    <h4>Fees</h4>
                    <div className='fee'>
                        {fees.map((fees, index) => (
                            <p key={index} className='fee'>{fees.description}{fee.cost}</p>
                        ))}
                    </div>

                    <h4>Passes</h4>
                    <div className='pass'>
                        {passes.map((pass, index) => (
                            <p key={index} className='pass'>{pass.description}{pass.cost}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default UsefulInfo;