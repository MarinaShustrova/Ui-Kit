import cn from 'classnames'
import { Text } from '../../../text'
import { TipProps } from './types'
import styles from './styles.module.scss'

export const Tip = ({ className, error, children }: TipProps) => (
    <Text size="xsmall" className={cn(styles.tip, { [styles.error]: error }, className)}>
        {children}
    </Text>
)
