import React, { useState, useRef } from 'react'
import gsap, { Linear } from 'gsap';

import CenteredLayout from '@/components/layout/CenteredLayout'

import styles from './slider.module.scss'

const Index = () => {

    const sliderRef = useRef(undefined);
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderColor, setSliderColor] = useState('sea-mist');

    const sliderColors = ['sea-mist', 'yellow-green', 'porsche', 'flamingo', 'monza']

    const handleChange = (event) => {
        const value = event.target.value;
        const index = Math.floor(value / (100 / sliderColors.length));

        setSliderValue(value);
        setSliderColor(sliderColors[index !== sliderColors.length ? index : sliderColors.length - 1]);
    };

    return (
        <CenteredLayout>
            <div className="flex flex-col items-center w-full font-nunito">
                <div className="text-sm font-tighter">
                    { sliderValue }%
                </div>
                <div className={`w-full flex items-center justify-center ${ styles.slider } ${ styles[sliderColor] }`}>
                    <input type="range" name="range-slider" min="0" max="100" value={ sliderValue } onChange={ handleChange } ref={ sliderRef } className="w-3/4" />
                </div>
            </div>
        </CenteredLayout>
    )
}

export default Index
