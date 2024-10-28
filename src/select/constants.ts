export const POSITIONS = {
    TOP_START: 'top-start',
    TOP: 'top',
    TOP_END: 'top-end',
    RIGHT_START: 'right-start',
    RIGHT: 'right',
    RIGHT_END: 'right-end',
    BOTTOM_START: 'bottom-start',
    BOTTOM: 'bottom',
    BOTTOM_END: 'bottom-end',
    LEFT_START: 'left-start',
    LEFT: 'left',
    LEFT_END: 'left-end',
} as const

export const DEFAULT_POSITIONS = [POSITIONS.BOTTOM_START, POSITIONS.TOP_START]

export const SELECT_TYPES = {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
} as const

export const NOT_FOUND_LABEL_TEXT = 'Ничего не найдено'

export const SELECT_POSITIONS = {
    [POSITIONS.BOTTOM_END]: POSITIONS.BOTTOM_END,
    [POSITIONS.BOTTOM_START]: POSITIONS.BOTTOM_START,
    [POSITIONS.BOTTOM]: POSITIONS.BOTTOM,
    [POSITIONS.TOP_END]: POSITIONS.TOP_END,
    [POSITIONS.TOP_START]: POSITIONS.TOP_START,
    [POSITIONS.TOP]: POSITIONS.TOP,
} as const
