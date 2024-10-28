import { useEffect, useState } from 'react'
import { Breakpoint } from '../types'
import { MEDIA_QUERY_WIDTHS } from './constants'

const getMatchMedia = (breakpoint: Breakpoint) => {
    const { min, max } = MEDIA_QUERY_WIDTHS[breakpoint]

    const maxWidth = max !== undefined ? ` and (max-width: ${max}px)` : ''

    const minWidth = breakpoint === 'xxs' || breakpoint === 'mobile' ? 0 : min

    return window.matchMedia(`(min-width: ${minWidth}px)${maxWidth}`)
}

export const useMediaQuery = (breakpoint: Breakpoint) => {
    const [mediaQueryList, setMediaQueryList] = useState(getMatchMedia(breakpoint))

    const [matches, setMatches] = useState(mediaQueryList.matches)

    useEffect(() => {
        setMediaQueryList(getMatchMedia(breakpoint))
    }, [breakpoint])

    useEffect(() => {
        const handleMediaChange = (event: MediaQueryListEvent): void => {
            setMatches(event.matches)
        }

        mediaQueryList.addEventListener('change', handleMediaChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaChange)
        }
    }, [mediaQueryList])

    return matches
}
