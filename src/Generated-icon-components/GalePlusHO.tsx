import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGalePlusHO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    stroke='currentColor'
    {...props}>
    <path d='M12 4.5V19.5M19.5 12L4.5 12' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
export default SvgGalePlusHO
