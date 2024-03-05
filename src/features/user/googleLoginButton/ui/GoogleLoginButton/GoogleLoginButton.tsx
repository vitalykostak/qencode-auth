import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Button from '@/shared/ui/Button/Button'

import GoogleIcon from '../../assets/icons/google-icon.svg'

import styles from './GoogleLoginButton.module.scss'

interface GoogleLoginButtonProps {
    className?: string
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Button
            className={classNames('', mods, additionsClasses)}
            variant="outline"
            radius="small"
            disabled
        >
            <div className={styles.content}>
                <GoogleIcon />
                Google
            </div>
        </Button>
    )
})

export default GoogleLoginButton
