import { AxiosError } from 'axios'

import { ACCESS_TOKEN } from '@/shared/constants/localStorage'

import { login } from '../../api/login'
import { type LoginFormValues } from '../types'

interface LoginUserServiceResponse {
    accessToken?: string
    isSomethingWentWrong?: boolean
    errors?: {
        email?: string
        password?: string
    }
}

export const loginUser = async (values: LoginFormValues): Promise<LoginUserServiceResponse> => {
    try {
        const res = await login(values)
        localStorage.setItem(ACCESS_TOKEN, res.access_token)
        return {
            accessToken: res.access_token
        }
        // NOTE! res.refresh_token should be in httpOnly cookie
    } catch (error) {
        if (!(error instanceof AxiosError)) {
            return {
                isSomethingWentWrong: true
            }
        }

        // TODO Add other fields errors

        const emailError =
            error.response?.status === 401
                ? error?.response?.data?.detail || 'Invalid email'
                : undefined

        if (emailError) {
            return {
                errors: { email: emailError }
            }
        }

        return {
            isSomethingWentWrong: true
        }
    }
}
