import { OptionEqualityChecker, OptionsType, OptionType } from '../../types'

/**
 * Формирует новый массив из опций которые приходят в пропсах.
 */
export const getOptionsFromProps = (options: OptionsType, isSingleMode: boolean) => {
    if (!isSingleMode) {
        return options
    }

    let alreadyHaveCheckedOption = false

    return options.map(optionFromProps => {
        let isCheckedOption = Boolean(optionFromProps.checked)

        /*  Для single-режима пытаемся найти первую выбранную опцию и сбросить все остальные */
        if (isCheckedOption) {
            if (alreadyHaveCheckedOption) {
                isCheckedOption = false
            } else {
                alreadyHaveCheckedOption = true
            }
        }

        return {
            ...optionFromProps,
            checked: isCheckedOption,
        }
    })
}

/**
 * Отмечает выбранную опцию в массиве опций, в режиме single.
 */
export const checkOptionForSingleMode = (
    options: OptionsType,
    changedOption: OptionType,
    comparator: OptionEqualityChecker,
) =>
    options.map(option => ({
        ...option,
        checked: comparator(option, changedOption, options),
    }))

/**
 * Отмечает выбранную опцию в массиве опций, в режиме multiple.
 */
export const checkOptionForMultipleMode = (
    options: OptionsType,
    changedOption: OptionType,
    comparator: OptionEqualityChecker,
) =>
    options.map(option => {
        const { checked } = option

        return {
            ...option,
            checked: comparator(option, changedOption, options) ? !checked : checked,
        }
    })
