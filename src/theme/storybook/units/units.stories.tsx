import { Meta, StoryFn } from '@storybook/react'
import { UnitsGroup } from './units-group'

export const Default: StoryFn = () => {
    const offsets = [
        { name: 'space-3xs', value: '2px' },
        { name: 'space-2xs', value: '4px' },
        { name: 'space-xs', value: '8px' },
        { name: 'space-s', value: '12px' },
        { name: 'space-m', value: '16px' },
        { name: 'space-l', value: '20px' },
        { name: 'space-xl', value: '24px' },
        { name: 'space-2xl', value: '28px' },
        { name: 'space-3xl', value: '36px' },
        { name: 'space-4xl', value: '48px' },
        { name: 'space-5xl', value: '60px' },
        { name: 'space-6xl', value: '80px' },
        { name: 'space-7xl', value: '120px' },
    ]

    const borderRadiuses = [
        { name: 'border-radius-s', value: '4px' },
        { name: 'border-radius-m', value: '6px' },
        { name: 'border-radius-l', value: '8px' },
        { name: 'border-radius-xl', value: '12px' },
        { name: 'border-radius-2xl', value: '16px' },
    ]

    const borderWidths = [
        { name: 'border-width-s', value: '1px' },
        { name: 'border-width-m', value: '2px' },
        { name: 'border-width-l', value: '3px' },
    ]

    return (
        <>
            <UnitsGroup units={offsets} title="Отступы" expanded />
            <UnitsGroup units={borderRadiuses} title="Скругления обводки" />
            <UnitsGroup units={borderWidths} title="Ширина обводки" />
        </>
    )
}

export default {
    title: 'Theming/units',
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
