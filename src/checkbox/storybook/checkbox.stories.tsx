import { useState, ChangeEvent } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Text } from '../../text'
import { CheckboxProps, ChangeEventCheckboxData } from '../types'
import { Checkbox } from '../index'
import { SIZES } from '../constants'
import { MOBILE_STORY_PARAMETERS, TABLET_STORY_PARAMETERS } from '../../../.storybook/constants'
// import docs from './docs.mdx'
import styles from './styles.module.scss'
import React from 'react'

/**
 * История по умолчанию для компонента Checkbox.
 * В этой истории создается простой чекбокс, состояние которого контролируется с помощью
 * хука useState. При изменении состояния чекбокса, функция handleChange обновляет состояние
 * и вызывает переданный обработчик onChange.
 */
export const Default: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, data: ChangeEventCheckboxData) => {
        setChecked(data.checked)

        args.onChange?.(_, data)
    }

    return <Checkbox {...args} checked={checked} onChange={handleChange} />
}

Default.parameters = {
    controls: {
        disable: false,
    },
}

/**
 * История для демонстрации чекбокса с меткой.
 * Здесь показывается, как можно добавить текстовую метку к чекбоксу. 
 * Метка "Согласовано" отображается рядом с чекбоксом.
 */
export const Label: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return <Checkbox label="Согласовано" checked={checked} onChange={handleChange} />
}

/**
 * История для демонстрации кастомной метки.
 * В этой истории метка может содержать более сложный контент, в данном случае
 * текст с ссылкой. Используется компонент Text для стилизации метки, что позволяет
 * создавать более информативные и привлекательные метки.
 */
export const CustomLabel: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return (
        <Checkbox {...args} checked={checked} onChange={handleChange}>
            <Text size="medium">
                С документацией можно ознаокмиться здесь{' '}
                <a href="#" target="_blank">
                    ссылке
                </a>
                .
            </Text>
        </Checkbox>
    )
}

/**
 * История для демонстрации отключенного состояния чекбокса.
 * В этой истории показывается чекбокс с меткой "Согласовано", который нельзя
 * будет активировать. 
 */
export const Disabled: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return <Checkbox label="Согласовано" checked={checked} onChange={handleChange} disabled />
}

/**
 * История для демонстрации заранее отмеченного чекбокса.
 *  Это может быть полезно для форм,
 *  где по умолчанию необходимо установить определенные параметры.
 */
export const Prechecked: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(true)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return <Checkbox label="Согласовано" checked={checked} onChange={handleChange} />
}

/**
 * История для демонстрации различных размеров чекбоксов.
 * В этой истории отображаются все доступные размеры чекбоксов, которые определены
 * в константах. 
 */
export const Sizes: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(true)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Checkbox
                    key={size}
                    size={size}
                    label="Согласовано"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

/**
 * История для мобильной версии чекбоксов.
 * В этой истории мы показываем, как чекбоксы будут выглядеть на мобильных устройствах.
 */
export const Mobile: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(true)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Checkbox
                    key={size}
                    size={size}
                    label="Согласовано"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

Mobile.parameters = MOBILE_STORY_PARAMETERS

/**
 * История для планшетной версии чекбоксов.
 * В этой истории мы демонстрируем отображение чекбоксов на планшетах.
 */
export const Tablet: StoryFn<CheckboxProps> = args => {
    const [checked, setChecked] = useState(true)

    const handleChange = (
        _: ChangeEvent<HTMLInputElement>,
        { checked }: ChangeEventCheckboxData,
    ) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Checkbox
                    key={size}
                    size={size}
                    label="Согласовано"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

Tablet.parameters = TABLET_STORY_PARAMETERS

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        // docs: {
        //     page: docs, 
        // },
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
            argTypesRegex: '^on[A-Z].+',
        },
    },
    argTypes: {
        checked: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
    },
} as Meta

