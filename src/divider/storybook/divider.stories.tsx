import React from 'react'
import { Divider } from '../index'
import { DividerProps } from '../types'
import { StoryFn, Meta } from '@storybook/react'

const Template: StoryFn<DividerProps> = ({ children, ...args }) => (
    <Divider {...args}>{children}</Divider>
)

/**
 * SolidDivider — отображает стандартный разделитель без штриховки.
 *
 * Этот вариант используется, когда нужен простой разделитель без текста и с выравниванием по центру.
 */
export const SolidDivider = () => <Divider dashed={false} title="" orientation="center" />

/**
 * DashedDivider — отображает разделитель с пунктирной линией.
 *
 * Используется для стилистического акцента, добавляя пунктирный стиль, но без текста.
 */
export const DashedDivider = () => <Divider dashed={true} title="" orientation="center" />

/**
 * SolidDividerWithTextLeft — простой разделитель с текстом, выровненным слева.
 *
 * Этот вариант добавляет текст «Текст», выравнивая его с левой стороны, и делает разделитель сплошным.
 */
export const SolidDividerWithTextLeft = () => (
    <Divider dashed={false} title="Текст" orientation="left" />
)

/**
 * SolidDividerWithTextRight — сплошной разделитель с текстом, выровненным справа.
 *
 * Этот вариант добавляет текст «Текст», выравнивая его с правой стороны.
 */
export const SolidDividerWithTextRight = () => (
    <Divider dashed={false} title="Текст" orientation="right" />
)

/**
 * DashedDividerWithText — разделитель с пунктирной линией и текстом по центру.
 *
 * Используется для выделения пунктиром и добавляет текст «Текст», выравнивая его по центру.
 */
export const DashedDividerWithText = () => (
    <Divider dashed={true} title="Текст" orientation="center" />
)

export default {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
