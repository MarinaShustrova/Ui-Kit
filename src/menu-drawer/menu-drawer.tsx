import React from 'react'
import styles from './styles.module.scss'
import { MenuDrawerProps } from './types'

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ items, activeItem, onKeyDown }) => {
    return (
        <div className={styles.menuDrawer} onKeyDown={onKeyDown}>
            {items.map(
                (item, index) =>
                    !item.hidden && (
                        <div
                            key={index}
                            className={`${styles.menuItem} ${
                                index === activeItem ? styles.active : ''
                            }`}
                            onClick={item.onClick}
                            onMouseEnter={item.onHover}
                            style={item.disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}
                        >
                            <div className={styles.iconWrapper}>{item.icon}</div>
                            <div className={styles.textWrapper}>{item.text}</div>
                        </div>
                    ),
            )}
        </div>
    )
}
