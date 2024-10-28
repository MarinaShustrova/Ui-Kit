import { useEffect, useState } from 'react'

export const useExpandedState = (isExpanded: boolean) => {
    const [expanded, setExpanded] = useState(isExpanded)

    useEffect(() => {
        setExpanded(isExpanded)
    }, [isExpanded])

    return {
        expanded,
        setExpanded,
    }
}
