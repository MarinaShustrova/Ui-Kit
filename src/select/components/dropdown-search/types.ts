import { OptionType, CustomSelectProps } from '../../types'

type OptionalSearchProps = Pick<CustomSelectProps, 'id' | 'tip' | 'error' | 'label' | 'onFocus'> &
    Pick<OptionType, 'additionalLabel'>

type RequiredSearchProps = Required<
    Pick<
        CustomSelectProps,
        | 'expanded'
        | 'disabled'
        | 'searchable'
        | 'type'
        | 'options'
        | 'clearable'
        | 'onClear'
        | 'onClick'
    >
>

export type DropdownSearchProps = OptionalSearchProps &
    RequiredSearchProps & {
        value: string
        onChange: (value: string) => void
    }
