import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

interface TitleProps {
    className?: string
    children?: ReactNode
}

const Title: FC<TitleProps> = memo((props) => {
    const { className, children } = props

    const mods = {}

    const additionsClasses = [className]

    return <h1 className={classNames('', mods, additionsClasses)}>{children}</h1>
})

export default Title
