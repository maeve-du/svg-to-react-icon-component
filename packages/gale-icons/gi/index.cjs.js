'use strict';

var react = require('react');

const createGaleIcon = (iconName, iconNode) => {
    const component = react.forwardRef(({ color = 'currentColor', size = '1.5rem', strokeWidth = 1.5, absoluteStrokeWidth, ...props }, ref) => {
        const isRem = typeof size === 'string' && size.endsWith('rem');
        const s = isRem ? parseFloat(size) * 16 : parseFloat(size);
        return react.createElement('svg', {
            ref,
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: color,
            width: size,
            height: size,
            strokeWidth: absoluteStrokeWidth ? (+strokeWidth * 24) / s : strokeWidth,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            ...props,
        }, [...iconNode.map(([tag, attrs]) => react.createElement(tag, attrs))]);
    });
    component.displayName = iconName;
    return component;
};

const SvgGaleOIconCode = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M14 4V7C14 8.10457 14.8954 9 16 9H19M10 17.2426L7.87868 15.1213L10 13M14 17.2426L16.1213 15.1213L14 13M7 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22Z',
        },
    ],
]);
// import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
// import { forwardRef, type SVGProps } from 'react'
// type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
// type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes
// export interface GaleIconProps extends SVGAttributes {
//   size?: string | number
//   absoluteStrokeWidth?: boolean
// }
// export type GaleIcon = ForwardRefExoticComponent<SVGAttributes & ComponentAttributes>
// const SvgGaleOIconCode = forwardRef<SVGSVGElement, GaleIconProps>(
//   ({ color = 'currentColor', size = '1.5rem', strokeWidth = 1.5, absoluteStrokeWidth, ...props }, ref) => {
//     const isRem = String(size).endsWith('rem')
//     const s = isRem ? parseFloat(String(size)) * 16 : parseFloat(String(size))
//     return (
//       <svg
//         ref={ref}
//         width={size}
//         height={size}
//         viewBox='0 0 24 24'
//         xmlns='http://www.w3.org/2000/svg'
//         fill='none'
//         stroke={color}
//         strokeWidth={absoluteStrokeWidth ? (+strokeWidth * 24) / s : strokeWidth}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         {...props}>
//         <path d='M14 4V7C14 8.10457 14.8954 9 16 9H19M10 17.2426L7.87868 15.1213L10 13M14 17.2426L16.1213 15.1213L14 13M7 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22Z' />
//       </svg>
//     )
//   },
// )
// export default SvgGaleOIconCode
// const SvgGaleOIconCode = CreateGaleIcon()

const GaleOIconLayer = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M19.9881 16.0032C20.73 16.3704 20.73 17.4285 19.9881 17.7957L12.7866 21.3599C12.2276 21.6366 11.5714 21.6366 11.0123 21.3599L3.81085 17.7957C3.06895 17.4285 3.06895 16.3704 3.81086 16.0032M19.9881 11.0032C20.73 11.3704 20.73 12.4285 19.9881 12.7957L12.7866 16.3599C12.2276 16.6366 11.5714 16.6366 11.0123 16.3599L3.81085 12.7957C3.06895 12.4285 3.06895 11.3704 3.81086 11.0032M12.7866 11.3599L19.9881 7.79573C20.73 7.42854 20.73 6.37043 19.9881 6.00325L12.7866 2.43906C12.2276 2.16236 11.5714 2.16236 11.0124 2.43906L3.81086 6.00325C3.06896 6.37043 3.06896 7.42854 3.81086 7.79573L11.0124 11.3599C11.5714 11.6366 12.2276 11.6366 12.7866 11.3599Z',
        },
    ],
]);
// import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
// import { forwardRef, type SVGProps } from 'react'
// type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
// type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes
// interface GaleIconProps extends Partial<SVGProps<SVGSVGElement>> {
//   size?: string | number
//   absoluteStrokeWidth?: boolean
// }
// export type GaleIcon = ForwardRefExoticComponent<SVGAttributes & ComponentAttributes>
// const SvgGaleOIconCode = forwardRef<SVGSVGElement, GaleIconProps>(
//   ({ color = 'currentColor', size = '1.5rem', strokeWidth = 1.5, absoluteStrokeWidth, ...props }, ref) => {
//     const isRem = String(size).endsWith('rem')
//     const s = isRem ? parseFloat(String(size)) * 16 : parseFloat(String(size))
//     return (
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         ref={ref}
//         width={size}
//         height={size}
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke={color}
//         strokeWidth={absoluteStrokeWidth ? (+strokeWidth * 24) / s : strokeWidth}
//         {...props}>
//         <path
//           d='M19.9881 16.0032C20.73 16.3704 20.73 17.4285 19.9881 17.7957L12.7866 21.3599C12.2276 21.6366 11.5714 21.6366 11.0123 21.3599L3.81085 17.7957C3.06895 17.4285 3.06895 16.3704 3.81086 16.0032M19.9881 11.0032C20.73 11.3704 20.73 12.4285 19.9881 12.7957L12.7866 16.3599C12.2276 16.6366 11.5714 16.6366 11.0123 16.3599L3.81085 12.7957C3.06895 12.4285 3.06895 11.3704 3.81086 11.0032M12.7866 11.3599L19.9881 7.79573C20.73 7.42854 20.73 6.37043 19.9881 6.00325L12.7866 2.43906C12.2276 2.16236 11.5714 2.16236 11.0124 2.43906L3.81086 6.00325C3.06896 6.37043 3.06896 7.42854 3.81086 7.79573L11.0124 11.3599C11.5714 11.6366 12.2276 11.6366 12.7866 11.3599Z'
//           strokeLinecap='round'
//           strokeLinejoin='round'
//         />
//       </svg>
//     )
//   },
// )
// export default SvgGaleOIconCode

const SvgGaleOIconMonitorMobile = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M21 8V6C21 3.79086 19.2091 2 17 2H6C3.79086 2 2 3.79086 2 6V14C2 16.2091 3.79086 18 6 18H11.5V22H8M2.00001 13H10M18.5 19H17.5M16 22H20C21.1046 22 22 21.1046 22 20V13C22 11.8954 21.1046 11 20 11H16C14.8954 11 14 11.8954 14 13V20C14 21.1046 14.8954 22 16 22Z',
        },
    ],
]);
// import * as React from 'react'
// import type { SVGProps } from 'react'
// const SvgGaleOIconMonitorMobile = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width='1.5rem'
//     height='1.5rem'
//     viewBox='0 0 24 24'
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     stroke='currentColor'
//     {...props}>
//     <path
//       d='M21 8V6C21 3.79086 19.2091 2 17 2H6C3.79086 2 2 3.79086 2 6V14C2 16.2091 3.79086 18 6 18H11.5V22H8M2.00001 13H10M18.5 19H17.5M16 22H20C21.1046 22 22 21.1046 22 20V13C22 11.8954 21.1046 11 20 11H16C14.8954 11 14 11.8954 14 13V20C14 21.1046 14.8954 22 16 22Z'
//       strokeWidth={1.5}
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// )
// export default SvgGaleOIconMonitorMobile

const SvgGaleOIconPaintbrush = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M18 5C19.1046 5 20 5.89543 20 7V9C20 10.1046 19.1046 11 18 11H12C10.8954 11 10 11.8954 10 13V15M5 7H17C17.5523 7 18 6.55228 18 6V4C18 3.44772 17.5523 3 17 3H5C4.44772 3 4 3.44772 4 4V6C4 6.55228 4.44772 7 5 7ZM9 21H11C11.5523 21 12 20.5523 12 20V16C12 15.4477 11.5523 15 11 15H9C8.44772 15 8 15.4477 8 16V20C8 20.5523 8.44772 21 9 21Z',
        },
    ],
]);
// import * as React from 'react'
// import type { SVGProps } from 'react'
// const SvgGaleOIconPaintbrush = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width='1.5rem'
//     height='1.5rem'
//     viewBox='0 0 24 24'
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     stroke='currentColor'
//     {...props}>
//     <path
//       d='M18 5C19.1046 5 20 5.89543 20 7V9C20 10.1046 19.1046 11 18 11H12C10.8954 11 10 11.8954 10 13V15M5 7H17C17.5523 7 18 6.55228 18 6V4C18 3.44772 17.5523 3 17 3H5C4.44772 3 4 3.44772 4 4V6C4 6.55228 4.44772 7 5 7ZM9 21H11C11.5523 21 12 20.5523 12 20V16C12 15.4477 11.5523 15 11 15H9C8.44772 15 8 15.4477 8 16V20C8 20.5523 8.44772 21 9 21Z'
//       strokeWidth={1.5}
//       strokeLinejoin='round'
//     />
//   </svg>
// )
// export default SvgGaleOIconPaintbrush

const SvgGaleOIconSunMoon = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M18.01 5.99L19.14 4.86M4.86 19.14L5.99 18.01M12 3.08V2M12 22V20.92M3.08 12H2M22 12H20.92M5.99 5.99L4.86 4.86M19.14 19.14L18.01 18.01M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12 9.76142 14.2386 12 17 12Z',
        },
    ],
]);
// import * as React from 'react'
// import type { SVGProps } from 'react'
// const SvgGaleOIconSunMoon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width='1.5rem'
//     height='1.5rem'
//     viewBox='0 0 24 24'
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     stroke='currentColor'
//     {...props}>
//     <path
//       d='M18.01 5.99L19.14 4.86M4.86 19.14L5.99 18.01M12 3.08V2M12 22V20.92M3.08 12H2M22 12H20.92M5.99 5.99L4.86 4.86M19.14 19.14L18.01 18.01M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12 9.76142 14.2386 12 17 12Z'
//       strokeWidth={1.5}
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// )
// export default SvgGaleOIconSunMoon

const SvgGaleOIconThememode = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M22 12C22 14.9488 20.7161 17.6169 18.67 19.4323 16.9047 21.0371 14.5677 22 12 22 6.48345 22 2 17.5166 2 12 2 6.48345 6.48345 2 12 2 14.5677 2 16.9047 2.96289 18.67 4.5677 20.7161 6.38315 22 9.05115 22 12ZM6 12C6 15.3099 8.69007 18 12 18V6C8.69007 6 6 8.69007 6 12Z',
        },
    ],
]);
// import * as React from 'react'
// import type { SVGProps } from 'react'
// const SvgGaleOIconThememode = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width='1.5rem'
//     height='1.5rem'
//     viewBox='0 0 24 24'
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     stroke='currentColor'
//     {...props}>
//     <path
//       d='M22 12C22 14.9488 20.7161 17.6169 18.67 19.4323 16.9047 21.0371 14.5677 22 12 22 6.48345 22 2 17.5166 2 12 2 6.48345 6.48345 2 12 2 14.5677 2 16.9047 2.96289 18.67 4.5677 20.7161 6.38315 22 9.05115 22 12ZM6 12C6 15.3099 8.69007 18 12 18V6C8.69007 6 6 8.69007 6 12Z'
//       strokeWidth={1.5}
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// )
// export default SvgGaleOIconThememode

const SvgGaleOIconWand = createGaleIcon('SvgGaleOIconCode', [
    [
        'path',
        {
            d: 'M18.364 8.46447L20.4853 6.34315C21.2663 5.5621 21.2663 4.29577 20.4853 3.51473C19.7042 2.73368 18.4379 2.73368 17.6568 3.51473L15.5355 5.63605M18.364 8.46447L6.34314 20.4853C5.56209 21.2663 4.29576 21.2663 3.51471 20.4853C2.73366 19.7042 2.73366 18.4379 3.51471 17.6569L5 16.1716M18.364 8.46447L15.5355 5.63605M15.5355 5.63605L8.80593 12.3656M8.5 2.73333L11 2L10.2667 4.5L11 7L8.5 6.26667L6 7L6.73333 4.5L6 2L8.5 2.73333ZM4.5 9.73333L7 9L6.26667 11.5L7 14L4.5 13.2667L2 14L2.73333 11.5L2 9L4.5 9.73333Z',
        },
    ],
]);
// import * as React from 'react'
// import type { SVGProps } from 'react'
// const SvgGaleOIconWand = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width='1.5rem'
//     height='1.5rem'
//     viewBox='0 0 24 24'
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     stroke='currentColor'
//     {...props}>
//     <path
//       d='M18.364 8.46447L20.4853 6.34315C21.2663 5.5621 21.2663 4.29577 20.4853 3.51473C19.7042 2.73368 18.4379 2.73368 17.6568 3.51473L15.5355 5.63605M18.364 8.46447L6.34314 20.4853C5.56209 21.2663 4.29576 21.2663 3.51471 20.4853C2.73366 19.7042 2.73366 18.4379 3.51471 17.6569L5 16.1716M18.364 8.46447L15.5355 5.63605M15.5355 5.63605L8.80593 12.3656M8.5 2.73333L11 2L10.2667 4.5L11 7L8.5 6.26667L6 7L6.73333 4.5L6 2L8.5 2.73333ZM4.5 9.73333L7 9L6.26667 11.5L7 14L4.5 13.2667L2 14L2.73333 11.5L2 9L4.5 9.73333Z'
//       strokeWidth={1.5}
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </svg>
// )
// export default SvgGaleOIconWand

exports.GaleOIconCode = SvgGaleOIconCode;
exports.GaleOIconLayer = GaleOIconLayer;
exports.GaleOIconMonitorMobile = SvgGaleOIconMonitorMobile;
exports.GaleOIconPaintbrush = SvgGaleOIconPaintbrush;
exports.GaleOIconSunMoon = SvgGaleOIconSunMoon;
exports.GaleOIconThememode = SvgGaleOIconThememode;
exports.GaleOIconWand = SvgGaleOIconWand;
