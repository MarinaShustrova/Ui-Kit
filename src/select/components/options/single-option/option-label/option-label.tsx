import { ReactNode } from 'react'
import { Text } from '../../../../../text'
import { OptionLabelProps } from './types'
import { MultilineLabel } from './multiline-label'
import styles from './styles.module.scss'

export const OptionLabel = ({
    label,
    content,
    searchable,
    checked,
    showCheckbox,
    disabled,
    searchValue,
}: OptionLabelProps): JSX.Element => {
    if (disabled) {
        if (content) {
            return <div className={styles.disabled}>{content}</div>
        }

        return <MultilineLabel className={styles.disabled}>{label}</MultilineLabel>
    }

    if (checked && !showCheckbox) {
        if (content) {
            return <div>{content}</div>
        }

        return <MultilineLabel weight="medium">{label}</MultilineLabel>
    }

    if (content) {
        return <>{content}</>
    }

    if (!searchable) {
        return <MultilineLabel>{label}</MultilineLabel>
    }

    if (searchValue && label.toLowerCase().includes(searchValue)) {
        const splittedLabel: ReactNode[] = label.split('')

        const substrings: { position: number; element: ReactNode }[] = []

        let startIndex = 0

        while (splittedLabel.slice(startIndex).join('').toLowerCase().includes(searchValue)) {
            startIndex = splittedLabel.join('').toLowerCase().indexOf(searchValue)

            if (startIndex < 0) {
                break
            }

            const substring = splittedLabel.splice(startIndex, searchValue.length)

            const formattedSubstringElement = (
                <Text
                    className={styles['match-substring']}
                    key={`${substring}-${substrings.length}`}
                >
                    {substring.join('')}
                </Text>
            )

            substrings.push({
                element: formattedSubstringElement,
                position: startIndex,
            })
        }

        substrings.reverse().forEach(({ element, position }) => {
            splittedLabel.splice(position, 0, element)
        })

        return <MultilineLabel>{splittedLabel}</MultilineLabel>
    }

    return <MultilineLabel>{label}</MultilineLabel>
}
