import React from 'react'

const Button = React.forwardRef(({ onMouseEnter, onMouseLeave, onClick, text, beforeText, afterText, classes }, ref) => (
    <button onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } onClick={ onClick } ref={ ref }
        className={ `flex flex-wrap justify-center md:justify-between px-4 py-3 rounded-md text-white tracking-tight font-montserrat font-semibold text-sm bg-mantis-500 hover:opacity-80 transition duration-500 ease-in-out border-b-2 border-mantis-700 ${ classes ? classes : '' }` }>
        { beforeText }
        <span>{ text }</span>
        { afterText }
    </button>
));

Button.displayName = 'Button'
export default Button
