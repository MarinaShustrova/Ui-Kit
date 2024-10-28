import { ReactNode, FocusEvent, MouseEvent, AriaAttributes, ButtonHTMLAttributes } from 'react'
import { BTN_TYPES, BTN_SIZES } from './constants'

type Values<T> = T[keyof T]
type ButtonSize = Values<typeof BTN_SIZES>
export type ButtonType = Values<typeof BTN_TYPES>
type ButtonHTMLType = ButtonHTMLAttributes<HTMLButtonElement>['type']

export type ButtonProps = {
    /**
     * Уникальный идентификатор для элемента
     */
    id?: string
    /**
     * Тип кнопки
     */
    type?: ButtonType
    /**
     * Размер кнопки
     */
    size?: ButtonSize
    /**
     * Содержимое кнопки
     */
    children?: ReactNode[] | ReactNode
    /**
     * Значение атрибута type для HTML
     */
    htmlType?: ButtonHTMLType
    /**
     * Управление состоянием отключения кнопки
     */
    disabled?: boolean
    /**
     * Индикатор загрузки кнопки
     */
    isLoading?: boolean
    /**
     * Дополнительные классы для кнопки
     */
    className?: string
    /**
     * Иконка, отображаемая слева от текста кнопки
     */
    icon?: ReactNode
    /**
     * Обработчик, вызываемый при установлении фокуса на кнопке
     */
    onFocus?: (event: FocusEvent<HTMLButtonElement>) => void
    /**
     * Обработчик, вызываемый при потере фокуса с кнопки
     */
    onBlur?: (event: FocusEvent<HTMLButtonElement>) => void
    /**
     * Обработчик, вызываемый при нажатии на кнопку
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    /**
     * Обработчик, вызываемый при наведении курсора на кнопку
     */
    onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void
    /**
     * Обработчик, вызываемый при уходе курсора с кнопки
     */
    onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void
} & AriaAttributes
