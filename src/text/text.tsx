import cn from 'classnames'
import { createElement } from 'react'
import { TextProps } from './types'
import styles from './styles.module.scss'

export const Text = ({
    children,
    className,
    size = 'medium',
    weight = 'regular',
    lineHeight = 'long',
    htmlTag = 'span',
    htmlTitle,
}: TextProps) =>
    createElement(
        htmlTag,
        {
            title: htmlTitle,
            className: cn(
                styles.text,
                styles[`size-${size}-${lineHeight}`],
                styles[`weight-${weight}`],
                className,
            ),
        },
        children,
    )
