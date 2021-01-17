import React from 'react';

import './loading-page.styles.css';

const LoadingPage = () => {
    return (
        <div className='d-flex flex-column align-items-center loading'>
            <div className='spinner-border spinner'></div>
            <div className='loading-text'>We are just getting your details...</div>
        </div>
            
    )
}

export default LoadingPage