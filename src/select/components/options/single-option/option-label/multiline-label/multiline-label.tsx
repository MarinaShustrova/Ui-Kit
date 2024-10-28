import cn from 'classnames'
import { Text } from '../../../../../../text'
import { MultilineLabelProps } from './types'
import styles from './styles.module.scss'

export const MultilineLabel = ({
    weight,
    className,
    children,
    dataTestId,
}: MultilineLabelProps) => (
    <Text weight={weight} className={cn(styles.multiline, className)} dataTestId={dataTestId}>
        {children}
    </Text>
)
