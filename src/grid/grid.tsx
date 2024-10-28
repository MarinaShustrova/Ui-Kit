import cn from 'classnames'
import { GridProps } from './types'
import styles from './styles.module.scss'

export const Grid = ({ className, children }: GridProps) => (
    <div className={cn(styles.grid, className)}>{children}</div>
)
