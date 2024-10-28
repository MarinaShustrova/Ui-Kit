import { OptionType } from '../../../../types'
import { SelectOptionsProps } from '../../types'
import { SingleOptionProps } from '../types'

export type OptionLabelProps = Pick<SelectOptionsProps, 'searchable' | 'searchValue'> &
    Pick<OptionType, 'content' | 'label' | 'checked' | 'disabled'> &
    Pick<SingleOptionProps, 'showCheckbox'>
