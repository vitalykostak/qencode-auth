import { memo, type FC, useState, useCallback, type ReactNode } from 'react'
import { Form, Formik, type FormikHelpers } from 'formik'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Input from '@/shared/ui/Input/Input'
import Button from '@/shared/ui/Button/Button'
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'

import { type LoginFormValues } from '../../model/types'
import { validateLoginForm } from '../../lib/formValidation'
import { loginUser } from '../../model/services/loginUser'

import styles from './LoginForm.module.scss'

const initialValues: LoginFormValues = { email: '', password: '' }

interface LoginFormActions {
    passwordRecoveryAction?: ReactNode
    signUpAction?: ReactNode
}

interface LoginFormProps {
    className?: string
    loginFormActions?: LoginFormActions
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, loginFormActions } = props

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
    const togglePassHidden = useCallback(() => {
        setIsPasswordHidden((prev) => !prev)
    }, [])

    const onSubmit = useCallback(
        async (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => {
            const { setSubmitting, setErrors } = formikHelpers
            const res = await loginUser(values)
            setSubmitting(false)
            if (res.isSomethingWentWrong) {
                // TODO Show tost or so..
                setErrors({ email: 'Something went wrong', password: 'Something went wrong' })
                return undefined
            }

            if (res.errors) {
                setErrors(res.errors)
            }
        },
        []
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <Formik initialValues={initialValues} validate={validateLoginForm} onSubmit={onSubmit}>
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
                    className={classNames(styles.LoginForm, mods, additionsClasses)}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.fieldsContainer}>
                        <Input
                            placeholder="Work Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && errors.email ? errors.email : undefined}
                            required
                            autoCorrect="off"
                        />
                        <Input
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
                    </div>
                    {loginFormActions?.passwordRecoveryAction && (
                        <div className={styles.passwordRecoveryActionContainer}>
                            {loginFormActions?.passwordRecoveryAction}
                        </div>
                    )}
                    <Button
                        type="submit"
                        className={styles.buttonContainer}
                        disabled={isSubmitting || !isValid}
                        loading={isSubmitting}
                    >
                        Log in to Qencode
                    </Button>
                    {loginFormActions?.signUpAction && (
                        <div className={styles.signUpActionContainer}>
                            {loginFormActions?.signUpAction}
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    )
})

export default LoginForm
