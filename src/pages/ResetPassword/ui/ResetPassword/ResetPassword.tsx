import { memo, type FC } from 'react'

import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/styles/classNames/classNames'
import RootLayout from '@/shared/ui/RootLayout/RootLayout'
import { ResetPasswordForm } from '@/features/user/resetPasswordForm'
import { RedirectingAppLogo } from '@/features/redirectingAppLogo'
import Title from '@/shared/ui/Title/Title'

import styles from './ResetPassword.module.scss'

interface ResetPasswordProps {
    className?: string
}

const ResetPassword: FC<ResetPasswordProps> = memo((props) => {
    const { className } = props

    return (
        <Page>
            <RootLayout className={classNames(styles.ResetPassword, {}, [className])}>
                <RedirectingAppLogo className={styles.appLogo} />
                <Title className={styles.title}>Create new Password?</Title>
                <ResetPasswordForm />
            </RootLayout>
        </Page>
    )
})

export default ResetPassword
