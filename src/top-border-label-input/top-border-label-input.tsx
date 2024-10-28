import {
    useRef,
    useState,
    useEffect,
    forwardRef,
    MouseEvent,
    FocusEvent,
    ChangeEvent,
    KeyboardEvent,
} from 'react'
import cn from 'classnames'
import { ReactComponent as CloseIcon } from '../assets/img/close.svg'
import { combineRefs } from '../common/utils/combine-refs'
import { Tip } from './components/tip'
import { IconInput } from './components/icon-input'
import { TOP_BORDER_LABEL_INPUT_TYPES } from './constants'
import { InputRef, InputType, TopBorderLabelInputProps, IconPressEvent, CustomIcon } from './types'
import styles from './styles.module.scss'

export const TopBorderLabelInput = forwardRef<InputRef, TopBorderLabelInputProps>(
    (
        {
            id,
            name,
            tip,
            role,
            label,
            type = TOP_BORDER_LABEL_INPUT_TYPES.TEXT,
            value,
            leftIcon,
            rightIcon,
            className,
            maxLength,
            placeholder,
            error = false,
            required = false,
            disabled = false,
            clearable = true,
            isClearIconVisible,
            autoCapitalize = 'on',
            readOnly,
            onHover,
            onFocus,
            onChange,
            onKeyDown,
            onBlur,
            onClear,
            onCopy,
            onPaste,
            onClick,
            ...restProps
        },
        forwardedRef,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null)
        const [hovered, setHover] = useState<boolean>(false)
        const [focused, setFocus] = useState<boolean>(false)
        const [inputType, setInputType] = useState<InputType>(type)

        const isFilled = value != null && value.toString().length > 0

        const commonIconProps = {
            inputHovered: hovered,
            inputFocused: focused,
            inputDisabled: disabled,
        }

        useEffect(() => setInputType(type), [type])

        const handleMouseEnter = (event: MouseEvent<HTMLInputElement>) => {
            setHover(true)
            onHover?.(event)
        }

        const handleMouseLeave = () => {
            setHover(false)
        }

        const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
            setFocus(true)
            onFocus?.(event)
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event)
        }

        const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (inputType === 'number' && event.key === 'e') {
                event.preventDefault()

                return
            }

            onKeyDown?.(event)
        }

        const handleClear = (event: IconPressEvent) => {
            onClear?.(event)

            window.requestAnimationFrame(() => {
                inputRef.current?.focus()
            })
        }

        const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            setFocus(false)
            onBlur?.(event)
        }
        const rightIconComponent = (() => {
            let rightIconProps: CustomIcon | null = null

            const needClearIcon =
                isClearIconVisible !== undefined
                    ? isClearIconVisible
                    : clearable && onClear && isFilled && !disabled

            if (rightIcon) {
                rightIconProps = rightIcon
            } else if (needClearIcon) {
                rightIconProps = {
                    icon: <CloseIcon />,
                    autoHide: true,
                    onIconPress: handleClear,
                }
            }

            return (
                rightIconProps && (
                    <IconInput
                        className={styles['right-icon']}
                        {...rightIconProps}
                        {...commonIconProps}
                    />
                )
            )
        })()

        const handleLabelTextMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
            event.preventDefault()
        }

        const containerClassNames = cn(
            styles.container,
            {
                [styles['with-left-icon']]: leftIcon,
                [styles['with-right-icon']]:
                    rightIconComponent || (!disabled && clearable && onClear),
            },
            className,
        )

        const inputClassNames = cn(styles.input, {
            [styles.labeled]: label,
            [styles.error]: error && !disabled,
        })

        const labelClassNames = cn(styles.label, {
            [styles[`${disabled ? 'gray' : 'light'}-ellipsis`]]: !focused,
            [styles.disabled]: disabled,
            [styles['floated-label-blur']]: focused || isFilled,
        })

        const labelTextClassNames = cn(styles['label-text'], {
            [styles.floated]: (!disabled && focused) || isFilled,
            [styles.disabled]: disabled,
        })

        const isTipVisible = tip && !(error && disabled)

        return (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={containerClassNames}
            >
                {leftIcon && (
                    <IconInput className={styles['left-icon']} {...leftIcon} {...commonIconProps} />
                )}

                <label htmlFor={id} className={labelClassNames}>
                    <span className={styles['label-inner-container']}>
                        {label && (
                            <span
                                className={labelTextClassNames}
                                onMouseDown={handleLabelTextMouseDown}
                            >
                                {label}
                            </span>
                        )}

                        <div ref={combineRefs(forwardedRef, inputRef)}>
                            <input
                                {...restProps}
                                id={id}
                                name={name}
                                role={role}
                                value={value}
                                type={inputType}
                                required={required}
                                disabled={disabled}
                                maxLength={maxLength}
                                className={inputClassNames}
                                autoCapitalize={autoCapitalize}
                                // placeholder={label ? undefined : placeholder}
                                placeholder={placeholder}
                                readOnly={readOnly}
                                onCopy={onCopy}
                                onPaste={onPaste}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={onClick}
                            />
                        </div>
                    </span>
                </label>

                {rightIconComponent}

                {isTipVisible && (
                    <Tip error={error} className={cn(styles.tip, { [styles.disabled]: disabled })}>
                        {tip}
                    </Tip>
                )}
            </div>
        )
    },
)

TopBorderLabelInput.displayName = 'TopBorderLabelInput'
