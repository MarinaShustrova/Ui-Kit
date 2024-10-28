import cn from 'classnames'
import { ReactComponent as Checkmark } from '../../../../assets/img/galka.svg'
import { Text } from '../../../../text'
import { IconProps } from './types'
import styles from './styles.module.scss'

export const Icon = ({ disabled, expanded, additionalLabel }: IconProps) => {
    return (
        <>
            {additionalLabel && (
                <Text
                    className={cn(styles['additional-option-label'], {
                        [styles.disabled]: disabled,
                    })}
                >
                    {additionalLabel}
                </Text>
            )}

            <Checkmark
                className={cn(styles['chevron-icon'], {
                    [styles.expanded]: expanded,
                    [styles.disabled]: disabled,
                })}
            />
        </>
    )
}
