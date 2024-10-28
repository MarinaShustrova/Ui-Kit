import { useState } from 'react'

import styles from './styles.module.scss'

import { useTheme } from '../../../common/context/theme-context'

export const ColorsGroup = ({
    colors,
    title,
    expanded = false,
}: {
    colors: Record<'name' | 'value', string>[]
    title: string
    expanded?: boolean
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded)

    const { theme } = useTheme()
    const titleStyle = {
        color: theme === 'dark' ? 'white' : 'black',
    }

    const colorNameStyle = {
        color: theme === 'dark' ? 'lightgray' : 'black',
    }

    const handleClick = (colorName: string) => {
        window.navigator.clipboard.writeText(`colors.$${colorName}`)
        alert('Название переменной скопировано в буфер обмена')
    }

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            <h3 onClick={toggleExpanded} style={titleStyle}>
                {title} {isExpanded ? '▲' : '▼'}
            </h3>
            {isExpanded && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={titleStyle}>Название</th>
                            <th style={titleStyle}>Значение</th>
                            <th style={titleStyle}>Цвет</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colors.map(({ name, value }) => (
                            <tr
                                onClick={() => handleClick(name)}
                                className={styles['table-row']}
                                key={value}
                            >
                                <td style={colorNameStyle}>{name}</td>
                                <td style={colorNameStyle}>{value}</td>
                                <td>
                                    <div
                                        className={styles.color}
                                        style={{ backgroundColor: value }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
