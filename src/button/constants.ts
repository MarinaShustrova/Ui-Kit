import { ButtonType } from './types'

export const BTN_TYPES = {
    BTN_PRIMARY: 'primary',
    BTN_SECONDARY: 'secondary',
    BTN_DASHED: 'dashed',
    BTN_DASHED_DANGER: 'dashed-danger',
    BTN_DASHED_NEUTRAL: 'dashed-neutral',
    BTN_LINK: 'link',
    BTN_LINK_NEUTRAL: 'link-neutral',
    BTN_LINK_DANGER: 'link-danger',
    BTN_TEXT: 'text',
    BTN_TEXT_NEUTRAL: 'text-neutral',
    BTN_TEXT_DANGER: 'text-danger',
} as const

export const BTN_SIZES = {
    BTN_SMALL: 'small',
    BTN_MEDIUM: 'medium',
    BTN_LARGE: 'large',
} as const

export const BTN_TYPES_WITH_LOADER = [
    BTN_TYPES.BTN_PRIMARY,
    BTN_TYPES.BTN_SECONDARY,
    BTN_TYPES.BTN_DASHED,
    BTN_TYPES.BTN_DASHED_DANGER,
    BTN_TYPES.BTN_DASHED_NEUTRAL,
] as ButtonType[]
