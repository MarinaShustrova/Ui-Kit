import { CustomSelectProps } from '../../types'

export const isControlledComponent = (
    searchValueFromProps: CustomSelectProps['searchValue'],
    { searchable }: Pick<CustomSelectProps, 'searchable'>,
): searchValueFromProps is string => searchable === true && typeof searchValueFromProps === 'string'
