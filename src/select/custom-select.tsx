import { FocusEvent, MouseEvent, forwardRef, useCallback, useState, useMemo, useId } from 'react'
import { IconPressEvent, InputRef } from '../input/types'
import { useEffectOnUpdate, useCurrentValueRef } from '../common/hooks'
import { SelectOptions } from './components/options'
import { SelectBox } from './components/select-box'
import { DropdownSearch } from './components/dropdown-search'
import { NOT_FOUND_LABEL_TEXT } from './constants'
import { OptionsType, OptionType, CustomSelectProps } from './types'
import { useExpandedState, useSelectMode, useOptionsState } from './hooks'
import {
    compareSelectedOptions,
    searchOptions as defaultFilterOptions,
    getFormattedInputValue,
    getSingleCheckedAdditionalLabel,
} from './utils'
import { useSearchValue } from './hooks/use-search-value'
import { CustomSelectContextProvider } from './select-context'

export const CustomSelect = forwardRef<InputRef, CustomSelectProps>(
    (
        {
            id: idFromProps,
            tip,
            error,
            label,
            className,
            listBoxWidth,
            listBoxAlignment,
            type = 'single',
            disabled = false,
            clearable = true,
            searchable = false,
            notFoundLabel = NOT_FOUND_LABEL_TEXT,
            searchValue: initialSearchValue,
            options: initialOptions = [],
            expanded: isInitiallyExpanded = false,
            optionsFooter,
            onBlur,
            onFocus,
            onClear,
            onClick,
            onChange,
            onSearch,
            onAfterClose,
            onAfterOpen,
            filterOptions = defaultFilterOptions,
            optionSelectionComparator = compareSelectedOptions,
            ...restProps
        },
        forwardedRef,
    ) => {
        const generatedId = useId()
        const id = idFromProps || generatedId

        const { isSingleMode, isMultipleMode, isSearchableMode } = useSelectMode(type, searchable)

        const [isSearchFocused, setIsSearchFocused] = useState(false)
        const [isSearchTouched, setIsSearchTouched] = useState(false)

        const { expanded, setExpanded } = useExpandedState(isInitiallyExpanded)

        const formatLabel = useCallback(
            (options: OptionsType) =>
                getFormattedInputValue({
                    options,
                    searchValue: initialSearchValue,
                    searchable: isSearchableMode,
                    type,
                    expanded,
                }),
            [initialSearchValue, isSearchableMode, type, expanded],
        )

        useEffectOnUpdate(() => {
            if (expanded) {
                onAfterOpen?.()
            } else {
                if (isSearchTouched) {
                    setIsSearchTouched(false)
                }

                onAfterClose?.()
            }
        }, [expanded])

        const { options, clearOptions, updateCheckedOptions } = useOptionsState({
            options: initialOptions,
            type,
            onChange,
        })

        const {
            handleClearSearchValue: clearSearchField,
            searchValue,
            setSearchValue,
        } = useSearchValue({
            labelFromOptions: formatLabel(options),
            searchable: isSearchableMode,
            isMultipleMode,
            searchValue: initialSearchValue,
            isFocused: isSearchFocused,
            expanded,
            onSearch,
        })

        const filterOptionsRef = useCurrentValueRef(filterOptions)
        const filteredOptions = useMemo(
            () => (!isSearchTouched ? options : filterOptionsRef.current(options, searchValue)),
            [filterOptionsRef, isSearchTouched, options, searchValue],
        )

        const handleSearchBlur = (event: FocusEvent<HTMLInputElement>) => {
            setIsSearchFocused(false)
            setExpanded(false)
            onBlur?.(event)
        }

        const handleSearchClick = (event: MouseEvent<HTMLInputElement> | IconPressEvent) => {
            setExpanded(prevExpanded => !prevExpanded)
            onClick?.(event)
        }

        const handleOptionsClear = (event?: MouseEvent<HTMLButtonElement>) => {
            clearSearchField()
            clearOptions()
            setExpanded(isSearchableMode)
            onClear?.(event)
        }

        const handleOptionSelection = (option: OptionType) => {
            const { label, checked, disabled } = option

            if (disabled) {
                return
            }

            if (isSingleMode) {
                setExpanded(false)

                if (checked && !isSearchableMode) {
                    return
                }
            }

            if (!(isMultipleMode && isSearchableMode)) {
                setSearchValue(label)
                setIsSearchFocused(false)
            }

            updateCheckedOptions(option, optionSelectionComparator)
        }

        const handleInputChange = (value: string) => {
            setSearchValue(value, true)
            setExpanded(true)

            if (!isSearchTouched) {
                setIsSearchTouched(true)
            }
        }

        const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
            setIsSearchFocused(true)
            onFocus?.(event)
        }

        const hasNotFoundLabel = typeof notFoundLabel === 'string' && notFoundLabel.length > 0

        const isOptionsExpanded =
            !disabled && expanded && (hasNotFoundLabel || filteredOptions.length > 0)

        const searchField = (
            <DropdownSearch
                id={`${id}-input`}
                tip={tip}
                error={error}
                label={label}
                expanded={isOptionsExpanded}
                searchable={isSearchableMode}
                additionalLabel={getSingleCheckedAdditionalLabel(options)}
                value={searchValue}
                ref={forwardedRef}
                disabled={disabled}
                type={type}
                options={options}
                clearable={clearable}
                onFocus={handleInputFocus}
                onChange={handleInputChange}
                onClear={handleOptionsClear}
                onClick={handleSearchClick}
                {...restProps}
            />
        )

        return (
            <CustomSelectContextProvider id={id}>
                <SelectBox
                    disabled={disabled}
                    searchable={isSearchableMode}
                    expanded={isOptionsExpanded}
                    className={className}
                    listBoxWidth={listBoxWidth}
                    listBoxAlignment={listBoxAlignment}
                    onBlur={handleSearchBlur}
                    onFocus={onFocus}
                    searchComponent={searchField}
                >
                    <SelectOptions
                        type={type}
                        options={filteredOptions}
                        footer={optionsFooter}
                        searchable={isSearchableMode}
                        searchValue={!isSearchTouched ? '' : searchValue.toLowerCase()}
                        notFoundLabel={notFoundLabel}
                        onClick={handleOptionSelection}
                    />
                </SelectBox>
            </CustomSelectContextProvider>
        )
    },
)
CustomSelect.displayName = 'CustomSelect'
