import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Button from '@/shared/ui/Button/Button'

import GitHubIcon from '../../assets/icons/github-icon.svg'

import styles from './GitHubLoginButton.module.scss'

interface GitHubLoginButtonProps {
    className?: string
}

const GitHubLoginButton: FC<GitHubLoginButtonProps> = memo((props) => {
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
                <GitHubIcon />
                Github
            </div>
        </Button>
    )
})

export default GitHubLoginButton
