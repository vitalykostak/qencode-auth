export enum AppRoutes {
    MAIN = 'MAIN',
    FORGOT_PASSWORD = 'FORGOT_PASSWORD',
    RESET_PASSWORD = 'RESET_PASSWORD',

    NOT_FOUND = 'NOT_FOUND'
}

export const getMainRoute = () => '/'
export const getForgotPasswordRoute = () => '/forgot-password'
export const getResetPasswordRoute = () => '/reset-password'

export const getNotFoundRoute = () => '*'
