import { SELECT_TYPES } from './constants'
import type { IconPressEvent, InputProps } from '../input/types'
import type { MouseEvent, ReactNode } from 'react'
import { POSITIONS } from './constants'

export type Alignment = 'start' | 'end'
export type Side = 'top' | 'right' | 'bottom' | 'left'

export type Position = (typeof POSITIONS)[keyof typeof POSITIONS]

type Values<T> = T[keyof T]

export type SelectType = Values<typeof SELECT_TYPES>

export type OptionEqualityChecker = (
    currentOption: OptionType,
    selectedOption: OptionType,
    options: OptionsType,
) => boolean

export type CustomSelectProps = {
    /**
     * Указывает тип выпадающего списка
     *
     * @default single
     */
    type?: SelectType
    /**
     * Список доступных для выбора опций
     */
    options: OptionsType
    /**
     * Функция для сравнения опций (опционально).
     * По умолчанию производится сравнение по значению лейбла.
     */
    optionSelectionComparator?: OptionEqualityChecker
    /**
     * Управление возможностью ввода текста для поиска опций
     *
     * @default false
     */
    searchable?: boolean
    /**
     * Текст, который отображается, если нет совпадений при поиске
     */
    notFoundLabel?: string | null
    /**
     * Позволяет очищать выбранные опции с помощью специальной кнопки
     *
     * Не применяется в режиме "searchable"
     *
     * @default true
     */
    clearable?: boolean
    /**
     * Значение, отображаемое в поле ввода
     *
     * Показывается только в режиме "searchable". Для управления значением нужно подписаться на событие `onSearch`.
     */
    searchValue?: string
    /**
     * Управляет видимостью списка опций
     *
     * @default false
     */
    expanded?: boolean
    /**
     * Содержимое футера для списка опций
     */
    optionsFooter?: JSX.Element
    /**
     * Ширина списка опций в пикселях
     */
    listBoxWidth?: number
    /**
     * Выравнивание выпадающего списка опций
     */
    listBoxAlignment?: Alignment | 'center'
    /**
     * Обработчик, который вызывается при вводе текста для поиска опций
     *
     * Необходимо передавать `searchValue` для подписки на событие.
     */
    onSearch?: (value: string) => void
    /**
     * Обработчик, который вызывается при выборе опции из списка
     */
    onChange?: (options: OptionsType, changedOption?: OptionType) => void
    /**
     * Обработчик, который вызывается при нажатии на кнопку очистки
     */
    onClear?: (event?: MouseEvent<HTMLButtonElement>) => void
    /**
     * Обработчик, который вызывается после открытия
     */
    onAfterOpen?: () => void
    /**
     * Обработчик, который вызывается после закрытия
     */
    onAfterClose?: () => void
    /**
     * Обработчик, который вызывается при клике или нажатии клавиши Enter в поле ввода
     */
    onClick?: (event: MouseEvent<HTMLInputElement> | IconPressEvent) => void
    /**
     * Функция фильтрации опций в режиме "searchable".
     *
     * Используется для поиска по содержимому свойства `content` в опциях.
     *
     * По умолчанию фильтрация происходит только по свойству `label`.
     */
    filterOptions?: (options: OptionType[], searchValue: string) => OptionType[]
} & Pick<
    InputProps,
    'id' | 'tip' | 'error' | 'label' | 'disabled' | 'className' | 'onBlur' | 'onFocus'
>

// Описание типа опции
export type OptionType = {
    /**
     * Текст лейбла опции, который отображается в поле ввода
     *
     * Если поле `content` не указано, этот текст используется как основное содержимое опции в списке.
     * Отображается в поле ввода при выборе опции.
     */
    label: string
    /**
     * Содержимое дополнительного лейбла опции
     *
     * Если поле `content` не указано, используется как дополнительное содержимое опции в списке.
     */
    additionalLabel?: ReactNode
    /**
     * Содержимое опции
     *
     * Для выделения текста в режиме "searchable" необходимо самостоятельно изменить отображение найденного текста.
     * При выборе опции с контентом в поле ввода отображается значение `label`.
     */
    content?: ReactNode
    /**
     * Значение опции
     */
    value?: string
    /**
     * Управление состоянием выбора опции
     */
    checked?: boolean
    /**
     * Управление состоянием отключения опции
     */
    disabled?: boolean
}

// Тип для массива опций
export type OptionsType = Array<OptionType>
