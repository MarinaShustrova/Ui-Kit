import { useRef, useState } from 'react'
import { useEffectOnUpdate } from '../../../common/hooks'
import { OptionEqualityChecker, OptionsType, OptionType, CustomSelectProps } from '../../types'
import { deselectOptions, getSelectedOptions } from '../../utils'
import { useSelectMode } from '../use-select-mode'
import { checkOptionForMultipleMode, checkOptionForSingleMode, getOptionsFromProps } from './utils'
export const useOptionsState = ({
    options: optionsFromProps,
    type,
    onChange,
}: Pick<CustomSelectProps, 'onChange' | 'type' | 'options'>) => {
    const { isMultipleMode, isSingleMode } = useSelectMode(type)

    const [options, setOptions] = useState<OptionsType>(
        getOptionsFromProps(optionsFromProps, isSingleMode),
    )

    const [currentUpdatedOption, setCurrentUpdatedOption] = useState<OptionType>()

    const wasOptionsFromPropsUpdated = useRef(false)

    const updateCheckedOptions = (option: OptionType, comparator: OptionEqualityChecker) => {
        setCurrentUpdatedOption({
            ...option,
            checked: isMultipleMode ? !option.checked : true,
        })

        if (isSingleMode) {
            setOptions(checkOptionForSingleMode(options, option, comparator))
        }

        if (isMultipleMode) {
            setOptions(checkOptionForMultipleMode(options, option, comparator))
        }
    }

    const clearOptions = () => {
        setCurrentUpdatedOption(undefined)
        setOptions(deselectOptions(options))
    }

    useEffectOnUpdate(() => {
        wasOptionsFromPropsUpdated.current = true
        const newOptionsFromProps = getOptionsFromProps(optionsFromProps, isSingleMode)

        setOptions(newOptionsFromProps)
    }, [optionsFromProps])

    useEffectOnUpdate(() => {
        const checkedOptions = getSelectedOptions(options)

        if (wasOptionsFromPropsUpdated.current) {
            wasOptionsFromPropsUpdated.current = false
        } else {
            onChange?.(checkedOptions, currentUpdatedOption)
        }
    }, [options])

    return {
        options,
        clearOptions,
        updateCheckedOptions,
    }
}
