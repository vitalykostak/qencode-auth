import { memo, type FC } from 'react'

import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { GoogleLoginButton } from '@/features/user/googleLoginButton'
import { GitHubLoginButton } from '@/features/user/gitHubLoginButton'
import TextLineDivider from '@/shared/ui/TextLineDivider/TextLineDivider'
import { LoginForm } from '@/features/user/loginForm'
import { ForgotPasswordButton } from '@/features/user/forgotPasswordButton'
import { SignUpButton } from '@/features/user/signUpButton'
import RootLayout from '@/shared/ui/RootLayout/RootLayout'
import AppLogo from '@/shared/ui/AppLogo/AppLogo'
import Title from '@/shared/ui/Title/Title'

import styles from './Main.module.scss'

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = memo((props) => {
    const { className } = props

    return (
        <Page>
            <RootLayout className={classNames(styles.Main, {}, [className])}>
                <AppLogo className={styles.appLogo} />
                <Title className={styles.title}>Log in to your account</Title>
                <div className={styles.externalAuthActionsContainer}>
                    <GoogleLoginButton />
                    <GitHubLoginButton />
                </div>
                <TextLineDivider className={styles.textLineDividerContainer}>Or</TextLineDivider>
                <LoginForm
                    loginFormActions={{
                        passwordRecoveryAction: <ForgotPasswordButton />,
                        signUpAction: (
                            <div className={styles.signUpActionContainer}>
                                <span className={styles.text}>Is your company new to Qencode?</span>
                                &nbsp;
                                <SignUpButton />
                            </div>
                        )
                    }}
                />
            </RootLayout>
        </Page>
    )
})

export default Main
