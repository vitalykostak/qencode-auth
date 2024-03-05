import { type RouteProps } from 'react-router-dom'

import {
    AppRoutes,
    getForgotPasswordRoute,
    getMainRoute,
    getNotFoundRoute,
    getResetPasswordRoute
} from '@/shared/constants/router'
import { MainPage } from '@/pages/Main'
import { ForgotPasswordPage } from '@/pages/ForgotPassword'
import { ResetPasswordPage } from '@/pages/ResetPassword'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />
    },
    [AppRoutes.FORGOT_PASSWORD]: {
        path: getForgotPasswordRoute(),
        element: <ForgotPasswordPage />
    },
    [AppRoutes.RESET_PASSWORD]: {
        path: getResetPasswordRoute(),
        element: <ResetPasswordPage />
    },

    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <div>Not Found Page</div>
    }
}
