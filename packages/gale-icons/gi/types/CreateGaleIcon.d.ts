import React, { RefAttributes, ForwardRefExoticComponent } from 'react';
import type { ReactSVG, SVGProps } from 'react';
export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
export interface GaleIconProps extends SVGAttributes {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
}
export type GaleIcon = ForwardRefExoticComponent<SVGAttributes & ComponentAttributes>;
declare const createGaleIcon: (iconName: string, iconNode: IconNode) => React.ForwardRefExoticComponent<Omit<GaleIconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default createGaleIcon;
