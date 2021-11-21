import React from 'react'

const ArrowRight = ({ classes }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${ classes }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </>
    )
}

export default ArrowRight
