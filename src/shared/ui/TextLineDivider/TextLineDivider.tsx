import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './TextLineDivider.module.scss'

interface TextLineDividerProps {
    className?: string
    children?: ReactNode
}

const TextLineDivider: FC<TextLineDividerProps> = memo((props) => {
    const { className, children } = props

    const mods = {}

    const additionsClasses = [className]

    return <p className={classNames(styles.TextLineDivider, mods, additionsClasses)}>{children}</p>
})

export default TextLineDivider
