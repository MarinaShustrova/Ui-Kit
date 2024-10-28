import cn from 'classnames'
import { forwardRef } from 'react'
import { useCustomSelectContext } from '../../select-context'
import { InfiniteListProps } from './types'
import styles from './styles.module.scss'

export const InfiniteList = forwardRef<HTMLDivElement, InfiniteListProps>(
    ({ children, className, topOffset, totalHeight }, ref) => {
        const { listboxId } = useCustomSelectContext()

        return (
            <div className={styles['scroll']} ref={ref}>
                <div
                    style={{
                        height: totalHeight,
                    }}
                    className={styles['infinite-list-wrapper']}
                >
                    <ul
                        id={listboxId}
                        role="listbox"
                        style={{
                            transform: `translateY(${topOffset})`,
                        }}
                        className={cn(styles['infinite-list'], className)}
                    >
                        {children}
                    </ul>
                </div>
            </div>
        )
    },
)
