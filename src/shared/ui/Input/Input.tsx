import { memo, type FC, type InputHTMLAttributes, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    rightAddon?: ReactNode
    error?: string
    label?: string
}

const Input: FC<InputProps> = memo((props) => {
    const { className, children, rightAddon, error, label, ...other } = props

    const mods = {
        [styles.withRightAddon]: Boolean(rightAddon)
    }

    const additionsClasses = [className]

    return (
        <div className={styles.container}>
            {label && <p className={styles.label}>{label}</p>}
            <div className={styles.inputContainer}>
                <input className={classNames(styles.Input, mods, additionsClasses)} {...other} />
                {rightAddon && <div className={styles.rightAddon}>{rightAddon}</div>}
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
})

export default Input
