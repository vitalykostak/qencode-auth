import { $api } from '@/shared/api/api'

interface ResetPasswordProps {
    password: string
    confirmPassword: string
}

interface ResetPasswordResponse {
    error: number
    detail: string
}

export const reset = async (values: ResetPasswordProps) => {
    const res = await $api.post<ResetPasswordProps, ResetPasswordResponse>(
        'https://auth-qa.qencode.com/v1/auth/password-set',
        values,
        {
            transformRequest: (data: ResetPasswordProps) => {
                return JSON.stringify({
                    password: data.password,
                    password_confirm: data.confirmPassword
                })
            }
        }
    )

    return res
}
