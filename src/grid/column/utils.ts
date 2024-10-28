import { Offset, Width } from './types'

export const createClassNames = (
    props: Record<string, Offset | Width | undefined>,
    styles: Record<string, string>,
) => {
    const classNames: string[] = []

    Object.entries(props).forEach(([propName, propValue]) => {
        if (!propValue) {
            return
        }

        if (typeof propValue !== 'object') {
            classNames.push(styles[`${propName}-${propValue}`])
        } else {
            Object.entries(propValue).forEach(([breakpoint, responsiveParameterValue]) => {
                classNames.push(styles[`${propName}-${breakpoint}-${responsiveParameterValue}`])
            })
        }
    })

    return classNames
}
