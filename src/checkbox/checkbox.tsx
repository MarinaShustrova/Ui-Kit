import cn from 'classnames'
import { useRef } from 'react'
import { ReactComponent as Checkmark } from '../assets/img/Vector.svg'
import { ReactComponent as Minus } from '../assets/img/minus.svg'
import { Text } from '../text'
import { SIZES } from './constants'
import { CheckboxProps } from './types'
import styles from './styles.module.scss'

export const Checkbox = ({
    id,
    name,
    size = SIZES.LARGE,
    label,
    children,
    value,
    checked,
    indeterminate = false,
    disabled,
    onChange,
    className,
}: CheckboxProps) => {
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

    const labelContent = children || label

    return (
        <label
            htmlFor={id}
            className={cn(className, styles.checkbox, {
                [styles.checked]: checked || indeterminate,
                [styles.disabled]: disabled,
            })}
            onMouseDown={handleMouseDownOnLabel}
        >
            <span className={cn(styles.checkmark, styles[size])}>
                {indeterminate && <Minus className={styles.icon} />}
                {checked && !indeterminate && <Checkmark className={styles.icon} />}

                {!isPresentationalMode && (
                    <input
                        id={id}
                        name={name}
                        value={value}
                        ref={inputRef}
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={handleChange}
                        className={styles.input}
                    />
                )}
            </span>

            {labelContent && (
                <Text className={cn(styles.label, styles[size])} size={size}>
                    {labelContent}
                </Text>
            )}
        </label>
    )
}
