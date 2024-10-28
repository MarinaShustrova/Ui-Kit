import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SwitchSliderProps } from './types'
import { ReactComponent as CheckIcon } from '../assets/img/checkmark.svg'
import { ReactComponent as MarkIcon } from '../assets/img/mark.svg'

export const SwitchSlider: React.FC<SwitchSliderProps> = ({
    initialState = 'neutral',
    onChange,
    value = '',
    label = 'Согласован отказ по 115-Ф3',
}) => {
    const [state, setState] = useState<'enabled' | 'disabled' | 'neutral'>(initialState)

    const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const sliderWidth = e.currentTarget.clientWidth
        const clickPosition = e.nativeEvent.offsetX
        const thirdOfWidth = sliderWidth / 3

        let newState: 'enabled' | 'disabled' | 'neutral'

        if (clickPosition < thirdOfWidth) {
            newState = 'disabled'
        } else if (clickPosition < 2 * thirdOfWidth) {
            newState = 'neutral'
        } else {
            newState = 'enabled'
        }

        setState(newState)

        if (onChange) {
            onChange(e as unknown as React.ChangeEvent<HTMLInputElement>, {
                value,
                checked: newState === 'enabled',
            })
        }
    }

    return (
        <div className={styles.switchWrapper}>
            <div className={`${styles.slider} ${styles[state]}`} onClick={handleDrag}>
                <div className={`${styles.toggleThumb} ${styles[state]}`}>
                    {state === 'enabled' && (
                        <div className={styles.iconWrapper}>
                            <CheckIcon className={`${styles.icon} ${styles.checkIcon}`} />
                        </div>
                    )}
                    {state === 'disabled' && (
                        <div className={styles.iconWrapper}>
                            <MarkIcon className={`${styles.icon} ${styles.markIcon}`} />
                        </div>
                    )}
                </div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    )
}
