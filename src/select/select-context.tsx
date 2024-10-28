import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

type SelectContextType = {
    activeOptionId: string | undefined
    setKeyboardFocusedOptionIndex(index: number | undefined): void
    listboxId: string
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)

export const useCustomSelectContext = (): SelectContextType => {
    const context = useContext(SelectContext)

    if (context === undefined) {
        return {
            activeOptionId: '',
            listboxId: '',
            setKeyboardFocusedOptionIndex: () => {},
        }
    }

    return context
}

export const CustomSelectContextProvider = ({
    id,
    children,
}: {
    id: string
    children: ReactNode
}) => {
    const [keyboardFocusedOptionIndex, setKeyboardFocusedOptionIndex] = useState<
        number | undefined
    >(undefined)

    const listboxId = `${id}-select-popup`

    const contextValue: SelectContextType = useMemo(
        () => ({
            activeOptionId: keyboardFocusedOptionIndex
                ? `${listboxId}-${keyboardFocusedOptionIndex}`
                : undefined,
            listboxId: listboxId,
            setKeyboardFocusedOptionIndex,
        }),
        [listboxId, keyboardFocusedOptionIndex],
    )

    return <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>
}
