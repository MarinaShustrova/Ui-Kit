import { Text } from '../../text'
import { OptionsType, OptionType } from '../types'
import styles from './styles.module.scss'

export const OPTIONS: OptionsType = [
    {
        label: 'New',
        value: 'created',
    },
    {
        label: 'Signed',
        value: 'signed',
        checked: true,
    },
    {
        label: 'Partially Signed',
        value: 'partially-signed',
    },
    {
        label: 'In Process',
        value: 'processing',
        disabled: true,
        checked: true,
    },
    {
        label: 'Rejected',
        value: 'rejected',
        disabled: true,
    },
    {
        label: 'Accepted',
        value: 'accepted',
        checked: true,
    },
]

export const OPTIONS_FOR_SEARCH_WITH_LONG_LIST = Array.from({ length: 100 })
    .map(() => OPTIONS)
    .flat()

export const ACCOUNTS_OPTIONS: OptionsType = [
    {
        label: 'Phone number +1 555 123 4567',
        content: (
            <div className={styles['content-container']}>
                <Text>Phone number +1 555 123 4567</Text>
            </div>
        ),
    },
    {
        label: 'Phone number +1 555 987 6543',
        checked: true,
    },
    {
        label: 'Phone number +1 555 222 3333',
    },
    {
        label: 'Phone number +1 555 444 5555',
        content: (
            <div className={styles['content-container']}>
                <Text>Phone number +1 555 444 5555</Text>
            </div>
        ),
    },
    {
        label: 'Phone number +1 555 666 7777',
        disabled: true,
    },
    {
        label: 'Phone number +1 555 888 9999',
        checked: true,
    },
    {
        label: 'Phone number +1 555 000 1111',
        checked: true,
        disabled: true,
    },
    {
        label: 'Phone number +1 555 333 4444',
        checked: true,
    },
    {
        label: 'Phone number +1 555 777 8888',
    },
    {
        label: 'Phone number +1 555 222 4444',
    },
    {
        label: 'Phone number +1 555 999 1111',
        disabled: true,
        content: (
            <div className={styles['content-container']}>
                <Text>Phone number +1 555 999 1111</Text>
            </div>
        ),
    },
    {
        label: 'Phone number +1 555 888 6666',
    },
]

/**
 * Needed for displaying option types in the documentation
 */
//@ts-ignore
export const Option = (props: OptionType) => <></>
