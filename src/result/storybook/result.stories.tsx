import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Result } from '../index'
// @ts-ignore
import { ReactComponent as Result403 } from '../../assets/img/result403.svg'
// @ts-ignore
import { ReactComponent as Result401 } from '../../assets/img/error401.svg'
// @ts-ignore
import { ReactComponent as Result503 } from '../../assets/img/error503.svg'
// @ts-ignore
import { ReactComponent as ResultBlocked } from '../../assets/img/red-blue-circle.svg'
// @ts-ignore
import { ReactComponent as SubmissionFailed } from '../../assets/img/red-close-circle.svg'
// @ts-ignore
import { ReactComponent as CloseIcon } from '../../assets/img/black-circle-close.svg'
import { Button } from '../../button'

/**
 * 403 Story
 *
 * Здесь используется кастомная иконка в верхней части компонента Result отображающая ошибку 403.
 */
export const Default: StoryFn = args => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Извините,вы не авторизованы"
            icon={<Result401 />}
            extra={<Button type="primary">Вернуться</Button>}
        />
    )
}

/**
 * Default Story
 *
 * Здесь используется кастомная иконка в верхней части компонента Result отображающая ошибку 403.
 */
export const Forbidden: StoryFn = args => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Доступ к этой странице запрещен!"
            icon={<Result403 />}
            extra={<Button type="primary">Вернуться</Button>}
        />
    )
}

/**
 *  ServiceTemporarilyUnavailable Story
 *
 * Здесь используется кастомная иконка в верхней части компонента Result отображающая ошибку 503.
 */
export const ServiceTemporarilyUnavailable: StoryFn = args => {
    return (
        <Result
            status="503"
            title="503"
            subTitle="Сервер временно недоступен"
            icon={<Result503 />}
            extra={<Button type="primary">Вернуться</Button>}
        />
    )
}

/**
 *  BlockedOperation Story
 *
 * Здесь используется кастомная иконка в верхней части компонента Result отображающая .
 */
export const BlockedOperation: StoryFn = args => {
    return (
        <Result
            status="denied"
            title="Ваша операция была отменена"
            icon={<ResultBlocked />}
            extra={<Button type="primary">Вернуться</Button>}
        />
    )
}

/**
 * История с ошибкой отправки.
 *
 * Здесь показываются сообщения об ошибках и действия.
 */
// export const SubmissionError: StoryFn = (args) => {
//     return (
//         <Result
//             status="error"
//             title="Submission Failed"
//             icon={<SubmissionFailed />}
//             subTitle="Please check and modify the following information before resubmitting."
//             extra={[
//                 <Button type="primary" key="console">Go Console</Button>,
//                 <Button key="buy">Buy Again</Button>,
//             ]}
//         >
//             <div className="desc">
//                 <p>
//                     <strong style={{ fontSize: 16 }}>
//                         The content you submitted has the following error:
//                     </strong>
//                 </p>
//                 <p>
//                     <CloseIcon className="site-result-demo-error-icon" /> Your account has been frozen.{' '}
//                     <a href="#">Thaw immediately &gt;</a>
//                 </p>
//                 <p>
//                     <CloseIcon className="site-result-demo-error-icon" /> Your account is not yet eligible to apply.{' '}
//                     <a href="#">Apply Unlock &gt;</a>
//                 </p>
//             </div>
//         </Result>
//     );
// };

const meta: Meta = {
    title: 'Components/Result',
    component: Result,
}

export default meta
