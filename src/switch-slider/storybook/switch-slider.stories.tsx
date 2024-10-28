import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { SwitchSlider } from '../switch-slider'
import { SwitchSliderProps } from '../types'

const Template: StoryFn<SwitchSliderProps> = args => <SwitchSlider {...args} />

/**
 * История для нейтрального состояния переключателя-скользунка.
 * В этой истории демонстрируется, как компонент SwitchSlider выглядит,
 * когда он находится в нейтральном состоянии. Это состояние может
 * использоваться для отображения состояния, когда переключатель
 * еще не был активирован или не имеет определенного значения.
 */
export const Neutral: StoryFn<SwitchSliderProps> = ({ ...args }) => (
    <SwitchSlider initialState="neutral" />
)

/**
 * История для включенного состояния переключателя-скользунка.
 * Здесь мы показываем, как выглядит компонент SwitchSlider,
 * когда он находится в состоянии "включен". Это состояние помогает
 * пользователям увидеть, что переключатель активен и выполняет
 * свою функцию.
 */
export const Enabled: StoryFn<SwitchSliderProps> = () => <SwitchSlider initialState="enabled" />

/**
 * История для выключенного состояния переключателя-скользунка.
 * В этой истории демонстрируется, как компонент SwitchSlider
 * выглядит в состоянии "выключен". Это состояние может помочь
 * пользователям понять, что переключатель неактивен и не будет
 * выполнять никакие действия.
 */
export const Disabled: StoryFn<SwitchSliderProps> = () => <SwitchSlider initialState="disabled" />

export default {
    title: 'Components/SwitchSlider',
    component: SwitchSlider,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
