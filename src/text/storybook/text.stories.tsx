import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { TEXT_SIZES, TEXT_TAGS, TEXT_WEIGHTS, TEXT_LINE_HEIGHTS } from '../constants'
import { TextProps } from '../types'
import { Text } from '../text'
import styles from './styles.module.scss'

/**
 * История по умолчанию для компонента Text.
 * В этой истории отображается базовый текст "Lorem Ipsum", который часто используется
 * в дизайне и вёрстке как заполнители. Этот пример демонстрирует стандартный
 * вариант использования компонента без дополнительных параметров.
 */
export const Default: StoryFn<TextProps> = args => (
    <Text {...args}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
    </Text>
)

Default.parameters = {
    controls: {
        disable: false,
    },
}

/**
 * История для демонстрации различных размеров текста.
 * В этой истории показаны все доступные размеры текста, которые определены в константах.
 * Для каждого размера создаётся новый параграф с текстом, где указывается текущий размер.
 * Это позволяет визуально оценить, как текст выглядит при различных размерах.
 */
export const Size: StoryFn<TextProps> = args => (
    <>
        {Object.values(TEXT_SIZES).map(size => (
            <p className={styles.text} key={size}>
                <Text size={size}>{`Текст с размером - ${size}`}</Text>
            </p>
        ))}
    </>
)

/**
 * История для демонстрации различных начертаний текста.
 * Здесь мы показываем все доступные веса шрифта, используя те же константы.
 * Каждый вес шрифта применяется к тексту, что позволяет увидеть, как текст
 * будет выглядеть с различными стилями начертания.
 */
export const Weight: StoryFn<TextProps> = args => (
    <>
        {Object.values(TEXT_WEIGHTS).map(weight => (
            <p className={styles.text} key={weight}>
                <Text weight={weight}>{`Текст с начертанием шрифта - ${weight}`}</Text>
            </p>
        ))}
    </>
)

/**
 * История для демонстрации использования различных HTML-тегов.
 * В этой истории мы показываем, как компонент Text может использоваться с
 * разными тегами, такими как <h1>, <h2> и т.д. Для каждого тега создаётся
 * отдельный текст, чтобы наглядно продемонстрировать, как они отображаются.
 */
export const Tags: StoryFn<TextProps> = args => (
    <div className={styles['text-container']}>
        {Object.values(TEXT_TAGS).map(htmlTag => (
            <Text key={htmlTag} htmlTag={htmlTag} className={styles.text}>
                {`Текст в теге <${htmlTag} />`}
            </Text>
        ))}
    </div>
)

/**
 * История для демонстрации высоты строки текста.
 * Здесь мы комбинируем размеры текста и высоты строки для создания
 * различных вариантов текста.
 */
export const LineHeight: StoryFn<TextProps> = args => (
    <>
        {Object.values(TEXT_SIZES).map(size =>
            Object.values(TEXT_LINE_HEIGHTS).map(lineHeight => (
                <p className={styles.text} key={`${size}-${lineHeight}`}>
                    <Text
                        size={size}
                        lineHeight={lineHeight}
                    >{`Текст с размером - ${size} и высотой строки - ${lineHeight}`}</Text>
                </p>
            )),
        )}
    </>
)

/**
 * История для демонстрации использования свойства htmlTitle.
 * В этой истории мы показываем, как добавить подсказку к тексту
 * с помощью свойства htmlTitle. При наведении на текст появляется
 * подсказка, что улучшает доступность и удобство использования.
 */
export const HtmlTitle: StoryFn<TextProps> = args => (
    <Text htmlTitle="Текст с заполненным свойством htmlTitle. При наведении появляется подсказка">
        Текст с заполненным свойством htmlTitle. При наведении появляется подсказка
    </Text>
)

/**
 * История для мобильной версии текста.
 * В этой истории мы демонстрируем, как компонент Text выглядит
 * на мобильных устройствах, используя минимальные размеры
 * для отображения текста.
 */
export const Mobile: StoryFn<TextProps> = args => (
    <>
        {Object.values(TEXT_SIZES).map(size => (
            <p className={styles.text} key={size}>
                <Text size={size}>{`Текст с размером - ${size}`}</Text>
            </p>
        ))}
    </>
)

/**
 * История для планшетной версии текста.
 * В этой истории мы показываем, как текст отображается на планшетах,
 * используя те же размеры текста, что и в истории для мобильных
 * устройств.
 */
export const Tablet: StoryFn<TextProps> = args => (
    <>
        {Object.values(TEXT_SIZES).map(size => (
            <p className={styles.text} key={size}>
                <Text size={size}>{`Текст с размером - ${size}`}</Text>
            </p>
        ))}
    </>
)

Mobile.parameters = {
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
        defaultViewport: 'iphone6',
    },
    docs: {
        inlineStories: false,
        iframeHeight:
            INITIAL_VIEWPORTS.iphone6.styles &&
            'height' in INITIAL_VIEWPORTS.iphone6.styles &&
            INITIAL_VIEWPORTS.iphone6.styles.height,
    },
}

Tablet.parameters = {
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
        defaultViewport: 'ipad',
    },
    docs: {
        inlineStories: false,
        iframeHeight:
            INITIAL_VIEWPORTS.ipad.styles &&
            'height' in INITIAL_VIEWPORTS.ipad.styles &&
            INITIAL_VIEWPORTS.ipad.styles.height,
    },
}

export default {
    title: 'Components/Text',
    component: Text,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
    argTypes: {
        children: {
            table: { disable: true },
        },
        className: {
            table: { disable: true },
        },
    },
    args: {
        size: TEXT_SIZES.MEDIUM,
        weight: TEXT_WEIGHTS.REGULAR,
        htmlTag: TEXT_TAGS.SPAN,
    },
} as Meta
