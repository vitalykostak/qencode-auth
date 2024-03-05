import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './RootLayout.module.scss'

interface RootLayoutProps {
    className?: string
    children?: ReactNode
}

const RootLayout: FC<RootLayoutProps> = memo((props) => {
    const { className, children } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={styles.RootLayout}>
            <div className={classNames(styles.content, mods, additionsClasses)}>{children}</div>
        </div>
    )
})

export default RootLayout
