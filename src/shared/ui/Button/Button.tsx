import { type FC, type ButtonHTMLAttributes } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'outline'
type ButtonRadius = 'small' | 'medium'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    radius?: ButtonRadius
    block?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, variant = 'primary', block = true, ...other } = props

    const mods = {
        [styles.block]: block
    }

    const additionsClasses = [className, styles[variant]]

    return (
        <button className={classNames(styles.Button, mods, additionsClasses)} {...other}>
            {children}
        </button>
    )
}

export default Button
