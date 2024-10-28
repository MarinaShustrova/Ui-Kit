import cn from 'classnames'
import { forwardRef } from 'react'
import { OptionLabel } from './option-label'
import { SingleOptionProps } from './types'
import styles from './styles.module.scss'

export const SingleOption = forwardRef<HTMLLIElement, SingleOptionProps>(
    (
        { id, index, option, searchable, searchValue, hasA11yFocus, onClick },
        //@ts-ignore
        ref,
    ) => {
        const { label, content, additionalLabel, disabled = false, ...rpTrackerAttributes } = option

        return (
            <div>
                <li
                    {...rpTrackerAttributes}
                    id={id}
                    role="option"
                    onClick={!disabled ? onClick : undefined}
                    aria-selected={hasA11yFocus}
                    aria-disabled={disabled}
                    className={cn(styles.option, {
                        [styles.disabled]: disabled,
                        [styles['has-a11y-focus']]: hasA11yFocus,
                    })}
                    data-index={index}
                >
                    <div className={styles.label}>
                        <OptionLabel
                            label={label}
                            content={content}
                            disabled={disabled}
                            searchable={searchable}
                            searchValue={searchValue}
                            showCheckbox={false}
                        />
                    </div>

                    {!content && additionalLabel && (
                        <div
                            className={cn(styles['additional-label'], {
                                [styles.disabled]: disabled,
                            })}
                        >
                            {additionalLabel}
                        </div>
                    )}
                </li>
            </div>
        )
    },
)
