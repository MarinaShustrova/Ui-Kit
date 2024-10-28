import { Text } from '../../../../text'
import { NotFoundLabelProps } from './types'
import styles from './styles.module.scss'

export const NotFoundLabel = ({ text }: NotFoundLabelProps) => (
    <li className={styles['label']}>
        <Text className={styles.text}>{text}</Text>
    </li>
)
