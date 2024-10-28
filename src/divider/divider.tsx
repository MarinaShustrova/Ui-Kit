import styles from './styles.module.scss'
import { DividerProps } from './types'

export const Divider = ({
    // type = 'horizontal',
    dashed = false,
    title = '',
    orientation = 'center',
    width = '100%',
    // height = '1px',
    gap = '10px',
    opacity = 1,
}: DividerProps) => {
    const dividerClass = dashed ? styles.dashed : styles.solid

    return (
        <div
            className={`${styles.divider}`}
            style={{
                opacity,
                justifyContent:
                    orientation === 'left'
                        ? 'flex-start'
                        : orientation === 'right'
                        ? 'flex-end'
                        : 'center',
            }}
        >
            {/* Линия до текста */}
            {(orientation === 'center' || orientation === 'right') && (
                <div className={`${styles.line} ${dividerClass}`} style={{ width }} />
            )}

            {/* Текст */}
            {title && (
                <span className={styles.text} style={{ margin: `0 ${gap}` }}>
                    {title}
                </span>
            )}

            {/* Линия после текста */}
            {(orientation === 'center' || orientation === 'left') && (
                <div className={`${styles.line} ${dividerClass}`} style={{ width }} />
            )}
        </div>
    )
}
