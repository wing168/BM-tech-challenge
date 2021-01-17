import React from 'react';

const DriverDetails = ({ driver }) => {
    return (
        
        <div className='container'>
            <div className='row info mt-4'>
                <div className='col-sm-8 key'>{driver.first_names} {driver.last_names}</div>
                <div className='col-sm-4 values'>{driver.relationship}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Title</div>
                <div className='col-sm-4 values'>{driver.title}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Date of Birth</div>
                <div className='col-sm-4 values'>{driver.dob}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Children Under 16</div>
                <div className='col-sm-4 values'>{driver.children}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Licence Type</div>
                <div className='col-sm-4 values'>{driver.licence_type}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Licence Issued Date</div>
                <div className='col-sm-4 values'>{driver.licence_issued_date}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Occupation</div>
                <div className='col-sm-4 values'>{driver.occupation}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Claims</div>
                <div className='col-sm-4 values'>{driver.claims.length}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Convictions</div>
                <div className='col-sm-4 values'>{driver.convictions.length}</div>
            </div>
            <div className='row info mt-3'>
                <div className='col-sm-8 key'>Email Address</div>
                <div className='col-sm-4 values'>{driver.email}</div>
            </div>
        </div>
    )
}

export default DriverDetails;