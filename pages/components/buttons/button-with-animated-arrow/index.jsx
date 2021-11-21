import React, { useRef, useEffect, useState } from 'react';
import gsap, { Power1 } from 'gsap';

import Button from  '@/components/button/Button';
import CenteredLayout from '@/components/layout/CenteredLayout';
import ArrowRight from '@/components/ArrowRight';

import styles from './button.module.scss';

const Index = () => {
    const buttonRef = useRef(null);
    const [animation, setAnimation] = useState(undefined);

    useEffect(() => {
        let q = gsap.utils.selector(buttonRef);
        setAnimation(gsap.fromTo(q('svg'), { x:0 }, { x: '+=5', repeat: -1, yoyo: true, duration: 0.22, ease: Power1.easeInOut }).pause(0));
    }, [])

    const handleButtonEnter = () => {
        animation.restart();
    }

    const handleButtonLeave = () => {
        animation.pause(0);
    }

    return (
        <CenteredLayout>
            <div className="flex items-center justify-center text-center text-sm font-tighter">
                <div className="flex flex-col m-4">
                    <Button text="Hover to animate" afterText={ <ArrowRight classes="md::ml-4" /> } onMouseEnter={ handleButtonEnter } onMouseLeave={ handleButtonLeave } ref={ buttonRef } />
                    <p className="px-4 py-2">Animated using <a href="https://greensock.com/">GSAP</a></p>
                </div>
                <div className="flex flex-col m-4">
                    <Button text="Hover to animate" afterText={ <ArrowRight classes=":ml-4" /> } classes={` ${styles.animate } `} />
                    <p className="px-4 py-2">Animated using CSS</p>
                </div>
            </div>
        </CenteredLayout>
    )
}

export default Index;
