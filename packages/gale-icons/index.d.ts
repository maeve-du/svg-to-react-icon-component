import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
export * from './hi'
export * from './gi'

export interface GaleIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
  absoluteStrokeWidth?: boolean
}

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][]

// export interface GaleIconProps extends SVGProps<SVGSVGElement> {}

// export type GaleIcon = RefAttributes<SVGSVGElement> & Partial<SVGProps<SVGSVGElement>>
// export type GaleIcon = SVGSVGElement & GaleIconProps
export type GaleIcon = ForwardRefExoticComponent<Omit<GaleIconProps, 'ref'> & RefAttributes<SVGSVGElement>>
