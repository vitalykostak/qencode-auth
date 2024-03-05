import { memo, type FC, useCallback, useState } from 'react'
import { Form, Formik, type FormikHelpers } from 'formik'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'

import { validateResetPasswordForm } from '../../lib/formValidation'
import { type ResetPasswordFormValues } from '../../model/types'
import { resetPassword } from '../../services/resetPassword'

import styles from './ResetPasswordForm.module.scss'
const initialValues: ResetPasswordFormValues = { password: '', confirmPassword: '' }

interface ResetPasswordFormProps {
    className?: string
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = memo((props) => {
    const { className } = props

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
    const togglePassHidden = useCallback(() => {
        setIsPasswordHidden((prev) => !prev)
    }, [])

    const [isConfirmPasswordHidden, setIsConfirmPasswordHiddenHidden] = useState<boolean>(true)
    const toggleConfirmPassHidden = useCallback(() => {
        setIsConfirmPasswordHiddenHidden((prev) => !prev)
    }, [])

    const onSubmit = useCallback(
        async (
            values: ResetPasswordFormValues,
            formikHelpers: FormikHelpers<ResetPasswordFormValues>
        ) => {
            const { setSubmitting, setErrors } = formikHelpers
            const res = await resetPassword(values)
            if (res.isSomethingWentWrong) {
                setErrors({
                    password: 'Something went wrong',
                    confirmPassword: 'Something went wrong'
                })
            }
            setSubmitting(false)
        },
        []
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <Formik
            initialValues={initialValues}
            validate={validateResetPasswordForm}
            onSubmit={onSubmit}
        >
            {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                errors,
                isValid
            }) => (
                <Form
                    className={classNames(styles.ResetPasswordForm, mods, additionsClasses)}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.fieldsContainer}>
                        <Input
                            label="Password"
                            required
                            autoCorrect="off"
                            spellCheck="false"
                            autoComplete="off"
                            placeholder="Password"
                            type={isPasswordHidden ? 'password' : 'text'}
                            name="password"
                            rightAddon={<EyeIcon onClick={togglePassHidden} cursor="pointer" />}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched.password && errors.password ? errors.password : undefined
                            }
                        />
                        <Input
                            label="Confirm Password"
                            required
                            autoCorrect="off"
                            spellCheck="false"
                            autoComplete="off"
                            placeholder="Password"
                            type={isConfirmPasswordHidden ? 'password' : 'text'}
                            name="confirmPassword"
                            rightAddon={
                                <EyeIcon onClick={toggleConfirmPassHidden} cursor="pointer" />
                            }
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched.confirmPassword && errors.confirmPassword
                                    ? errors.confirmPassword
                                    : undefined
                            }
                        />
                    </div>
                    <Button
                        type="submit"
                        className={styles.buttonContainer}
                        disabled={isSubmitting || !isValid}
                        loading={isSubmitting}
                    >
                        Reset Password
                    </Button>
                </Form>
            )}
        </Formik>
    )
})

export default ResetPasswordForm
