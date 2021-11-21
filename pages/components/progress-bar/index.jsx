import React, { useState, useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';

import Button from '@/components/button/Button';
import CenteredLayout from '@/components/layout/CenteredLayout';
import ProgressBar from '@/components/ProgressBar';
import Refresh from '@/components/Refresh';

const Index = () => {
    const buttonRef = useRef(undefined);
    const [q, setQ] = useState(undefined);
    const [animation, setAnimation] = useState(undefined);
    const [fillTo, setFillTo] = useState(Math.round(Math.random() * 100 + 1));

    useEffect(() => {
        let q = gsap.utils.selector(buttonRef);
        setQ(q);
        setAnimation(gsap.to(q('svg'), { rotate: '+=360', repeat: -1, duration: 1, ease: Linear.easeNone }).pause(0));
    }, [])

    const handleButtonEnter = () => {
        animation.restart();
    }

    const handleButtonLeave = () => {
        animation.pause();
    }

    const handleClick = () => {
        setFillTo(Math.round(Math.random() * 100 + 1));
    }

    return (
        <CenteredLayout>
            <ProgressBar
                containerBg="#E0E0DE"
                fillerBg="#69CF61" 
                fillTo={ fillTo } 
                classes="w-3/4 h-2 rounded-md"
                after={ <Button text="Click to animate" onMouseEnter={ handleButtonEnter } onMouseLeave={ handleButtonLeave } onClick={ handleClick } classes="mt-8 mx-auto" afterText={ <Refresh classes="ml-4" /> } ref={ buttonRef } /> }
            />
        </CenteredLayout>
    )
}

export default Index
