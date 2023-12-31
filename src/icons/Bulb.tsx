import * as React from 'react';

const Bulb = ({
    size = 50,
    strokeWidth = 2,
    color = 'currentColor',
    ...props
}) => (
    <svg
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M14.25 18v-1.125c0-1.36 1.479-2.645 2.438-3.563 1.351-1.292 2.062-3.028 2.062-5.062 0-3.75-2.987-6.75-6.75-6.75a6.731 6.731 0 00-6.75 6.75c0 1.961.741 3.815 2.063 5.063.953.9 2.437 2.189 2.437 3.562V18M10.5 22.5h3M9.75 20.25h4.5M12 18v-6" />
        <path d="M13.781 11.25S12.773 12 12 12c-.773 0-1.781-.75-1.781-.75" />
    </svg>
);

export default Bulb;
