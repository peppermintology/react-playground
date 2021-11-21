import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power1 } from 'gsap';

const ProgressBar = ({ containerBg, fillerBg, fillTo, classes, before, after }) => {
    useEffect(() => {
        gsap.to('.filler', { width: `${ fillTo }%`, duration: 1, ease: Power1.easeOut });
    }, [fillTo]);

    const containerStyles = {
        backgroundColor: containerBg,
    }

    const fillerStyles = {
        height: '100%',
        backgroundColor: fillerBg ? fillerBg : 'red',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <>
            <div style={ containerStyles } className={`container ${ classes }`}>
                { before }
                <div style={ fillerStyles } className="filler"></div>
                { after }
            </div>
        </>
    )
}

export default ProgressBar
