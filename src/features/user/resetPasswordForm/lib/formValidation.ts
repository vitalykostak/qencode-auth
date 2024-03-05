import { isUserPasswordValid } from '@/entities/user'

import { type ResetPasswordFormValues } from '../model/types'

export const validateResetPasswordForm = (values: ResetPasswordFormValues) => {
    const errors: Partial<ResetPasswordFormValues> = {}

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (!isUserPasswordValid(values.password)) {
        errors.password = 'Password is too short'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required'
    } else if (!isUserPasswordValid(values.confirmPassword)) {
        errors.confirmPassword = 'Confirm password is too short'
    }

    if (!Object.values(errors).length && values.password !== values.confirmPassword) {
        errors.password = 'Passwords do not match'
        errors.confirmPassword = 'Passwords do not match'
    }

    return errors
}
