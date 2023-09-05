import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGaleCalendarHO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    stroke='currentColor'
    {...props}>
    <path
      d='M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
export default SvgGaleCalendarHO
