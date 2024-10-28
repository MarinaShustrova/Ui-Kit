import { CustomSelectProps } from '../../types'

type OptionalBoxProps = Pick<
    CustomSelectProps,
    'className' | 'listBoxWidth' | 'onFocus' | 'listBoxAlignment'
>

type RequiredBoxProps = Required<
    Pick<CustomSelectProps, 'expanded' | 'searchable' | 'disabled' | 'onBlur'>
>

export type SelectBoxProps = OptionalBoxProps &
    RequiredBoxProps & {
        children: JSX.Element
        searchComponent: JSX.Element
    }
