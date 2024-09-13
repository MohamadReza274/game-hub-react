import {memo} from "react";


export const MenuIcon = memo(({className, ...props}: { className?: string }) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${className}`}
        fill="none"
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"/>
    </svg>)
});