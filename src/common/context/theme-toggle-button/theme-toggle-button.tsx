import React from 'react'

import { useTheme } from '../theme-context'

import styles from './styles.module.scss'

const ThemeToggleButton: React.FC = () => {
    const { toggleTheme } = useTheme()

    return (
        <label className={styles.switch}>
            <input type="checkbox" onClick={toggleTheme} />
            <span className={styles.slider + ' ' + styles.round}></span>
        </label>
    )
}

export default ThemeToggleButton


