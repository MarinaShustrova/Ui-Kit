import { StoryFn, Meta } from '@storybook/react'
import { Column } from '../column'
import { Row } from '../row'
import { Grid } from '../grid'
import { GridProps } from '../types'
// import docs from './docs.mdx'
//@ts-ignore
import styles from './styles.module.scss'
import React from 'react'

/**
 * Default Story
 *
 * Эта история демонстрирует стандартное использование компонента Grid с тремя колонками,
 * каждая из которых имеет различную ширину для различных размеров экрана.
 * Строки и колонки в этой истории структурированы для наглядного представления.
 */
export const Default: StoryFn<GridProps> = args => (
    <Grid {...args}>
        <Row>
            <Column width={{ xxs: 3, xs: 6, xxl: 8 }} className={styles.column}>
                1/2
            </Column>
            <Column width={{ xxs: 2, xs: 4, xxl: 6 }} className={styles.column}>
                1/3
            </Column>
            <Column width={{ xxs: 1, xs: 2, xxl: 2 }} className={styles.column}>
                1/6
            </Column>
        </Row>
    </Grid>
)

Default.parameters = {
    controls: {
        disable: false,
    },
};

Default.argTypes = {
    children: {
        table: {
            disable: true,
        },
    },
    className: {
        table: {
            disable: true,
        },
    },
};

/**
 * Auto Width Story
 *
 * Эта история иллюстрирует использование колонок с автошириной в компоненте Grid.
 * Каждая колонка занимает равное пространство в строке, что создает адаптивный макет
 * с автоматическим распределением ширины.
 */
export const AutoWidth: StoryFn<GridProps> = args => (
    <Grid {...args}>
        <Row>
            <Column width="auto" className={styles.column}>
                Auto
            </Column>
            <Column width="auto" className={styles.column}>
                Auto
            </Column>
            <Column width="auto" className={styles.column}>
                Auto
            </Column>
        </Row>
    </Grid>
)

AutoWidth.storyName = 'Auto Width Example'

/**
 * Offset Story
 *
 * В этой истории показано использование отступов в колонках внутри компонента Grid.
 * Каждая колонка имеет отступы, которые позволяют изменять их положение и
 * визуально отделять их от других элементов.
 */
export const Offset: StoryFn<GridProps> = args => (
    <Grid {...args}>
        <Row className={styles.row}>
            <Column offset={{ xxs: 4 }} className={styles.column}>
                Offset 2/3
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column offset={{ xxs: 3 }} className={styles.column}>
                Offset 1/2
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column offset={{ xxs: 2 }} className={styles.column}>
                Offset 1/3
            </Column>
        </Row>
    </Grid>
)

Offset.storyName = 'Offset Example'

/**
 * Full Page Story
 *
 * Эта история демонстрирует использование компонента Grid для создания макета
 * на всю страницу. В ней показано, как можно комбинировать различные ширины колонок,
 * чтобы заполнить пространство и создать комплексный макет с множеством строк
 * и колонок, каждый из которых имеет свою ширину.
 */
export const FullPage: StoryFn<GridProps> = args => (
    <Grid {...args}>
        <Row className={styles.row}>
            <Column width={{ xxs: 6 }} className={styles.column}>
                12/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 5, xs: 11 }} className={styles.column}>
                11/12
            </Column>
            <Column width={{ xxs: 1, xs: 1 }} className={styles.column}>
                1/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 5, xs: 10 }} className={styles.column}>
                10/12
            </Column>
            <Column width={{ xxs: 1, xs: 2 }} className={styles.column}>
                2/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 5, xs: 9 }} className={styles.column}>
                9/12
            </Column>
            <Column width={{ xxs: 1, xs: 3 }} className={styles.column}>
                3/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 4, xs: 8 }} className={styles.column}>
                8/12
            </Column>
            <Column width={{ xxs: 2, xs: 4 }} className={styles.column}>
                4/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 4, xs: 7 }} className={styles.column}>
                7/12
            </Column>
            <Column width={{ xxs: 2, xs: 5 }} className={styles.column}>
                5/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 3, xs: 6 }} className={styles.column}>
                6/12
            </Column>
            <Column width={{ xxs: 3, xs: 6 }} className={styles.column}>
                6/12
            </Column>
        </Row>

        <Row className={styles.row}>
            <Column width={{ xxs: 3, xs: 5 }} className={styles.column}>
                5/12
            </Column>
            <Column width={{ xxs: 3, xs: 7 }} className={styles.column}>
                7/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 2, xs: 4 }} className={styles.column}>
                4/12
            </Column>
            <Column width={{ xxs: 4, xs: 8 }} className={styles.column}>
                8/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 2, xs: 3 }} className={styles.column}>
                3/12
            </Column>
            <Column width={{ xxs: 4, xs: 9 }} className={styles.column}>
                9/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 1, xs: 2 }} className={styles.column}>
                2/12
            </Column>
            <Column width={{ xxs: 5, xs: 10 }} className={styles.column}>
                10/12
            </Column>
        </Row>
        <Row className={styles.row}>
            <Column width={{ xxs: 1, xs: 1 }} className={styles.column}>
                1/12
            </Column>
            <Column width={{ xxs: 5, xs: 11 }} className={styles.column}>
                11/12
            </Column>
        </Row>
    </Grid>
)

FullPage.storyName = 'Full Page Example'

export default {
    title: 'Components/Grid',
    component: Grid,
    subcomponents: { Row, Column },
    parameters: {
        // docs: {
        //     page: docs,
        // },
        controls: {
            disable: false,
        },
        actions: {
            disable: false,
        },
    },
} as Meta<GridProps>
