import cn from 'classnames'
import { GridRowProps } from './types'
import styles from './styles.module.scss'

export const Row = ({ className, children }: GridRowProps) => (
    <div className={cn(styles.row, className)}>{children}</div>
)
