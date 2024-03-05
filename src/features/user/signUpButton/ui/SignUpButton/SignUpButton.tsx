import { memo, type FC } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './SignUpButton.module.scss'

interface SignUpButtonProps {
    className?: string
}

const SignUpButton: FC<SignUpButtonProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Link className={classNames(styles.SignUpButton, mods, additionsClasses)} to={'#'}>
            Sign up
        </Link>
    )
})

export default SignUpButton
