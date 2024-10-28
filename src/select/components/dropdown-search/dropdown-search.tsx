import cn from 'classnames'
import { useRef, forwardRef, FocusEvent, ChangeEvent, MouseEvent } from 'react'
import { Input } from '../../../input'
import { CustomIcon, IconPressEvent, InputRef } from '../../../input/types'
import { combineRefs } from '../../../common/utils/combine-refs'
import { useCustomSelectContext } from '../../select-context'
import { useSelectMode } from '../../hooks'
import { DropdownSearchProps } from './types'
import { Icon } from './icon'
import styles from './styles.module.scss'

export const DropdownSearch = forwardRef<InputRef, DropdownSearchProps>(
    (
        {
            id,
            tip,
            error,
            label,
            value,
            disabled,
            searchable,
            expanded,
            additionalLabel,
            type,
            options,
            clearable,
            onFocus,
            onClear,
            onClick,
            onChange,
            ...restProps
        },
        forwardedRef,
    ) => {
        const { activeOptionId, listboxId } = useCustomSelectContext()

        const inputRef = useRef<HTMLInputElement>(null)

        const { isMultipleMode, isSearchableMode, isSingleMode } = useSelectMode(type, searchable)

        const isExpandedSearchable = isSearchableMode && expanded

        const checkedOptions = options.filter(option => option.checked)
        const hasCheckedOptions = checkedOptions.length > 0

        const allOptionsDisabled = options.every(option => option.disabled)
        const hasCheckedNotDisabledOption = checkedOptions.some(option => !option.disabled)

        const hasCheckedNotDisabledOptionsInMultipleMode =
            isMultipleMode && hasCheckedOptions && hasCheckedNotDisabledOption

        const handleClick = (event: IconPressEvent | MouseEvent<HTMLInputElement>) => {
            if (disabled || isExpandedSearchable) {
                return
            }

            onClick(event)
        }

        const handleIconClick = (event: IconPressEvent) => {
            if (isExpandedSearchable) {
                onClick(event)
            } else {
                inputRef.current?.focus()
            }

            handleClick(event)
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (disabled || !isSearchableMode) {
                return
            }

            onChange(event.target.value)
        }

        const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
            if (disabled || (label && !isSearchableMode)) {
                return
            }

            onFocus?.(event)
        }

        const handleClear = () => {
            if (isMultipleMode && allOptionsDisabled) {
                return
            }

            onClear()
        }

        const isClearIconVisible =
            clearable &&
            expanded &&
            (isSearchableMode
                ? value.length !== 0 || hasCheckedNotDisabledOptionsInMultipleMode
                : (isSingleMode && hasCheckedOptions && !allOptionsDisabled) ||
                  hasCheckedNotDisabledOptionsInMultipleMode)

        const inputRightIcon: CustomIcon | undefined = !isClearIconVisible
            ? {
                  icon: (
                      <Icon
                          expanded={expanded}
                          disabled={disabled}
                          additionalLabel={additionalLabel}
                      />
                  ),
                  onIconPress: handleIconClick,
              }
            : undefined

        console.log('Input right icon :', inputRightIcon)

        return (
            <Input
                id={id}
                className={cn({
                    [styles.input]: !isSearchableMode && !value && label,
                })}
                clearable={clearable}
                isClearIconVisible={
                    (clearable && hasCheckedNotDisabledOptionsInMultipleMode) || undefined
                }
                tip={tip}
                error={error}
                label={label}
                value={value}
                ref={combineRefs(forwardedRef, inputRef)}
                disabled={disabled}
                readOnly={!isSearchableMode}
                autoComplete="off"
                rightIcon={inputRightIcon}
                role="combobox"
                aria-expanded={expanded}
                aria-autocomplete="none"
                aria-controls={listboxId}
                aria-activedescendant={activeOptionId}
                onFocus={handleFocus}
                onChange={handleChange}
                onClear={handleClear}
                onClick={handleClick}
                {...restProps}
            />
        )
    },
)

DropdownSearch.displayName = 'DropdownSearch'
