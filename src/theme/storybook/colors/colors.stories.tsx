import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ColorsGroup } from './colors-group'
import { useTheme } from '../../../common/context/theme-context'

const lightThemeColors = {
    neutral: [
        { name: 'neutral-10', value: '#fcfcfd' },
        { name: 'neutral-20', value: '#f6f7f8' },
        { name: 'neutral-30', value: '#ecedef' },
        { name: 'neutral-50', value: '#e3e5e8' },
        { name: 'neutral-70', value: '#c8ccd0' },
        { name: 'neutral-80', value: '#acb3b9' },
        { name: 'neutral-90', value: '#75808a' },
        { name: 'neutral-93', value: '#464d53' },
        { name: 'neutral-97', value: '#2f3337' },
        { name: 'neutral-99', value: '#171a1c' },
    ],
    primary: [
        { name: 'primary-25', value: '#edf8ed' },
        { name: 'primary-35', value: '#c8e9c9' },
        { name: 'primary-45', value: '#a3dba4' },
        { name: 'primary-55', value: '#7ecd80' },
        { name: 'primary-65', value: '#5abf5c' },
        { name: 'primary-75', value: '#40a642' },
        { name: 'primary-85', value: '#328134' },
        { name: 'primary-95', value: '#245c25' },
    ],
    danger: [
        { name: 'danger-25', value: '#fde7e7' },
        { name: 'danger-35', value: '#fab7b7' },
        { name: 'danger-45', value: '#f78787' },
        { name: 'danger-55', value: '#f45757' },
        { name: 'danger-65', value: '#f12727' },
        { name: 'danger-75', value: '#d80e0e' },
        { name: 'danger-85', value: '#a80b0b' },
        { name: 'danger-95', value: '#780808' },
    ],
    important: [
        { name: 'important-25', value: '#fff2e5' },
        { name: 'important-35', value: '#ffd7b3' },
        { name: 'important-45', value: '#ffbc7f' },
        { name: 'important-55', value: '#ffa24c' },
        { name: 'important-65', value: '#ff881b' },
        { name: 'important-75', value: '#e56e00' },
        { name: 'important-85', value: '#b25500' },
        { name: 'important-95', value: '#7f3d00' },
    ],
    warning: [
        { name: 'warning-25', value: '#fff9e5' },
        { name: 'warning-35', value: '#ffefb3' },
        { name: 'warning-45', value: '#ffe480' },
        { name: 'warning-55', value: '#ffda4c' },
        { name: 'warning-65', value: '#ffcf1a' },
        { name: 'warning-75', value: '#e5b600' },
        { name: 'warning-85', value: '#b28d00' },
        { name: 'warning-95', value: '#806500' },
    ],
    informative: [
        { name: 'informative-25', value: '#e5f1ff' },
        { name: 'informative-35', value: '#b3d6ff' },
        { name: 'informative-45', value: '#80baff' },
        { name: 'informative-55', value: '#4c9fff' },
        { name: 'informative-65', value: '#1a83ff' },
        { name: 'informative-75', value: '#006ae5' },
        { name: 'informative-85', value: '#0052b2' },
        { name: 'informative-95', value: '#003b80' },
    ],
}

const darkThemeColors = {
    neutral: [
        { name: 'neutral-10', value: '#171a1c' },
        { name: 'neutral-20', value: '#2f3337' },
        { name: 'neutral-30', value: '#464d53' },
        { name: 'neutral-50', value: '#75808a' },
        { name: 'neutral-70', value: '#acb3b9' },
        { name: 'neutral-80', value: '#c8ccd0' },
        { name: 'neutral-90', value: '#e3e5e8' },
        { name: 'neutral-93', value: '#ecedef' },
        { name: 'neutral-97', value: '#f6f7f8' },
        { name: 'neutral-99', value: '#fcfcfd' },
        { name: 'neutral-100', value: '#ffffff' },
    ],
    primary: [
        { name: 'primary-25', value: '#245c25' },
        { name: 'primary-35', value: '#328134' },
        { name: 'primary-45', value: '#40a642' },
        { name: 'primary-55', value: '#5abf5c' },
        { name: 'primary-65', value: '#7ecd80' },
        { name: 'primary-75', value: '#a3dba4' },
        { name: 'primary-85', value: '#c8e9c9' },
        { name: 'primary-95', value: '#edf8ed' },
    ],
    danger: [
        { name: 'danger-25', value: '#780808' },
        { name: 'danger-35', value: '#a80b0b' },
        { name: 'danger-45', value: '#d80e0e' },
        { name: 'danger-55', value: '#f12727' },
        { name: 'danger-65', value: '#f45757' },
        { name: 'danger-75', value: '#f78787' },
        { name: 'danger-85', value: '#fab7b7' },
        { name: 'danger-95', value: '#fde7e7' },
    ],
    important: [
        { name: 'important-25', value: '#7f3d00' },
        { name: 'important-35', value: '#b25500' },
        { name: 'important-45', value: '#e56e00' },
        { name: 'important-55', value: '#ff881b' },
        { name: 'important-65', value: '#ffa24c' },
        { name: 'important-75', value: '#ffbc7f' },
        { name: 'important-85', value: '#ffd7b3' },
        { name: 'important-95', value: '#fff2e5' },
        { name: 'important-97', value: '#fff8f1' },
    ],
    warning: [
        { name: 'warning-25', value: '#806500' },
        { name: 'warning-35', value: '#b28d00' },
        { name: 'warning-45', value: '#e5b600' },
        { name: 'warning-55', value: '#ffcf1a' },
        { name: 'warning-65', value: '#ffda4c' },
        { name: 'warning-75', value: '#ffe480' },
        { name: 'warning-85', value: '#ffefb3' },
        { name: 'warning-95', value: '#fff9e5' },
        { name: 'warning-97', value: '#ffffe5' },
    ],
    informative: [
        { name: 'informative-25', value: '#003b80' },
        { name: 'informative-35', value: '#0052b2' },
        { name: 'informative-45', value: '#006ae5' },
        { name: 'informative-55', value: '#1a83ff' },
        { name: 'informative-65', value: '#4c9fff' },
        { name: 'informative-75', value: '#80baff' },
        { name: 'informative-85', value: '#b3d6ff' },
        { name: 'informative-95', value: '#e5f1ff' },
        { name: 'informative-97', value: '#f0f7ff' },
    ],
}

const formatColors = colors => {
    if (Array.isArray(colors)) {
        return colors
    }

    return Object.entries(colors).map(([name, value]) => ({ name, value }))
}

export const Default: StoryFn = () => {
    const { theme } = useTheme()

    const currentThemeColors = theme === 'dark' ? darkThemeColors : lightThemeColors

    const colorGroups = Object.entries(currentThemeColors).map(([groupName, colors]) => ({
        title: `${groupName.charAt(0).toUpperCase() + groupName.slice(1)} Colors`,
        colors: formatColors(colors),
    }))

    return (
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            {colorGroups.map(({ title, colors }, index) => (
                <ColorsGroup key={index} colors={colors} title={title} expanded={index === 0} />
            ))}
        </div>
    )
}

export default {
    title: 'colors',
    parameters: {

        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
