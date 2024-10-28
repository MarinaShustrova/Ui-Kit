import cn from 'classnames'
import { FocusEvent, memo, useCallback, useId, useMemo, useRef, useState, useEffect } from 'react'
import { Position } from '../../types'
import { SelectBoxProps } from './types'
import { getListBoxPositions } from './utils'
import styles from './styles.module.scss'

export const SelectBox = memo(
    ({
        className,
        // listBoxWidth,
        listBoxAlignment,
        disabled,
        searchable,
        expanded,
        searchComponent,
        children,
        onBlur,
        onFocus,
    }: SelectBoxProps) => {
        const id = useId()
        const containerRef = useRef<HTMLDivElement>(null)

        const listBoxPositions = useMemo(
            () => getListBoxPositions(listBoxAlignment),
            [listBoxAlignment],
        )

        const [position, setPosition] = useState(listBoxPositions[0])
        const positionSide = position.split('-')[0]

        const handleChangePosition = useCallback((position: Position) => {
            setPosition(position)
        }, [])

        const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
            if (disabled) {
                return
            }
            onFocus?.(event)
        }

        const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            const isFocusOccurredOutOfSelectComponentTree =
                !event.currentTarget?.contains(event.relatedTarget) &&
                !document.getElementById(id)?.contains(event.relatedTarget)

            if (isFocusOccurredOutOfSelectComponentTree) {
                onBlur(event)
            }
        }

        useEffect(() => {
            if (expanded) {
                handleChangePosition(listBoxPositions[0])
            }
        }, [expanded, listBoxPositions, handleChangePosition])

        const wrapperClassName = cn(
            styles.wrapper,
            {
                [styles.disabled]: disabled,
                [styles.expanded]: expanded,
                [styles.searchable]: searchable,
            },
            className,
        )

        return (
            <div
                tabIndex={-1}
                ref={containerRef}
                className={wrapperClassName}
                onBlur={handleBlur}
                onFocus={handleFocus}
            >
                {searchComponent}

                {expanded && (
                    <div className={cn(styles.dropdown, styles[positionSide])} id={id}>
                        {children}
                    </div>
                )}
            </div>
        )
    },
)
