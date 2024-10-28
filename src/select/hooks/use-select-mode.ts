import { CustomSelectProps } from '../types'

export const useSelectMode = (
    type: CustomSelectProps['type'],
    searchable?: CustomSelectProps['searchable'],
) => ({
    isSingleMode: type === 'single',
    isMultipleMode: type === 'multiple',
    isSearchableMode: Boolean(searchable),
})
