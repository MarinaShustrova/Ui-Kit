import { ChangeEvent, useState } from 'react'
import { IconPressEvent, TopBorderLabelInputProps } from '../types'

export const useIsState = (
    props: Pick<TopBorderLabelInputProps, 'onChange' | 'onClear' | 'value'> = {},
) => {
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
