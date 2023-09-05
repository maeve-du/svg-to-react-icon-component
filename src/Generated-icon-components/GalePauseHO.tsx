import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGalePauseHO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    stroke='currentColor'
    {...props}>
    <path d='M15.75 5.25L15.75 18.75M8.25 5.25V18.75' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
export default SvgGalePauseHO
