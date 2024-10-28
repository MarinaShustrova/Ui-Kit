import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Switch } from '../switch'
import { SwitchProps } from '../types'

const Template: StoryFn<SwitchProps> = args => <Switch {...args} />

/**
 * История для включенного состояния переключателя.
 * В этой истории демонстрируется, как компонент Switch выглядит,
 * когда он находится в состоянии "включен". Это состояние может быть
 * полезно для отображения текущего статуса переключателя пользователям.
 */
export const Enabled: StoryFn<SwitchProps> = () => <Switch initialState="enabled" />

/**
 * История для выключенного состояния переключателя.
 * Здесь мы показываем, как выглядит компонент Switch,
 * когда он находится в состоянии "выключен". Это состояние
 * помогает пользователям понять, что переключатель неактивен.
 */
export const Disabled: StoryFn<SwitchProps> = () => <Switch initialState="disabled" />

export default {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
