import { isUserPasswordValid } from '@/entities/user'
import { isEmailValid } from '@/shared/lib/dataValidation'

import { type LoginFormValues } from '../model/types'

export const validateLoginForm = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {}

    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!isEmailValid(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (!isUserPasswordValid(values.password)) {
        errors.password = 'Password is too short'
    }

    return errors
}
