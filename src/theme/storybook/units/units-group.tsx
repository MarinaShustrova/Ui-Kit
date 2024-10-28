import { useState } from 'react'

import styles from './styles.module.scss'

export const UnitsGroup = ({
    units,
    title,
    expanded = false,
}: {
    units: Record<'name' | 'value', string>[]
    title: string
    expanded?: boolean
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded)

    const handleClick = (unitName: string) => {
        window.navigator.clipboard.writeText(`units.$${unitName}`)
    }

    return (
        <div className={styles['units-group']}>
            <div className={styles['accordion-header']} onClick={() => setIsExpanded(!isExpanded)}>
                <h3>{title}</h3>
                <button className={styles['toggle-button']}>{isExpanded ? '−' : '+'}</button>
            </div>

            {isExpanded && (
                <div className={styles['unit-list']}>
                    <div className={styles['unit-header']}>
                        <div className={styles['unit-name-header']}>Название</div>
                        <div className={styles['unit-value-header']}>Значение</div>
                    </div>
                    {units.map(({ name, value }) => (
                        <div
                            className={styles['unit-row']}
                            key={value}
                            onClick={() => handleClick(name)}
                        >
                            <div className={styles['unit-name']}>{name}</div>
                            <div className={styles['unit-value']}>{value}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
