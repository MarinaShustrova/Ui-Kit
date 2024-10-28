export type Breakpoint = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export type Width = Partial<Record<Breakpoint, 'auto' | number>> | 'auto'
export type Offset = Partial<Record<Breakpoint, number>>

export type ColumnGridProps = {
    /**
     * Содержимое компонента
     */
    children: React.ReactNode
    /**
     * Управление шириной колонки
     */
    width?: Width
    /**
     * Управление смещением колонки
     */
    offset?: Offset
    /**
     * Пользовательское имя класса
     */
    className?: string
}
