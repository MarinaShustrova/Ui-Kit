import cn from 'classnames'
import { forwardRef } from 'react'
import { ButtonProps } from './types'
import { BTN_TYPES_WITH_LOADER } from './constants'
import styles from './styles.module.scss'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            id,
            type = 'primary',
            size = 'medium',
            disabled = false,
            isLoading = false,
            htmlType = 'submit',
            children,
            className,
            icon,
            onBlur,
            onFocus,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...otherAttributes
        },
        forwardedRef,
    ) => {
        const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
            onMouseEnter?.(event)
        }

        const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
            onFocus?.(event)
        }

        const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
            onBlur?.(event)
        }

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            onClick?.(event)
        }

        const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
            onMouseLeave?.(event)
        }

        const isLoaderVisible = isLoading && BTN_TYPES_WITH_LOADER.includes(type)

        const buttonClassnames = cn(
            styles.button,
            styles[type],
            [styles[size]],
            className,
        )

        const content = isLoaderVisible ? (
            <>
                {children}
                {/* <span className={styles['loader-wrapper']}>
                    <span className={styles.loader} />
                </span> */}
            </>
        ) : (
            <>
                {icon && <span className={styles.icon}>{icon}</span>}
                {children}
            </>
        )

        return (
            <div>
                <button
                    {...otherAttributes}
                    id={id}
                    type={htmlType}
                    disabled={disabled || isLoaderVisible}
                    className={buttonClassnames}
                    onBlur={handleBlur}
                    onClick={handleClick}
                    onFocus={handleFocus}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={forwardedRef}
                >
                    {content}
                </button>
            </div>
        )
    },
)
