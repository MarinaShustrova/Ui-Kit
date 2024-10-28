import cn from 'classnames'
import { useRef } from 'react'
import { Text } from '../text'
import { SIZES } from './constants'
import { RadioProps } from './types'
import styles from './styles.module.scss'

export const Radio = ({
    id,
    name,
    size = SIZES.LARGE,
    label,
    value,
    checked,
    disabled,
    onChange,
    className,
}: RadioProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const isPresentationalMode = !onChange

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inputRef.current) {
            onChange?.(event, {
                value: inputRef.current.value,
                checked: inputRef.current.checked,
            })
        }
    }

    const handleMouseDownOnLabel = (event: React.MouseEvent<HTMLLabelElement>) => {
        if (isPresentationalMode) {
            event.preventDefault()
        }
    }

    return (
        <label
            htmlFor={id}
            onMouseDown={handleMouseDownOnLabel}
            className={cn(className, styles.radio, {
                [styles.checked]: checked,
                [styles.disabled]: disabled,
            })}
        >
            <span className={cn(styles.checkmark, styles[size])}>
                {checked && <span className={styles.dot} />}
                {!isPresentationalMode && (
                    <input
                        id={id}
                        name={name}
                        type="radio"
                        value={value}
                        ref={inputRef}
                        checked={checked}
                        disabled={disabled}
                        onChange={handleChange}
                        className={styles.input}
                    />
                )}
            </span>
            {label && (
                <Text className={cn(styles.label, styles[size])} size={size}>
                    {label}
                </Text>
            )}
        </label>
    )
}
