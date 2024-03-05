import { memo, type FC } from 'react'

import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/styles/classNames/classNames'
import RootLayout from '@/shared/ui/RootLayout/RootLayout'
import { ForgotPasswordForm } from '@/features/user/forgotPasswordForm'
import { RedirectingAppLogo } from '@/features/redirectingAppLogo'
import Title from '@/shared/ui/Title/Title'

import styles from './ForgotPassword.module.scss'

interface ForgotPasswordProps {
    className?: string
}

const ForgotPassword: FC<ForgotPasswordProps> = memo((props) => {
    const { className } = props

    return (
        <Page>
            <RootLayout className={classNames(styles.ForgotPassword, {}, [className])}>
                <RedirectingAppLogo className={styles.appLogo} />
                <Title className={styles.title}>Forgot Password?</Title>
                <ForgotPasswordForm />
            </RootLayout>
        </Page>
    )
})

export default ForgotPassword
