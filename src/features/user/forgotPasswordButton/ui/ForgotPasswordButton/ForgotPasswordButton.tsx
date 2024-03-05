import { memo, type FC } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { getForgotPasswordRoute } from '@/shared/constants/router'

import styles from './ForgotPasswordButton.module.scss'

interface ForgotPasswordButtonProps {
    className?: string
}

const ForgotPasswordButton: FC<ForgotPasswordButtonProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Link
            className={classNames(styles.ForgotPasswordButton, mods, additionsClasses)}
            to={getForgotPasswordRoute()}
        >
            Forgot your password?
        </Link>
    )
})

export default ForgotPasswordButton
