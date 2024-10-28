import { useState, ChangeEvent } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { RadioProps, RadioChangeEventData } from '../types'
import { Radio } from '../index'
import { MOBILE_STORY_PARAMETERS, TABLET_STORY_PARAMETERS } from '../../../.storybook/constants'
import { SIZES } from '../constants'
import styles from './styles.module.scss'
import React from 'react'

/**
 * Default Story
 *
 * В этой истории представлен стандартный вариант компонента Radio.
 * Компонент использует состояние checked для отслеживания текущего
 * состояния переключателя. Обработчик handleChange обновляет состояние
 * при изменении. Это пример того, как Radio может выглядеть
 * и функционировать с заданными свойствами.
 */
export const Default: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return <Radio {...args} checked={checked} onChange={handleChange} />
}

Default.parameters = {
    controls: {
        disable: false,
    },
}

Default.argTypes = {
    size: { defaultValue: 'large' },
    dataTestId: {
        table: {
            disable: true,
        },
    },
    className: {
        table: {
            disable: true,
        },
    },
    name: {
        table: {
            disable: true,
        },
    },
    id: {
        table: {
            disable: true,
        },
    },
    value: {
        table: {
            disable: true,
        },
    },
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
}

/**
 * Label Story
 *
 * Эта история показывает Radio с заданной меткой.
 * Здесь используется состояние checked и обработчик handleChange,
 * чтобы показать, как Radio ведет себя при выборе.
 * Это позволяет увидеть, как компонент отображается с текстовой меткой.
 */
export const Label: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return <Radio label="По всем партнерам" checked={checked} onChange={handleChange} />
}

/**
 * Disabled Story
 *
 * В этой истории демонстрируется Radio с установленным
 * флагом disabled. Компонент не будет реагировать на
 * изменения, что позволяет увидеть, как он выглядит в отключенном состоянии.
 */
export const Disabled: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return <Radio label="По всем партнерам" checked={checked} onChange={handleChange} disabled />
}

/**
 * Prechecked Story
 *
 * Эта история показывает Radio с установленным значением checked по умолчанию.
 * Она демонстрирует, как компонент отображается, когда он уже выбран.
 */
export const Prechecked: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(true)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return <Radio label="По всем партнерам" checked={checked} onChange={handleChange} />
}

/**
 * Sizes Story
 *
 * В этой истории представлены Radio разных размеров,
 * что позволяет увидеть, как они выглядят и как меняется их размер
 * в зависимости от переданных свойств.
 */
export const Sizes: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Radio
                    key={size}
                    size={size}
                    label="По всем партнерам"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

/**
 * Mobile Story
 *
 * Эта история предназначена для демонстрации поведения
 * компонента Radio на мобильных устройствах.
 * Она использует те же параметры, что и история Sizes,
 * но позволяет проверить, как компонент адаптируется
 * к меньшим экранам и мобильным интерфейсам.
 */
export const Mobile: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Radio
                    key={size}
                    size={size}
                    label="По всем партнерам"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

Mobile.parameters = MOBILE_STORY_PARAMETERS

/**
 * Tablet Story
 *
 * Эта история позволяет протестировать, как компонент
 * Radio ведет себя на планшетах. Она аналогична истории
 * Mobile, что позволяет убедиться в корректности отображения
 * и поведения на устройствах с разным размером экрана.
 */
export const Tablet: StoryFn<RadioProps> = args => {
    const [checked, setChecked] = useState(false)

    const handleChange = (_: ChangeEvent<HTMLInputElement>, { checked }: RadioChangeEventData) => {
        setChecked(checked)
    }

    return (
        <div className={styles.container}>
            {Object.values(SIZES).map(size => (
                <Radio
                    key={size}
                    size={size}
                    label="По всем партнерам"
                    checked={checked}
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}

Tablet.parameters = TABLET_STORY_PARAMETERS

export default {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
    },
} as Meta
