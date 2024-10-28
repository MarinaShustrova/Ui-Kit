import { OptionsType, OptionType, CustomSelectProps } from './types'
import { SELECT_TYPES } from './constants'

/**
 * Форматирует и возвращает строку, которая будет отображаться в поле ввода селектора.
 *
 * Логика различается в зависимости от типа селектора (например, MULTIPLE или SINGLE),
 * а также от того, является ли поле поисковым (searchable) и развернутым (expanded).
 *
 * - В режиме MULTIPLE и если поле поисковое, возвращается либо пустая строка, либо количество выбранных опций.
 * - Если выбрано одно значение, оно отображается в поле.
 * - В режиме SINGLE возвращается либо введенное пользователем значение, либо метка выбранной опции.
 *
 * @param options - список всех доступных опций
 * @param searchValue - текущее значение поиска, если поле поисковое
 * @param selectType - тип селектора (например, MULTIPLE)
 * @param searchable - флаг, указывающий, доступен ли поиск
 * @param expanded - флаг, указывающий, открыт ли выпадающий список
 * @returns строка, которая должна отображаться в поле ввода
 */
export const getFormattedInputValue = ({
    options,
    searchValue,
    type: selectType,
    searchable,
    expanded,
}: Pick<
    CustomSelectProps,
    'options' | 'type' | 'searchValue' | 'searchable' | 'expanded'
>): string => {
    if (selectType === SELECT_TYPES.MULTIPLE) {
        if (searchable) {
            if (expanded) {
                return ''
            }

            const selectedCount = options.filter(({ checked }) => checked).length

            if (selectedCount === 1) {
                return options.find(({ checked }) => checked)?.label || ''
            }

            return selectedCount ? `Выбрано: ${selectedCount}` : ''
        }

        return options
            .filter(({ checked }) => checked)
            .map(({ label }) => label)
            .join(', ')
    }

    if (searchable && searchValue !== undefined) {
        return searchValue
    }

    return options.find(({ checked }) => checked)?.label || ''
}

/**
 * Возвращает новый массив опций, где все опции, которые не отключены, будут сброшены в состояние "не выбраны".
 *
 * Это полезно, когда нужно сбросить все выбранные опции в селекторе, но оставить выбранными только те,
 * которые отключены (так как они не могут быть изменены пользователем).
 *
 * @param options - список всех доступных опций
 * @returns новый массив опций с обновленным состоянием выбора (checked)
 */
export const deselectOptions = (options: OptionsType) =>
    options.map(option => ({
        ...option,
        checked: option.disabled ? option.checked : false,
    }))

/**
 * Возвращает массив всех выбранных опций (тех, которые имеют свойство `checked: true`).
 *
 * Этот метод используется для получения всех текущих выбранных элементов в селекторе.
 *
 * @param options - список всех доступных опций
 * @returns массив выбранных опций
 */
export const getSelectedOptions = (options: OptionsType) => options.filter(({ checked }) => checked)

/**
 * Возвращает дополнительный лейбл для единственной выбранной опции, если он существует.
 *
 * Если выбрана только одна опция и у неё есть дополнительная метка (additionalLabel), эта метка возвращается.
 * Это используется для отображения дополнительной информации о выбранной опции в интерфейсе.
 *
 * @param options - список всех доступных опций
 * @returns строка с дополнительной меткой, если она существует, или undefined
 */
//@ts-ignore
export const getSingleCheckedAdditionalLabel = (options: OptionsType) => {
    const additionalLabels = getSelectedOptions(options).map(
        ({ additionalLabel }) => additionalLabel,
    )

    const firstLabel = additionalLabels[0]

    if (additionalLabels.length === 1 && firstLabel) {
        return firstLabel
    }
}

/**
 * Производит фильтрацию опций на основе введенного пользователем текста в режиме поиска.
 *
 * Метод ищет опции, у которых метка (label) соответствует значению поиска. Опции, которые имеют
 * контент (content), игнорируются.
 *
 * @param options - список всех доступных опций
 * @param searchValue - строка поиска, введенная пользователем
 * @returns массив отфильтрованных опций, которые соответствуют поисковому запросу
 */
export const searchOptions = (options: OptionType[], searchValue: string) =>
    options.filter(
        ({ label, content }) => !content && label.toLowerCase().includes(searchValue.toLowerCase()),
    )

/**
 * Сравнивает две опции по метке (label) и возвращает true, если метки совпадают.
 *
 * Это полезно для сравнения выбранных опций при обновлении состояния селектора, чтобы убедиться,
 * что выбор действительно изменился.
 *
 * @param option - первая опция для сравнения
 * @param selectedOption - вторая опция для сравнения
 * @returns true, если метки опций совпадают, иначе false
 */
export const compareSelectedOptions = (option: OptionType, selectedOption: OptionType) =>
    option.label === selectedOption.label
