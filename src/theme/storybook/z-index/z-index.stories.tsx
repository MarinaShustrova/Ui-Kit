import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import cn from 'classnames'

import styles from './styles.module.scss'

const ZIndexLayer = ({
    className,
    children,
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
        <div className={cn(styles.layer, className)} onClick={handleClick}>
            {children}
        </div>
    )
}

/**
 * Default Story
 */
export const Default: StoryFn = () => {
    const handleClick = (layer: string) => {
        window.navigator.clipboard.writeText(`z-index.zIndex("${layer}");`)
    }

    return (
        <>
            <ZIndexLayer className={styles.layout} onClick={() => handleClick('layer')}>
                Layer
            </ZIndexLayer>
            <ZIndexLayer className={styles.dropdown} onClick={() => handleClick('dropdown')}>
                Dropdown
            </ZIndexLayer>
            <ZIndexLayer className={styles.tooltip} onClick={() => handleClick('tooltip')}>
                Tooltip
            </ZIndexLayer>
            <ZIndexLayer className={styles.overlay} onClick={() => handleClick('overlay')}>
                Overlay
            </ZIndexLayer>
            <ZIndexLayer
                className={styles.notification}
                onClick={() => handleClick('notification')}
            >
                Notification
            </ZIndexLayer>
            <ZIndexLayer className={styles.modal} onClick={() => handleClick('modal')}>
                Modal
            </ZIndexLayer>
        </>
    )
}

export default {
    title: 'Theming/z-index',
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
