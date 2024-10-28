import cn from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useSelectMode } from '../../hooks'
import { OptionType } from '../../types'
import { InfiniteList } from '../infinite-list'
import { useCustomSelectContext } from '../../select-context'
import { SingleOption } from './single-option'
import { SelectOptionsProps } from './types'
import { NotFoundLabel } from './not-found-label'
import styles from './styles.module.scss'

export const SelectOptions = memo(
    ({
        type,
        options,
        searchable,
        searchValue,
        notFoundLabel,
        footer,
        onClick,
    }: SelectOptionsProps) => {
        const { listboxId, setKeyboardFocusedOptionIndex } = useCustomSelectContext()

        const { isMultipleMode } = useSelectMode(type)

        const handleClick = (option: OptionType) => () => {
            onClick(option)
        }

        const parentRef = useRef<HTMLDivElement>(null)

        const [a11yFocused, setA11yFocused] = useState(false)
        const [a11yCurrentIndex, setA11yCurrentIndex] = useState<number | null>(null)

        const hasNotSearchResult = searchable && Boolean(searchValue.length) && !options.length

        const { measureElement, getVirtualItems, getTotalSize, scrollToIndex } = useVirtualizer({
            count: options.length,
            estimateSize: () => 45,
            getScrollElement: () => parentRef.current,
        })

        const items = getVirtualItems()

        useEffect(() => {
            if (a11yFocused && a11yCurrentIndex !== null) {
                scrollToIndex(a11yCurrentIndex)
                setKeyboardFocusedOptionIndex(a11yCurrentIndex)
            } else {
                setKeyboardFocusedOptionIndex(undefined)
            }
        }, [a11yCurrentIndex, a11yFocused, setKeyboardFocusedOptionIndex, scrollToIndex])

        const handleKeyDown = (event: React.KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                    setA11yCurrentIndex(prev => (prev !== null && prev > 0 ? prev - 1 : 0))
                    event.preventDefault()
                    break
                case 'ArrowDown':
                    setA11yCurrentIndex(prev =>
                        prev !== null && prev < options.length - 1 ? prev + 1 : options.length - 1,
                    )
                    event.preventDefault()
                    break
                case 'Enter':
                    if (a11yCurrentIndex !== null) {
                        onClick(options[a11yCurrentIndex])
                    }
                    event.preventDefault()
                    break
                default:
                    break
            }
        }

        const handleBlur = () => {
            setA11yFocused(false)
            setA11yCurrentIndex(null)
        }

        return (
            <div
                role="listbox"
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                tabIndex={0}
                onFocus={() => setA11yFocused(true)}
            >
                <div
                    className={cn(styles['list-wrapper'], {
                        [styles['with-footer']]: footer,
                    })}
                >
                    {hasNotSearchResult && notFoundLabel && (
                        <NotFoundLabel text={notFoundLabel} searchValue={''} />
                    )}
                    <InfiniteList
                        ref={parentRef}
                        className={cn({
                            [styles['no-padding']]: hasNotSearchResult && !notFoundLabel,
                        })}
                        topOffset={`${items[0]?.start}px`}
                        totalHeight={getTotalSize()}
                    >
                        {items.map(({ index }) => {
                            const option = options[index]

                            return (
                                <SingleOption
                                    hasA11yFocus={a11yCurrentIndex === index}
                                    key={index}
                                    option={option}
                                    onClick={handleClick(option)}
                                    searchable={searchable}
                                    searchValue={searchValue}
                                    showCheckbox={isMultipleMode}
                                    index={index}
                                    ref={measureElement}
                                    id={`${listboxId}-option-${index}`}
                                />
                            )
                        })}
                    </InfiniteList>

                    {footer && <div className={styles.footer}>{footer}</div>}
                </div>
            </div>
        )
    },
)
