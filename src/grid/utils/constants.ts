import { Breakpoint, SizeBreakpoint, DeviceBreakpoint } from '../types'
import { MediaQueryWidths } from './types'

export const SIZE_BREAKPOINT_WIDTHS: Record<SizeBreakpoint, MediaQueryWidths> = {
    xxs: { min: 320, max: 767.9 },
    xs: { min: 768, max: 1023.9 },
    s: { min: 1024, max: 1279.9 },
    m: { min: 1280, max: 1439.9 },
    l: { min: 1440, max: 1919.9 },
    xl: { min: 1920, max: 2559.9 },
    xxl: { min: 2560 },
}

export const SIZE_BREAKPOINTS_BY_DEVICE: Record<DeviceBreakpoint, SizeBreakpoint[]> = {
    mobile: ['xxs'],
    tablet: ['xs', 's'],
    desktop: ['m', 'l', 'xl', 'xxl'],
}

const DEVICE_BREAKPOINT_WIDTHS = Object.entries(SIZE_BREAKPOINTS_BY_DEVICE).reduce<
    Record<DeviceBreakpoint, MediaQueryWidths>
>((deviceBreakpointWidths, [deviceType, breakpoints]) => {
    const lowerBreakpoint = SIZE_BREAKPOINT_WIDTHS[breakpoints[0]]
    const upperBreakpoint = SIZE_BREAKPOINT_WIDTHS[breakpoints[breakpoints.length - 1]]

    deviceBreakpointWidths[deviceType as DeviceBreakpoint] = {
        min: lowerBreakpoint.min,
        max: upperBreakpoint.max,
    }

    return deviceBreakpointWidths
}, {} as Record<DeviceBreakpoint, MediaQueryWidths>)

export const MEDIA_QUERY_WIDTHS: Record<Breakpoint, MediaQueryWidths> = {
    ...SIZE_BREAKPOINT_WIDTHS,
    ...DEVICE_BREAKPOINT_WIDTHS,
}
