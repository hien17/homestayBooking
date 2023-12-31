import * as React from 'react';

const Lung = ({
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
        <path d="M6.081 20C7.693 20 9 18.665 9 17.02V7.257C9 6.563 8.448 6 7.768 6c-.205 0-.405.052-.584.15l-.13.083C5.594 7.292 4.622 8.88 3.65 12.057c-.42 1.37-.636 2.962-.648 4.775-.012 1.675 1.261 3.054 2.877 3.161l.203.007h-.001Z" />
        <path d="M17.92 20C16.307 20 15 18.665 15 17.02V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824.42 1.37.636 2.962.648 4.775.012 1.675-1.261 3.054-2.878 3.161L17.92 20v0Z" />
        <path d="M9 12a3 3 0 0 0 3-3 3 3 0 0 0 3 3" />
        <path d="M12 4v5" />
    </svg>
);

export default Lung;
