import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import AppLogoImg from '@/shared/assets/images/app-logo-180x30.png'

import styles from './AppLogo.module.scss'

interface AppLogoProps {
    className?: string
    onClick?: () => void
}

const AppLogo: FC<AppLogoProps> = memo((props) => {
    const { className, onClick } = props

    const mods = {
        [styles.withClickHandler]: Boolean(onClick)
    }

    const additionsClasses = [className]

    return (
        <img
            src={AppLogoImg}
            className={classNames(styles.AppLogo, mods, additionsClasses)}
            onClick={onClick}
        />
    )
})

export default AppLogo
