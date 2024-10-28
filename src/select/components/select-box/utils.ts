import { Position, Side } from '../../types'
import { SelectBoxProps } from './types'

export const getListBoxPositions = (
    alignmentFromProps: SelectBoxProps['listBoxAlignment'] = 'start',
) => {
    const sides: Side[] = ['bottom', 'top']

    const positions: Position[] = sides.map(side => {
        if (alignmentFromProps === 'center') {
            return side
        }

        const position = `${side}-${alignmentFromProps}` as const

        return position
    })

    return positions
}
