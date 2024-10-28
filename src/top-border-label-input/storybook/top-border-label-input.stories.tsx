import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TopBorderLabelInput } from '../top-border-label-input'
import { TopBorderLabelInputProps } from '../types'
import { TOP_LABEL_INPUT_STORY_ARG_TYPES } from './constants'
import { useIsState } from './hooks'
//@ts-ignore
import styles from './styles.module.scss'

/**
 * Default Story
 *
 * Это стандартная история для компонента Input. Она демонстрирует базовое использование
 * поля ввода с динамическим управлением состоянием для изменений значения и очистки ввода.
 * Пропсы onChange и onClear передаются для внешнего управления вводом.
 */
export const Default: StoryFn<TopBorderLabelInputProps> = ({ onChange, onClear, ...args }) => {
    const { value, handleChange, handleClear } = useIsState({
        onChange,
        onClear,
    })

    return (
        <TopBorderLabelInput
            // {...args}
            value={value}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            label="Краткое наименование"
            placeholder="Название организации"
        />
    )
}

/**
 * Number Story
 *
 * Эта история демонстрирует, как компонент Input работает при использовании для числового ввода.
 * Предопределённое числовое значение используется как начальное значение ввода. Также есть возможность
 * очищать и обновлять ввод при взаимодействии пользователя.
 */
export const Number: StoryFn<TopBorderLabelInputProps> = args => {
    const { value, handleChange, handleClear } = useIsState({
        value: '1234567',
    })

    return (
        <TopBorderLabelInput
            type="number"
            value={value}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            label="ИНН"
            placeholder="ИНН"
        />
    )
}

/**
 * Max Length Story
 *
 * Эта история демонстрирует использование свойства maxLength для компонента Input.
 * Поле ввода ограничивает количество вводимых символов до 5, и отображается подсказка
 * с информацией о максимальном количестве символов.
 */
export const MaxLength: StoryFn<TopBorderLabelInputProps> = args => {
    const { value, handleChange, handleClear } = useIsState()

    const MAX_LENGTH = 5

    return (
        <TopBorderLabelInput
            value={value}
            maxLength={MAX_LENGTH}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            label="PIN"
            placeholder="Введите PIN"
            tip={`Максимально допустимое количество символов: ${MAX_LENGTH}`}
        />
    )
}

/**
 * Label Story
 *
 * Эта история показывает, как использовать свойство label с компонентом Input.
 * Метка отображается над полем ввода, предоставляя дополнительный контекст о данных, которые должен ввести пользователь.
 */
export const Label: StoryFn<TopBorderLabelInputProps> = args => {
    const { value, handleChange, handleClear } = useIsState()

    return (
        <TopBorderLabelInput
            value={value}
            className={styles.input}
            label="Номер заявки"
            onClear={handleClear}
            onChange={handleChange}
            placeholder="Введите 5 цифр"
        />
    )
}

/**
 * Hint Story
 *
 * Эта история добавляет подсказку к компоненту Input, предоставляя пользователю дополнительную информацию
 * рядом с полем ввода. Подсказка обычно отображается под полем ввода.
 */
export const Hint: StoryFn<TopBorderLabelInputProps> = args => {
    const { value, handleChange, handleClear } = useIsState()

    return (
        <TopBorderLabelInput
            value={value}
            className={styles.input}
            tip="Используйте цифры без пробелов"
            label="СНИЛС"
            onChange={handleChange}
            onClear={handleClear}
        />
    )
}

/**
 * Error Story
 *
 * Эта история демонстрирует, как показать состояние ошибки для компонента Input.
 * Когда флаг ошибки установлен в true, поле ввода будет стилизовано и вести себя так, как если бы произошла ошибка,
 * часто используется для сценариев проверки форм.
 */
export const Error: StoryFn<TopBorderLabelInputProps> = args => {
    const { value, handleChange, handleClear } = useIsState()

    return (
        <TopBorderLabelInput
            value={value}
            className={styles.input}
            tip="Ошибка ввода"
            label="Номер телефона"
            onChange={handleChange}
            onClear={handleClear}
            placeholder="+7(...)..."
            error
        />
    )
}

// /**
//  * Disabled Story
//  *
//  * This story showcases the disabled state of the Input component. When disabled,
//  * the input field is non-interactive and styled differently to indicate that it is not editable.
//  */
// export const Disabled: StoryFn<TopBorderLabelInputProps> = args => (
//     <TopBorderLabelInput
//         disabled
//         value="Этап"
//         className={styles.input}
//         label="Этап процесса"
//         tip="Название этапа"
//     />
// )

export default {
    title: 'Components/FloatingLabelInput',
    component: TopBorderLabelInput,
    parameters: {},
    argTypes: TOP_LABEL_INPUT_STORY_ARG_TYPES,
    args: {
        type: 'text',
        maxLength: undefined,
        hint: '',
        label: '',
        error: false,
        disabled: false,
        required: false,
        placeholder: '',
        clearable: true,
    },
} as Meta<TopBorderLabelInputProps>
