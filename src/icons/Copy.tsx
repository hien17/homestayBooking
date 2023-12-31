import * as React from 'react';

function Copy(props: any) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            stroke="#d3d3d3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
    );
}

export default Copy;
