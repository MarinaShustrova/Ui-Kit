import { StoryFn, Meta } from '@storybook/react'
import { InputProps } from '../types'
import { Input } from '../input'
import { MOBILE_STORY_PARAMETERS } from '../../../.storybook/constants'
import { INPUT_STORY_ARG_TYPES } from './constants'
import { useInputState } from './hooks'
//@ts-ignore
import styles from './styles.module.scss'
import React from 'react'

/**
 * Стандартная история
 *
 * Это стандартная история для компонента Input. Она демонстрирует базовое использование
 * текстового поля с динамическим управлением состоянием для изменений значения и очистки поля.
 * Свойства onChange и onClear передаются для возможности внешнего управления вводом.
 */
export const Default: StoryFn<InputProps> = ({ onChange, onClear, ...args }) => {
    const { value, handleChange, handleClear } = useInputState({
        onChange,
        onClear,
    })

    return (
        <Input
            {...args}
            value={value}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            placeholder="ИНН"
        />
    )
}

/**
 * История с числовым вводом
 *
 * Эта история демонстрирует, как компонент Input работает при использовании для числового ввода.
 * Предопределенное числовое значение используется в качестве начального значения. Также
 * присутствует возможность очистки и обновления поля ввода по мере взаимодействия с ним.
 */
export const Number: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState({
        value: '1234567',
    })

    return (
        <Input
            type="number"
            value={value}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
        />
    )
}

/**
 * История с паролем
 *
 * Эта история иллюстрирует, как компонент Input обрабатывает ввод пароля.
 * Поле использует тип "password", скрывая вводимые символы для повышения безопасности.
 */
export const Password: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState({
        value: 'password',
    })

    return (
        <Input
            value={value}
            type="password"
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
        />
    )
}

/**
 * История с placeholder
 *
 * Эта история показывает, как компонент Input выглядит и ведет себя с заполнителем.
 * Placeholder отображается, когда поле ввода пусто, подсказывая пользователю ожидаемый формат данных.
 */
export const Placeholder: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    return (
        <Input
            value={value}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            placeholder="Имя клиента"
        />
    )
}

/**
 * История с максимальной длиной
 *
 * Эта история демонстрирует использование свойства maxLength в компоненте Input.
 * Поле ввода ограничивает количество символов до 5, и выводится подсказка, информирующая
 * пользователя о лимите символов.
 */
export const MaxLength: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    const MAX_LENGTH = 5

    return (
        <Input
            value={value}
            maxLength={MAX_LENGTH}
            className={styles.input}
            onClear={handleClear}
            onChange={handleChange}
            placeholder="Введите комментарий"
            tip={`Максимальное количество символов: ${MAX_LENGTH}`}
        />
    )
}

/**
 * История с меткой (label)
 *
 * Эта история показывает, как использовать свойство label с компонентом Input.
 * Метка отображается над полем ввода, предоставляя дополнительный контекст о том, какие данные нужно ввести.
 */
export const Label: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    return (
        <Input
            value={value}
            className={styles.input}
            label="Имя клиента"
            onClear={handleClear}
            onChange={handleChange}
        />
    )
}

/**
 * История с подсказкой (hint)
 *
 * Эта история добавляет подсказку к компоненту Input, предоставляя пользователю дополнительную информацию
 * рядом с полем ввода. Подсказка обычно отображается под полем ввода.
 */
export const Hint: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    return (
        <Input
            value={value}
            className={styles.input}
            tip="Это полезная подсказка"
            label="Имя клиента"
            onChange={handleChange}
            onClear={handleClear}
        />
    )
}

/**
 * История с ошибкой
 *
 * Эта история демонстрирует, как показать состояние ошибки для компонента Input.
 * Когда флаг ошибки установлен в true, поле ввода будет отображаться и вести себя так,
 * как будто произошла ошибка, что часто используется для валидации форм.
 */
export const Error: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    return (
        <Input
            value={value}
            className={styles.input}
            tip="Сообщение об ошибке"
            label="Название организации"
            onChange={handleChange}
            onClear={handleClear}
            error
        />
    )
}

/**
 * История с отключенным полем (disabled)
 *
 * Эта история демонстрирует состояние отключенного поля ввода (disabled).
 * Когда поле отключено, оно не интерактивно и отображается с другим стилем, указывая на то,
 * что его нельзя редактировать.
 */
export const Disabled: StoryFn<InputProps> = args => (
    <Input
        disabled
        value="Название компании"
        className={styles.input}
        label="Название компании"
        tip="Введите название компании"
    />
)

/**
 * Мобильная история
 *
 * Эта история демонстрирует, как компонент Input ведет себя в мобильном контексте.
 * В мобильной истории могут применяться специальные параметры, чтобы лучше симулировать
 * пользовательский опыт на мобильных устройствах.
 */
export const Mobile: StoryFn<InputProps> = args => {
    const { value, handleChange, handleClear } = useInputState()

    return <Input value={value} label="Имя клиента" onChange={handleChange} onClear={handleClear} />
}

Mobile.parameters = MOBILE_STORY_PARAMETERS

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {},
    argTypes: INPUT_STORY_ARG_TYPES,
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
} as Meta<InputProps>
