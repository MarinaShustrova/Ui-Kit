import React from 'react'
import styles from './styles.module.scss'
import { ResultProps } from './types'

export const Result: React.FC<ResultProps> = ({
    status = 'info',
    title,
    subTitle,
    extra,
    image,
    icon,
}) => {
    const renderIcon = () => {
        if (icon) {
            return <div className={styles.icon}>{icon}</div>
        }
        switch (status) {
            case 'success':
                return <div className={`${styles.icon} ${styles.success}`}>✔️</div>
            case 'error':
                return <div className={`${styles.icon} ${styles.error}`}>❌</div>
            case 'warning':
                return <div className={`${styles.icon} ${styles.warning}`}>⚠️</div>
            case 'info':
            default:
                return <div className={`${styles.icon} ${styles.info}`}>ℹ️</div>
        }
    }

    return (
        <div className={`${styles.result} ${styles[`result-${status}`]}`}>
            {image && <img src={image} alt="Result Illustration" className={styles.image} />}
            {renderIcon()}
            <h1 className={styles.title}>{title}</h1>
            {subTitle && <p className={styles.subtitle}>{subTitle}</p>}
            {extra && <div className={styles.extra}>{extra}</div>}
        </div>
    )
}
