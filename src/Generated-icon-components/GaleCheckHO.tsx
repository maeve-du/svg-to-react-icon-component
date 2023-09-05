import * as React from 'react'
import type { SVGProps } from 'react'
const SvgGaleCheckHO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    className='w-6 h-6'
    stroke='currentColor'
    {...props}>
    <path d='M4.5 12.75L10.5 18.75L19.5 5.25' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
export default SvgGaleCheckHO
