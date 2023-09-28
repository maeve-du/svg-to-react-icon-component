/// <reference types="react" />
import * as react from 'react'
import { SVGProps } from 'react'
import { GaleIcon, IconNode } from '../index'

// type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
// interface GaleIconProps extends SVGAttributes {
//   size?: string | number
//   absoluteStrokeWidth?: boolean
// }

declare const createGaleIcon: (iconName: string, iconNode: IconNode) => GaleIcon

declare const SvgGaleOIconCode: GaleIcon

declare const GaleOIconLayer: GaleIcon

declare const SvgGaleOIconMonitorMobile: GaleIcon

declare const SvgGaleOIconPaintbrush: GaleIcon

declare const SvgGaleOIconSunMoon: GaleIcon

declare const SvgGaleOIconThememode: GaleIcon

declare const SvgGaleOIconWand: GaleIcon

export {
  createGaleIcon,
  SvgGaleOIconCode as GaleOIconCode,
  GaleOIconLayer,
  SvgGaleOIconMonitorMobile as GaleOIconMonitorMobile,
  SvgGaleOIconPaintbrush as GaleOIconPaintbrush,
  SvgGaleOIconSunMoon as GaleOIconSunMoon,
  SvgGaleOIconThememode as GaleOIconThememode,
  SvgGaleOIconWand as GaleOIconWand,
}
