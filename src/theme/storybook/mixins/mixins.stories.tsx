import React, { ReactNode } from 'react'
import { Args, Meta, StoryFn } from '@storybook/react'
import { handleMixinBoxClick } from './utils'

import styles from './styles.module.scss'

const Container = ({
    children,
    className,
    description,
}: {
    children: ReactNode
    className?: string
    description: string
}) => (
    <div>
        <div>
            <div>{description}</div>
            <>{children}</>
        </div>
    </div>
)

const Component = ({
    className,
    onClick,
    args,
    children,
}: {
    className?: string
    args?: Args
    children?: ReactNode
    onClick?(): void
}) => {
    const handleClick = () => {
        onClick?.()
    }

    return (
        <div style={args} className={className} onClick={handleClick}>
            {children}
        </div>
    )
}

export const Box: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('box')
    }

    return (
        <Container description="Отображение прямоугольника">
            <Component args={args} onClick={handleClick} />
        </Container>
    )
}

export const Square: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('square(200)')
    }

    return (
        <Container description="Отображение прямоугольника заданных ширины и высоты">
            <Component args={args} onClick={handleClick} />
        </Container>
    )
}

export const Circle: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('circle(200)')
    }

    return (
        <Container description="Отображение окружности">
            <Component args={args} onClick={handleClick} />
        </Container>
    )
}

export const EllipsisGradient: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('ellipsis-gradient(#ccc)')
    }

    return (
        <Container description="Отображение градиента в правой части элемента">
            <div onClick={handleClick}>
                <Component args={args}>
                    <div />
                </Component>
            </div>
        </Container>
    )
}

export const EllipsisText: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('ellipsis-text')
    }

    return (
        <Container description="Отображение многоточия на месте текста, который не вмещается в контейнер">
            <Component args={args} onClick={handleClick}>
                Очень длинный текст в две и более строки
            </Component>
        </Container>
    )
}

export const EllipsisTextMultiline: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('ellipsis-text-multiline(2)')
    }

    return (
        <Container description="Отображение многоточия на месте текста, который не вмещается в контейнер. Можно передать количество строк, после которых будет произведена подстановка многоточия">
            <Component
                args={args}
                className={styles['ellipsis-text-multiline']}
                onClick={handleClick}
            >
                Очень очень длинный текст в две и более строки
            </Component>
        </Container>
    )
}

export const Hover: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('hover {...}')
    }

    return (
        <Container description="Определение стилей элемента при наведении мыши. Применяется только начиная с разрешения для настольных устройств.">
            <Component args={args} onClick={handleClick} />
        </Container>
    )
}

export const Focus: StoryFn = args => {
    const handleClick = () => {
        handleMixinBoxClick('focus {...}')
    }

    return (
        <Container description="Определение стилей элемента при фокусе. Применяется только начиная с разрешения для настольных устройств.">
            <Component args={args} onClick={handleClick}>
                <button>Добавить элемент</button>
            </Component>
        </Container>
    )
}

export default {
    title: 'Theming/mixins',
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
