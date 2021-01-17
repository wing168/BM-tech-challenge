import React from 'react';
import DriverDetails from '../driver-details/driver-details.component';

const PolDetails = ({ policyData }) => {
    //Mapping for usage from code to description so customer's know exactly what they have selected    
    let usageFullLen = null;
    if (policyData.policy.usage === "SDP") usageFullLen = "Social, Domestic & Pleasure";
    else if (policyData.policy.usage === "SDPC") usageFullLen = "Social Domestic & Pleasure (incl. Commuting)"
    else usageFullLen = "Personal Business";

    return (
        <div>
            <div className='logo-wrap container'>
                <span className='by-name'>By</span><span className='miles-name'>Miles</span><span className='dot-name'>.</span>
            </div>
            <div className='info-wrap'>
                <div className='nav'></div>
            </div>
            <div className='pol-info container mt-5 border border-light'>
                <div className='intro container mt-3'>
                    <h2>Hi {policyData.proposer.first_names}</h2>
                    <h5>Welcome to your dashboard</h5>
                </div>
                <div className ='your-cover container mt-5'>
                    <h3 >Your Cover Details</h3>
                    {/*Policy Overview section*/}
                    <h5 className='section-header mt-4 p-2'>Policy Overview</h5>
                    <div className='container'>
                        <div className='row info mt-4'>
                            <div className='col-sm-8 key'>Product Name</div>
                            <div className='col-sm-4 values'>{policyData.policy.product_name}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Cover Type</div>
                            <div className='col-sm-4 values'>{policyData.policy.cover}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Compulsory Excess</div>
                            <div className='col-sm-4 values'>{policyData.policy.compulsory_excess}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Voluntary Excess</div>
                            <div className='col-sm-4 values'>{policyData.policy.voluntary_excess}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Usage</div>
                            <div className='col-sm-4 values'>{usageFullLen}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>NCD Years</div>
                            <div className='col-sm-4 values'>{policyData.proposer.ncd}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Estimated Annual Milage</div>
                            <div className='col-sm-4 values'>{policyData.vehicle.estimated_yearly_mileage}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Postcode</div>
                            <div className='col-sm-4 values'>{policyData.policy.address.postcode}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Bill Date</div>
                            <div className='col-sm-4 values'>Day {policyData.policy.billing_day_date} of each month</div>
                        </div>
                    </div>
                    {/*Vehicle Details section*/}
                    <h5 className='section-header mt-4 p-2'>Vehicle Details</h5>    
                    <div className='container'>
                        <div className='row info mt-4'>
                            <div className='col-sm-8 key'>Registration</div>
                            <div className='col-sm-4 values'>{policyData.vehicle.reg}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Make</div>
                            <div className='col-sm-4 values'>{policyData.vehicle.make.toUpperCase()}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Model</div>
                            <div className='col-sm-4 values'>{policyData.vehicle.model.toUpperCase()}</div>
                        </div>
                    </div>
                    {/*Driver Details section*/}
                    <h5 className='section-header mt-4 p-2'>Driver Details</h5>
                    {policyData.additional_drivers.map((driver, index) => (
                        
                        <DriverDetails key={index} driver={driver} />

                    ))}
                    {/*Fee Details section*/}
                    <h5 className='section-header mt-4 p-2'>Fee Details</h5>    
                    <div className='container'>
                        <div className='row info mt-4'>
                            <div className='col-sm-8 key'>Subscription Installments</div>
                            <div className='col-sm-4 values'>{policyData.pricing.subscription_installments}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Subscription Rate</div>
                            <div className='col-sm-4 values'>£{policyData.pricing.subscription_rate} per month</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Per Mile Rate</div>
                            <div className='col-sm-4 values'>£{policyData.pricing.pm_rate}</div>
                        </div>
                        <div className='row info mt-3'>
                            <div className='col-sm-8 key'>Cancellation Fee</div>
                            <div className='col-sm-4 values'>£{policyData.pricing.cancel_fee}</div>
                        </div>
                        <div className='row info mt-3 mb-5'>
                            <div className='col-sm-8 key'>Changes to policy (after 3 changes)</div>
                            <div className='col-sm-4 values'>£{policyData.pricing.mta_fee}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default PolDetails;

