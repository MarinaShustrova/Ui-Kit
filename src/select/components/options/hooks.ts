import { useEffect, useState } from 'react'

export const useOptionsA11y = ({
    count,
    scrollToIndex,
}: {
    count: number
    scrollToIndex: (index: number) => void
}) => {
    const [hasA11yFocused, setHasA11yFocused] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    const handleEnter = () => {
        if (currentIndex !== null) {
            scrollToIndex(currentIndex)
        }
    }

    const handleArrowUp = () => {
        setCurrentIndex(prev => (prev !== null && prev > 0 ? prev - 1 : 0))
    }

    const handleArrowDown = () => {
        setCurrentIndex(prev => (prev !== null && prev < count - 1 ? prev + 1 : count - 1))
    }

    useEffect(() => {
        if (hasA11yFocused && currentIndex !== null) {
            scrollToIndex(currentIndex)
        }
    }, [currentIndex, hasA11yFocused, scrollToIndex])

    const resetFocus = () => {
        setCurrentIndex(null)
        setHasA11yFocused(false)
    }

    return {
        hasA11yFocused,
        setHasA11yFocused,
        currentIndex,
        handleEnter,
        handleArrowUp,
        handleArrowDown,
        resetFocus,
    }
}
