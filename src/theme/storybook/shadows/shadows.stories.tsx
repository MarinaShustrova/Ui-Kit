import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import cn from 'classnames'
import styles from './styles.module.scss'

const ShadowBox = ({
    children,
    className,
    onClick,
}: {
    children: string
    className: string
    onClick(): void
}) => {
    const handleClick = () => {
        onClick()
    }

    return (
        <div className={cn(styles['shadow-box'], className)} onClick={handleClick}>
            {children}
        </div>
    )
}

export const Default: StoryFn = () => {
    const handleClick = (shadowName: string) => {
        window.navigator.clipboard.writeText(`shadows.$shadow-${shadowName}`)
    }

    return (
        <div className={styles['shadows-wrapper']}>
            <ShadowBox className={styles['shadow-s']} onClick={() => handleClick('s')}>
                shadow-s
            </ShadowBox>
            <ShadowBox className={cn(styles['shadow-m'])} onClick={() => handleClick('m')}>
                shadow-m
            </ShadowBox>
            <ShadowBox className={cn(styles['shadow-l'])} onClick={() => handleClick('l')}>
                shadow-l
            </ShadowBox>
            <ShadowBox className={cn(styles['shadow-xl'])} onClick={() => handleClick('xl')}>
                shadow-xl
            </ShadowBox>
            <ShadowBox className={cn(styles['shadow-xxl'])} onClick={() => handleClick('xxl')}>
                shadow-xxl
            </ShadowBox>
        </div>
    )
}

export default {
    title: 'Theming/shadows',
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
