import { memo, type FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import AppLogo from '@/shared/ui/AppLogo/AppLogo'
import { getMainRoute } from '@/shared/constants/router'

interface RedirectingAppLogoProps {
    className?: string
}

const RedirectingAppLogo: FC<RedirectingAppLogoProps> = memo((props) => {
    const { className } = props

    const navigate = useNavigate()

    const navigateToMainPage = useCallback(() => {
        navigate(getMainRoute())
    }, [navigate])

    const mods = {}

    const additionsClasses = [className]

    return (
        <AppLogo className={classNames('', mods, additionsClasses)} onClick={navigateToMainPage} />
    )
})

export default RedirectingAppLogo
