import { forwardRef, RefAttributes, ForwardRefExoticComponent, createElement } from 'react'
import type { ReactSVG, SVGProps } from 'react'

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][]
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes

export interface GaleIconProps extends SVGAttributes {
  size?: string | number
  absoluteStrokeWidth?: boolean
}

export type GaleIcon = ForwardRefExoticComponent<SVGAttributes & ComponentAttributes>

const createGaleIcon = (iconName: string, iconNode: IconNode) => {
  const component = forwardRef<SVGSVGElement, GaleIconProps>(
    ({ color = 'currentColor', size = '1.5rem', strokeWidth = 1.5, absoluteStrokeWidth, ...props }, ref) => {
      const isRem = typeof size === 'string' && size.endsWith('rem')
      const s = isRem ? parseFloat(size as string) * 16 : parseFloat(size as string)

      return createElement(
        'svg',
        {
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
        },
        [...iconNode.map(([tag, attrs]) => createElement(tag, attrs))],
      )
    },
  )
  component.displayName = iconName

  return component
}

export default createGaleIcon
