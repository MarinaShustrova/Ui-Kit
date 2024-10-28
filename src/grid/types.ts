export type SizeBreakpoint = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type DeviceBreakpoint = 'mobile' | 'tablet' | 'desktop'

export type Breakpoint = SizeBreakpoint | DeviceBreakpoint

export type GridProps = {
    /**
     * Контент, размещаемый внутри Grid компонента.
     *
     * Ожидается, что это будут дочерние элементы, которые будут организованы
     * внутри сетки.
     */
    children: React.ReactNode
    /**
     * Пользовательский класс для кастомной стилизации.
     *
     * Позволяет передать CSS-класс для индивидуального оформления компонента Grid.
     */
    className?: string
}
