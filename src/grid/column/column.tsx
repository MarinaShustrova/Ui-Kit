import cn from 'classnames'
import { useMemo } from 'react'
import { ColumnGridProps } from './types'
import { createClassNames } from './utils'
import styles from './styles.module.scss'

export const Column = ({ width, offset, className, children }: ColumnGridProps) => {
    const columnClassNames = useMemo(
        () => createClassNames({ width, offset }, styles),
        [width, offset],
    )

    return <div className={cn(styles.column, columnClassNames, className)}>{children}</div>
}
