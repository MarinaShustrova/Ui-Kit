import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { MenuDrawer } from '../menu-drawer'
import { MenuDrawerProps } from '../types'
//@ts-ignore
import { ReactComponent as Home } from '../../assets/img/home.svg'
//@ts-ignore
import { ReactComponent as Bank } from '../../assets/img/bank.svg'
//@ts-ignore
import { ReactComponent as Book } from '../../assets/img/book.svg'
//@ts-ignore
import { ReactComponent as Solution } from '../../assets/img/solution.svg'
//@ts-ignore
import { ReactComponent as Team } from '../../assets/img/team.svg'
//@ts-ignore
import { ReactComponent as Shopping } from '../../assets/img/shopping.svg'
//@ts-ignore
import { ReactComponent as User } from '../../assets/img/user.svg'
//@ts-ignore
import { ReactComponent as File } from '../../assets/img/file.svg'

export default {
    title: 'Components/MenuDrawer',
    component: MenuDrawer,
} as Meta

/**
 * Default Story
 *
 * В этой истории представлен стандартный вариант компонента MenuDrawer.
 * Он включает в себя набор элементов меню с иконками и текстами.
 */
export const Default: StoryFn<MenuDrawerProps> = () => (
    <MenuDrawer
        items={[
            { icon: <Home />, text: 'Домашняя страница' },
            { icon: <Bank />, text: 'Банк' },
            { icon: <Book />, text: 'Ооооооооооооооооооочень длинный текст' },
            { icon: <File />, text: 'Загруженные файлы' },
            { icon: <Solution />, text: 'Подписанные документы' },
            { icon: <User />, text: 'Профиль' },
        ]}
    />
)

/**
 * Custom Symbols Story
 *
 * Эта история демонстрирует MenuDrawer с пользовательскими символами.
 * Включает элементы с различными иконками, а также длинный текст.
 * Это позволяет увидеть, как компонент обрабатывает различные размеры текста
 * и количество элементов.
 */
export const CustomSymbols: StoryFn<MenuDrawerProps> = () => (
    <MenuDrawer
        items={[
            { icon: <Home />, text: 'Домашняя страница' },
            { icon: <Bank />, text: 'Банк' },
            {
                icon: <Book />,
                text: 'Ооооооооооооочень длинный текст',
            },
            { icon: <File />, text: 'Загруженные файлы' },
            { icon: <Solution />, text: 'Подписанные документы' },
            { icon: <Team />, text: 'Команда' },
            { icon: <Shopping />, text: 'Магазин' },
            { icon: <User />, text: 'Профиль' },
        ]}
    />
)

/**
 * Many Items Story
 *
 * В этой истории показан компонент MenuDrawer с большим количеством элементов.
 */
export const ManyItems: StoryFn<MenuDrawerProps> = () => (
    <MenuDrawer
        items={[
            { icon: <Home />, text: 'Домашняя страница' },
            { icon: <Bank />, text: 'Банк' },
            {
                icon: <Book />,
                text: 'Ооооооооооооочень длинный текст',
            },
            { icon: <File />, text: 'Загруженные файлы' },
            { icon: <Solution />, text: 'Подписанные документы' },
            { icon: <User />, text: 'Профиль' },
            { icon: <Home />, text: 'Домашняя страница' },
            { icon: <Bank />, text: 'Банк' },
            { icon: <Book />, text: 'Ооооооооооооочень длинный текст' },
            { icon: <File />, text: 'Загруженные файлы' },
            { icon: <Solution />, text: 'Подписанные документы' },
            { icon: <User />, text: 'Профиль' },
        ]}
    />
)
