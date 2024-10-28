import React, {
    MouseEvent,
    FocusEvent,
    ChangeEvent,
    KeyboardEvent,
    ClipboardEvent,
    AriaAttributes,
} from 'react'
import { INPUT_TYPES } from './constants'

export type IconPressEvent = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>

export type InputRef = { focus: () => void }

type Values<T> = T[keyof T]
export type InputType = Values<typeof INPUT_TYPES>

export type CustomIcon = {
    /**
     * Иконка, которая отображается рядом с полем ввода
     */
    icon: JSX.Element
    /**
     * Автоматическое скрытие иконки, если нет взаимодействия с полем
     */
    autoHide?: boolean
    /**
     * Срабатывает, когда пользователь кликает или нажимает Enter на иконке
     */
    onIconPress?: (event: IconPressEvent) => void
    /**
     * Срабатывает при наведении мыши на иконку
     */
    onIconMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void
    /**
     * Срабатывает, когда курсор уходит с иконки
     */
    onIconMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void
    /**
     * Срабатывает, когда иконка получает фокус
     */
    onIconFocus?: (event: FocusEvent<HTMLButtonElement>) => void
    /**
     * Срабатывает, когда фокус уходит с иконки
     */
    onIconBlur?: (event: FocusEvent<HTMLButtonElement>) => void
}

export type InputProps = {
    /**
     * Определяет тип поля ввода (например, текст, число и т.д.)
     */
    type?: InputType
    /**
     * Значение, которое отображается в поле ввода
     */
    value?: string | number
    /**
     * Текст метки, которая будет отображена рядом с полем ввода
     */
    label?: string
    /**
     * Дополнительная подсказка, которая отображается под полем
     */
    tip?: React.ReactNode
    /**
     * Устанавливает поле как обязательное для заполнения
     */
    required?: boolean
    /**
     * Деактивирует поле, делая его неактивным для редактирования
     */
    disabled?: boolean
    /**
     * Отображает иконку для очистки поля
     */
    clearable?: boolean
    /**
     * Управляет ручным отображением иконки очистки поля (не по умолчанию)
     */
    isClearIconVisible?: boolean
    /**
     * Позволяет задать состояние ошибки для стилизации и вывода подсказок
     */
    error?: boolean
    /**
     * Уникальный идентификатор для поля ввода
     */
    id?: string
    /**
     * Имя поля ввода, используемое при отправке формы
     */
    name?: string
    /**
     * Максимально допустимое количество символов для ввода
     */
    maxLength?: number
    /**
     * Текст, который отображается в поле ввода, когда оно пустое
     */
    placeholder?: string
    /**
     * Семантический атрибут для обозначения роли поля
     */
    role?: string
    /**
     * Иконка, которая размещается слева от текста в поле ввода
     */
    leftIcon?: CustomIcon
    /**
     * Иконка, которая размещается справа от текста в поле ввода
     */
    rightIcon?: CustomIcon
    /**
     * Дополнительный класс для стилизации компонента
     */
    className?: string
    /**
     * Автоматическая капитализация текста в поле ввода
     */
    autoCapitalize?: string
    /**
     * Определяет, можно ли редактировать поле
     */
    readOnly?: HTMLInputElement['readOnly']
    /**
     * Управляет автозаполнением поля
     */
    autoComplete?: HTMLInputElement['autocomplete']
    /**
     * Срабатывает, когда пользователь наводит курсор на поле
     */
    onHover?: (event: MouseEvent<HTMLInputElement>) => void
    /**
     * Срабатывает при фокусе на поле ввода
     */
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    /**
     * Обрабатывает изменения в поле, например, ввод текста
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    /**
     * Срабатывает при нажатии клавиши в поле ввода
     */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
    /**
     * Обработчик для очистки поля с помощью иконки крестика
     */
    onClear?: (event: IconPressEvent) => void
    /**
     * Срабатывает, когда фокус уходит с поля ввода
     */
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    /**
     * Обрабатывает копирование текста из поля ввода
     */
    onCopy?: (event: ClipboardEvent<HTMLInputElement>) => void
    /**
     * Срабатывает при вставке текста в поле
     */
    onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void
    /**
     * Срабатывает при клике на поле ввода
     */
    onClick?: (event: MouseEvent<HTMLInputElement>) => void
} & AriaAttributes
