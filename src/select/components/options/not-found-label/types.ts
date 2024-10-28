import { SelectOptionsProps } from '../types'

export type NotFoundLabelProps = Pick<SelectOptionsProps, 'searchValue'> & {
    text: string
}
