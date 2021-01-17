import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingPage from '../loading/loading-page';
import PolDetails from '../../components/pol-details/pol-details.component';

import './pol-details.styles.css'

const PolDetailsPage = ({ location }) => {

    const accessToken = location.accessToken; // this was passed from sign-in page
    console.log(accessToken)
    const [policyData, setPolicyData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // GET request when page first rendered
    useEffect(() => {
       //Fetch the policy data using the access token
        const getPolData = async () => {
            try {
                const polReq = await fetch(`https://api.bybits.co.uk/policys/details`, {
                                method: 'GET',
                                headers: {
                                // 'Authorization': `Bearer ${accessToken}`,
                                'environment': 'mock',
                                'Content-Type': 'application/json'
                                }
                            })
                
                const polData = await polReq.json();

                setPolicyData(polData);
            }catch (err) {
                console.log(err)

            }
        }

        getPolData()
       
        
    }, [accessToken]);

    //Check that the data is available before rendering the data onto the policy details component

    useEffect(() => {
        if (policyData) {
            setIsLoading(false)
        }
    }, [policyData])

    return (
        <div className='container-fluid pol-data-wrap'>
            {isLoading ? 
            <LoadingPage /> 
            : 
            <PolDetails policyData={policyData} />
            }
        </div>
    )
    
    
        
}

export default withRouter(PolDetailsPage);

