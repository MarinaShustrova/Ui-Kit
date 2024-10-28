import { ReactNode } from 'react'

export type InfiniteListItems = Array<unknown>

export type InfiniteListProps = {
    /**
     * Контент виртуального списка
     */
    children: ReactNode
    /**
     * Смещение от начала списка
     */
    topOffset: string
    /**
     * Общая высота всех элементов списка
     */
    totalHeight: number
    /**
     * Пользовательское имя класса
     */
    className?: string
}
