import { useCallback, useRef } from 'react'
import { useCurrentValueRef } from './use-current-value-ref'

/**
 * Хук useAnimationFrameCallback управляет вызовом переданного
 * колбека в следующем кадре анимации с использованием
 * функции requestAnimationFrame. Это полезно для оптимизации
 * производительности и обеспечения плавности анимации,
 * позволяя выполнять обновления только в нужный момент.
 *
 * Как это работает:
 * - Внутри хука создается реф `frame`, который будет хранить
 * идентификатор текущего кадра анимации, возвращаемый
 * функцией requestAnimationFrame.
 * - Хук также использует `useCurrentValueRef` для хранения
 * последнего переданного колбека `callback`, чтобы гарантировать,
 * что вызывается актуальная версия колбека при каждом кадре.
 * - Функция `updateOnNextFrame` создается с использованием
 * `useCallback`. При каждом её вызове сначала отменяется
 * предыдущий кадр анимации с помощью cancelAnimationFrame,
 * затем регистрируется новый кадр с помощью requestAnimationFrame,
 * который вызывает актуальный колбек.
 *
 * Этот хук можно использовать, например, в анимациях,
 * обработчиках событий прокрутки или при выполнении
 * обновлений состояния, требующих высокой производительности
 * и плавности.
 *
 * @param callback - функция, которая будет вызвана в следующем
 * кадре анимации.
 * @returns Функция, которую можно вызывать для обновления
 * колбека на следующем кадре анимации.
 */
export const useAnimationFrameCallback = (callback: () => void) => {
    const frame = useRef(0)
    const latestCallbackRef = useCurrentValueRef(callback)

    const updateOnNextFrame = useCallback(() => {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(latestCallbackRef.current)
    }, [latestCallbackRef])

    return updateOnNextFrame
}
