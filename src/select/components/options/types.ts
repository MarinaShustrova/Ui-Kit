import { OptionType, CustomSelectProps } from '../../types'

export type RequiredOptionsProps = Required<
    Pick<CustomSelectProps, 'notFoundLabel' | 'options' | 'type' | 'searchable' | 'searchValue'>
>

export type SelectOptionsProps = RequiredOptionsProps & {
    footer?: JSX.Element
    onClick: (option: OptionType) => void
}
