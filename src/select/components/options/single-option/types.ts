import { OptionType } from '../../../types'
import { SelectOptionsProps } from '../types'

export type SingleOptionProps = Pick<SelectOptionsProps, 'searchable' | 'searchValue'> & {
    /**
     * Позиция элемента в списке опций. Нужен для правильного расчета размеров элемента.
     */
    index: number
    /**
     * Уникальный идентификатор опции.
     */
    id: string
    /**
     * Элемент списка опций.
     */
    option: OptionType
    /**
     * Включение или отключение отображения чекбокса для опции.
     */
    showCheckbox: boolean
    /**
     * Функция-обработчик, вызываемая при нажатии на элемент списка.
     */
    onClick?: () => void
    /**
     * Атрибут, указывающий на наличие фокуса для поддержки доступности (a11y).
     */
    hasA11yFocus?: boolean
    /**
     * Ссылка на элемент для взаимодействия с механизмами доступности.
     */
    a11yChildRef?: React.RefObject<HTMLElement>
}
