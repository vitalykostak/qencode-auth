import { isEmailValid } from '@/shared/lib/dataValidation'

import { type ForgotPasswordFormValues } from '../model/types'

export const validateForgotPasswordForm = (values: ForgotPasswordFormValues) => {
    const errors: Partial<ForgotPasswordFormValues> = {}

    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!isEmailValid(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}
