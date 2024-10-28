import React, { createContext, useContext, useState } from 'react'

import darkBackground from '../../assets/img/bg.jpg'
import lightBackground from '../../assets/img/Rectangle 4310.jpg'

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
    backgroundImage: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{
    children: React.ReactNode
    theme?: 'light' | 'dark'
}> = ({ children, theme: initialTheme }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme || 'light')

    const backgroundImage = theme === 'light' ? `url(${lightBackground})` : `url(${darkBackground})`

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, backgroundImage }}>
            <div style={{ backgroundImage, backgroundSize: 'cover' }}>{children}</div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
