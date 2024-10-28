import cn from 'classnames'
import { StoryFn, Meta } from '@storybook/react'
import { ReactComponent as File } from '../../assets/img/file.svg'
import { ButtonProps } from '../types'
import { Button } from '../index'
import { BTN_SIZES, BTN_TYPES } from '../constants'
import styles from './styles.module.scss'
import React from 'react'

/**
 * Основная история (Default)
 */
export const Default: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button {...args}>{children}</Button>
)

/**
 * Primary
 *  История для основной кнопки "Primary".
 */
export const Primary: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="primary">{children}</Button>
)


/**
 * Primary
 *  История для основной кнопки "Primary" c иконкой.
 */
export const IconLeft: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button icon={<File />} {...args}>{children}</Button>
);


/**
 * Secondary
 *  История для вторичной кнопки "Secondary".
 */
export const Secondary: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="secondary">{children}</Button>
)

/**
 * Dashed
 *  История для кнопки "Dashed" (пунктирная кнопка).
 */
export const Dashed: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="dashed">{children}</Button>
)

/**
 * Dashed Neutral
 *  Пунктирная кнопка нейтрального типа.
 */
export const DashedNeutral: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="dashed-neutral">{children}</Button>
)

/**
 * Dashed Danger
 *  Пунктирная кнопка типа danger.
 */
export const DashedDanger: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="dashed-danger">{children}</Button>
)

/**
 * Link
 * Кнопка-ссылка.
 */
export const Link: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="link">{children}</Button>
)

/**
 * Link Neutral
 *  Нейтральная кнопка-ссылка.
 */
export const LinkNeutral: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="link-neutral">{children}</Button>
)

/**
 * Link Danger
 *  Кнопка-ссылка danger типа.
 */
export const LinkDanger: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="link-danger">{children}</Button>
)

/**
 * Text
 *  Кнопка без фона, только с текстом.
 */
export const Text: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="text">{children}</Button>
)

/**
 * Text Neutral
 *  Нейтральная кнопка только с текстом.
 */
export const TextNeutral: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="text-neutral">{children}</Button>
)

/**
 * Text Danger
 *  Кнопка только с текстом "опасного" типа.
 */
export const TextDanger: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <Button type="text-danger">{children}</Button>
)


/**
 * Disabled
 *  Отображает все типы и размеры кнопок в неактивном (disabled) состоянии.
 */
export const Disabled: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <div className={styles['button-sizes-container']}>
        {Object.values(BTN_TYPES)
            .map(type => (
                <div className={cn(styles['button-type-container'])} key={type}>
                    {Object.values(BTN_SIZES).map(buttonSize => (
                        <Button
                            disabled
                            type={type}
                            size={buttonSize}
                            className={styles.button}
                            key={type + buttonSize}
                        >
                            {children}
                        </Button>
                    ))}
                </div>
            ))}
    </div>
)

/**
 * Sizes
 *  История для отображения всех размеров кнопок для каждого типа.
 */
export const Sizes: StoryFn<ButtonProps> = ({ children, ...args }) => (
    <div className={styles['button-sizes-container']}>
        {Object.values(BTN_TYPES)
            .map(type => (
                <div className={cn(styles['button-type-container'])} key={type}>
                    {Object.values(BTN_SIZES).map(buttonSize => (
                        <Button
                            type={type}
                            size={buttonSize}
                            key={type + buttonSize}
                            className={styles.button}
                        >
                            {children}
                        </Button>
                    ))}
                </div>
            ))}
    </div>
)


/**
 * Button Component
 */
export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // docs: {
        //   page: docs,
        // },
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
    argTypes: {
        onClick: {
            table: { disable: true },
        },
        onFocus: {
            table: { disable: true },
        },
        onBlur: {
            table: { disable: true },
        },
        onMouseEnter: {
            table: { disable: true },
        },
        onMouseLeave: {
            table: { disable: true },
        },
        className: {
            table: { disable: true },
        },
        dataTestId: {
            table: { disable: true },
        },
        children: {
            table: { disable: true },
        },
    },
    args: {
        type: 'primary',
        size: 'medium',
        disabled: false,
        isLoading: false,
        htmlType: 'submit',
        children: 'История обработки',
    },
} as Meta
