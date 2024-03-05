import { memo, type FC, useCallback } from 'react'
import { Form, Formik, type FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import { getResetPasswordRoute } from '@/shared/constants/router'

import { type ForgotPasswordFormValues } from '../../model/types'
import { validateForgotPasswordForm } from '../../lib/formValidation'

import styles from './ForgotPasswordForm.module.scss'

const initialValues: ForgotPasswordFormValues = { email: '' }

interface ForgotPasswordFormProps {
    className?: string
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = memo((props) => {
    const { className } = props

    const navigate = useNavigate()

    const onSubmit = useCallback(
        async (
            _: ForgotPasswordFormValues,
            formikHelpers: FormikHelpers<ForgotPasswordFormValues>
        ) => {
            const { setSubmitting } = formikHelpers
            navigate(getResetPasswordRoute())
            setSubmitting(false)
        },
        [navigate]
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForgotPasswordForm}
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
                isValid,
                resetForm
            }) => (
                <Form
                    className={classNames(styles.ForgotPasswordForm, mods, additionsClasses)}
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email ? errors.email : undefined}
                        required
                        autoCorrect="off"
                    />
                    <div className={styles.buttonsContainer}>
                        <Button
                            type="submit"
                            className={styles.buttonContainer}
                            disabled={isSubmitting || !isValid}
                        >
                            Send
                        </Button>
                        <Button
                            type="button"
                            className={styles.buttonContainer}
                            variant="outline"
                            onClick={() => {
                                resetForm()
                            }}
                            loading={isSubmitting}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
})

export default ForgotPasswordForm
