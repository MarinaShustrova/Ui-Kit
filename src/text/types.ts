import { ReactNode } from 'react'
import { TEXT_LINE_HEIGHTS, TEXT_SIZES, TEXT_TAGS, TEXT_WEIGHTS } from './constants'

type Values<T> = T[keyof T]
type Tags = Values<typeof TEXT_TAGS>
export type Sizes = Values<typeof TEXT_SIZES>
type Weights = Values<typeof TEXT_WEIGHTS>
type LineHeights = Values<typeof TEXT_LINE_HEIGHTS>

export type TextProps = {
    /**
     * Основное содержимое текстового компонента.
     *
     * Поддерживает любой React-узел, включая текст, элементы и другие компоненты.
     */
    children: ReactNode
    /**
     * Размер текста, определяющий визуальное представление.
     *
     * Доступные размеры заданы в `TEXT_SIZES` и варьируются от небольших до крупных значений.
     */
    size?: Sizes
    /**
     * Начертание шрифта, определяющее его толщину.
     *
     * Возможные варианты начертания перечислены в `TEXT_WEIGHTS` и включают легкие, стандартные и жирные значения.
     */
    weight?: Weights
    /**
     * Высота строки текста, влияющая на читаемость.
     *
     * Значение `long` используется для обычного текста, а `short` — для текста высокой плотности.
     */
    lineHeight?: LineHeights
    /**
     * HTML-тег, используемый для обертки текста.
     *
     * Определяет семантическое значение компонента, выбираемое из предопределенных тегов `TEXT_TAGS`.
     */
    htmlTag?: Tags
    /**
     * Пользовательский CSS-класс для стилизации компонента.
     *
     * Позволяет применить дополнительные или переопределенные стили.
     */
    className?: string
    /**
     * Идентификатор для автоматического тестирования компонента.
     *
     * Упрощает процесс поиска и идентификации компонента в тестах.
     */
    dataTestId?: string
    /**
     * Атрибут `title` для HTML-элемента, отображаемый при наведении.
     *
     * Используется для предоставления дополнительной информации о содержимом.
     */
    htmlTitle?: string
}
