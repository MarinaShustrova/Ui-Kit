import { useCallback, useEffect, useState } from 'react'
import { useCurrentValueRef } from '../../../common/hooks'
import { CustomSelectProps } from '../../types'
import { isControlledComponent } from './utils'

export const useSearchValue = ({
    labelFromOptions,
    searchValue: searchValueFromProps,
    searchable,
    isFocused,
    onSearch,
    expanded,
    isMultipleMode,
}: Pick<CustomSelectProps, 'searchValue' | 'searchable' | 'onSearch' | 'expanded'> & {
    labelFromOptions: string
    isFocused: boolean
    isMultipleMode: boolean
}) => {
    const isControlled = isControlledComponent(searchValueFromProps, {
        searchable,
    })

    const [searchValue, setSearchValue] = useState(
        isControlled ? searchValueFromProps : labelFromOptions,
    )

    const onSearchRef = useCurrentValueRef(onSearch)

    const handleChangeSearchValue = useCallback(
        (value: string, wasInputValueChanged = false) => {
            if (value !== searchValueFromProps && wasInputValueChanged) {
                onSearchRef.current?.(value)
            }

            if (!isControlled) {
                setSearchValue(value)
            }
        },
        [isControlled, onSearchRef, searchValueFromProps],
    )

    const handleClearSearchValue = useCallback(() => {
        if (!searchable) {
            return
        }

        setSearchValue('')
    }, [searchable])

    useEffect(() => {
        if (expanded && isMultipleMode && searchable && !isControlled) {
            setSearchValue('')
        }

        if (!expanded && isMultipleMode && searchable) {
            setSearchValue(labelFromOptions)
        } else if (isControlled) {
            setSearchValue(searchValueFromProps)
        } else if (!(searchable && isFocused)) {
            setSearchValue(labelFromOptions)
        }
    }, [labelFromOptions, searchValueFromProps, searchable, isControlled, expanded])

    return {
        searchValue,
        setSearchValue: handleChangeSearchValue,
        handleClearSearchValue,
    }
}
