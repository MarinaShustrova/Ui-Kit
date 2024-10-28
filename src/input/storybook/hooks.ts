import { ChangeEvent, useState } from 'react'
import { IconPressEvent, InputProps } from '../types'

export const useInputState = (props: Pick<InputProps, 'onChange' | 'onClear' | 'value'> = {}) => {
    const { value: inputValue = '', onChange, onClear } = props

    const [value, setValue] = useState(inputValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChange?.(event)
    }

    const handleClear = (event: IconPressEvent) => {
        setValue('')
        onClear?.(event)
    }

    return {
        value,
        handleChange,
        handleClear,
    }
}
