import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SwitchProps } from './types'

import { ReactComponent as CheckIcon } from '../assets/img/checkmark.svg'

export const Switch: React.FC<SwitchProps> = ({
    onChange,
    value = '',
    label = 'Согласован отказ по 115-Ф3',
}) => {
    const [state, setState] = useState<'enabled' | 'disabled'>('disabled')

    const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const slideWidth = e.currentTarget.clientWidth
        const clickPosition = e.nativeEvent.offsetX
        const midpoint = slideWidth / 2
        const newState = clickPosition < midpoint ? 'disabled' : 'enabled'

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
                        <div>
                            <CheckIcon className={`${styles.icon} ${styles.checkIcon}`} />
                        </div>
                    )}
                </div>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </div>
    )
}
