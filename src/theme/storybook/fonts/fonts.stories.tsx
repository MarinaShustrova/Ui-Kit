import styles from './styles.module.scss'
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

const EXAMPLE_TEXT = 'Текст'
const EXAMPLE_FONT_SIZES = ['10px', '12px', '14px', '18px', '24px', '30px', '36px']

const FontExample = () => (
    <>
        {EXAMPLE_FONT_SIZES.map(fontSize => (
            <p key={fontSize} style={{ fontSize }}>
                {EXAMPLE_TEXT}
            </p>
        ))}
    </>
)

/**
 * Default Story
 */
export const Default: StoryFn = () => (
    <>
        <Thin />
        <Light />
        <Regular />
        <Medium />
        <Bold />
        <Black />
    </>
)

/**
 * Thin Story
 */
export const Thin: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 100 }}
    >
        <hr />
        <h2 style={{ fontWeight: 100, fontSize: '36px' }}>Roboto Thin</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

/**
 * Light Story
 */
export const Light: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
    >
        <hr />
        <h2 style={{ fontWeight: 300, fontSize: '36px' }}>Roboto Light</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

/**
 * Regular Story
 */
export const Regular: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
    >
        <hr />
        <h2 style={{ fontWeight: 400, fontSize: '36px' }}>Roboto Regular</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

/**
 * Medium Story
 */
export const Medium: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
    >
        <hr />
        <h2 style={{ fontWeight: 500, fontSize: '36px' }}>Roboto Medium</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

/**
 * Bold Story
 */
export const Bold: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
        <hr />
        <h2 style={{ fontWeight: 700, fontSize: '36px' }}>Roboto Bold</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

/**
 * Black Story
 */
export const Black: StoryFn = args => (
    <div
        className={styles['font-container']}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}
    >
        <hr />
        <h2 style={{ fontWeight: 900, fontSize: '36px' }}>Roboto Black</h2>
        <hr />
        <FontExample />
        <hr />
    </div>
)

export default {
    title: 'Theming/fonts',
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
