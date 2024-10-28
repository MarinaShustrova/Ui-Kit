import React from 'react'
import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { DEFAULT_STORY_PARAMETERS } from '../../../.storybook/constants'
import { INPUT_STORY_ARG_TYPES } from '../../input/storybook/constants'
import { CustomSelect } from '../custom-select'
import { NOT_FOUND_LABEL_TEXT } from '../constants'
import { OptionsType, OptionType, CustomSelectProps } from '../types'
import { OPTIONS, ACCOUNTS_OPTIONS, OPTIONS_FOR_SEARCH_WITH_LONG_LIST, Option } from './constants'
// @ts-ignore
import styles from './styles.module.scss'

/**
 * Стандартный вариант Select
 *
 * Эта история демонстрирует стандартный вариант компонента CustomSelect.
 * Она отображает выпадающий список для выбора одного элемента, используя
 * стандартные стили и параметры, предоставленные в args.
 * CustomSelect — это высоко настраиваемый компонент,
 * который может адаптироваться к различным требованиям ввода данных.
 */
export const DefaultSelect: StoryFn<CustomSelectProps> = args => (
    <CustomSelect {...args} className={styles.select} />
)

DefaultSelect.parameters = DEFAULT_STORY_PARAMETERS

/**
 * Вариант для одиночного выбора
 *
 * Эта история демонстрирует вариант одиночного выбора компонента CustomSelect.
 * Пользователи могут выбрать один вариант из списка. Внешний вид и поведение
 * контролируются свойствами, переданными в args.
 */
export const Single: StoryFn<CustomSelectProps> = args => (
    <CustomSelect {...args} className={styles.select} />
)

/**
 * Вариант для множественного выбора
 *
 * Эта история демонстрирует функциональность множественного выбора компонента CustomSelect.
 * В этом варианте пользователи могут выбрать несколько вариантов из выпадающего списка.
 * Варианты для этой истории предоставлены через константу ACCOUNTS_OPTIONS.
 */
export const Multiple: StoryFn<CustomSelectProps> = args => (
    <CustomSelect {...args} type="multiple" className={styles.select} options={ACCOUNTS_OPTIONS} />
)

/**
 * Вариант с меткой
 *
 * Эта история иллюстрирует, как использовать CustomSelect с метками для лучшего контекста.
 * Она отображает два компонента select, каждый с меткой над ними, позволяя пользователям
 * различать разные контексты выбора (например, статус и источник оплаты).
 * Вспомогательные функции модифицируют варианты, чтобы убрать отметки и дополнительные метки.
 */
export const Label: StoryFn<CustomSelectProps> = args => {
    const uncheckOptions = (options: OptionsType) =>
        options.map(option => ({
            ...option,
            checked: false,
        }))

    const deleteAdditionalLabels = (options: OptionsType) =>
        options.map(option => ({
            ...option,
            additionalLabel: null,
        }))

    const options = uncheckOptions(OPTIONS)
    const accountsOptions = deleteAdditionalLabels(uncheckOptions(ACCOUNTS_OPTIONS))

    return (
        <div className={styles['select-container']}>
            <CustomSelect
                type="single"
                label="Статус"
                className={styles.select}
                options={options}
            />

            <CustomSelect
                type="multiple"
                label="Источник платежа"
                className={styles.select}
                options={accountsOptions}
            />
        </div>
    )
}

/**
 * Одиночный вариант с поиском
 *
 * Эта история демонстрирует вариант одиночного выбора с возможностью поиска
 * для компонента CustomSelect. Пользователи могут искать среди доступных
 * вариантов и выбирать один. Состояние вариантов динамически обновляется
 * в зависимости от выбора пользователя, а поиск фильтрует отображаемые варианты.
 */
export const SingleWithSearch: StoryFn<CustomSelectProps> = args => {
    const [options, setOptions] = useState(OPTIONS)

    const handleChange = (_: OptionsType, changedOption?: OptionType): void => {
        setOptions(currentOptions =>
            currentOptions.map(currentOption => ({
                ...currentOption,
                checked:
                    changedOption !== undefined && changedOption.label === currentOption.label
                        ? changedOption.checked
                        : false,
            })),
        )
    }

    return (
        <CustomSelect
            {...args}
            searchable
            label="Статус"
            className={styles.select}
            options={options}
            onChange={handleChange}
        />
    )
}

/**
 * Вариант с длинным списком и поиском
 *
 * Эта история демонстрирует, как компонент CustomSelect ведет себя с
 * большим количеством вариантов. Она включает поле для поиска, чтобы
 * помочь пользователям быстро находить и выбирать варианты из длинного списка.
 */
export const SearchWithLongList: StoryFn<CustomSelectProps> = args => (
    <CustomSelect
        {...args}
        searchable
        label="Статус"
        className={styles.select}
        options={OPTIONS_FOR_SEARCH_WITH_LONG_LIST}
    />
)

/**
 * Множественный вариант с поиском
 *
 * Эта история демонстрирует выпадающий список для множественного выбора
 * с функциональностью поиска. Пользователи могут выбирать несколько вариантов
 * и искать среди списка вариантов. Состояние выбранных вариантов
 * управляется динамически, позволяя пользователям очищать или изменять
 * свои выборы.
 */
export const MultipleWithSearch: StoryFn<CustomSelectProps> = args => {
    const [options, setOptions] = useState(OPTIONS)

    const handleChange = (_: OptionsType, changedOption?: OptionType): void => {
        if (changedOption) {
            setOptions(prevOptions =>
                prevOptions.map(option =>
                    option.label === changedOption.label ? changedOption : option,
                ),
            )
        }
    }

    const handleClear = () => {
        setOptions(prevOptions =>
            prevOptions.map(option => ({
                ...option,
                checked: option.disabled ? option.checked : false,
            })),
        )
    }

    return (
        <CustomSelect
            {...args}
            type="multiple"
            searchable
            label="Статус"
            className={styles.select}
            options={options}
            onChange={handleChange}
            onClear={handleClear}
        />
    )
}

/**
 * Вариант с ошибкой
 *
 * Эта история демонстрирует состояние ошибки компонента CustomSelect.
 * Флаг ошибки заставляет компонент отображать сообщение об ошибке,
 * помогая пользователям понять, что текущее значение ввода имеет
 * проблему или требует внимания.
 */
export const Error: StoryFn<CustomSelectProps> = args => (
    <CustomSelect {...args} error label="Статус" tip="Текст ошибки" className={styles.select} />
)

export default {
    title: 'Components/Select',
    component: CustomSelect,
    subcomponents: { Option },
    parameters: {},
    argTypes: {
        ...INPUT_STORY_ARG_TYPES,
        options: {
            table: {
                disable: true,
            },
        },
        onAfterClose: {
            table: {
                disable: true,
            },
        },
        onAfterOpen: {
            table: {
                disable: true,
            },
        },
        onSearch: {
            table: {
                disable: true,
            },
        },
        optionsFooter: {
            table: {
                disable: true,
            },
        },
        filterOptions: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        hint: '',
        label: '',
        error: false,
        disabled: false,
        type: 'single',
        expanded: false,
        clearable: true,
        searchable: false,
        options: OPTIONS,
        searchValue: undefined,
        notFoundLabel: NOT_FOUND_LABEL_TEXT,
    },
} as Meta<CustomSelectProps>
