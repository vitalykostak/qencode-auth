import { type ResetPasswordFormValues } from '../model/types'
import { reset } from '../api/reset'

interface ResetPasswordServiceResponse {
    error?: number
    detail?: string
    isSomethingWentWrong?: boolean
}

export const resetPassword = async (
    values: ResetPasswordFormValues
): Promise<ResetPasswordServiceResponse> => {
    try {
        const res = await reset(values)

        return res
    } catch (error) {
        return {
            isSomethingWentWrong: true
        }
    }
}
