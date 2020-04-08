import { Button, Icon, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import Configuration from '../../../configuration/Configuration'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu: FC = () => {
    const configuration = new Configuration()

    return (
        <>
            <ActiveMenuItem path="/">Главная</ActiveMenuItem>
            <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
            <Menu.Item as="a" href={configuration.LoginUrl}>
                Войти
            </Menu.Item>
        </>
    )
}

export const MobileMenu: FC<IMobileMenuProps> = ({ onClickShow }) => {
    const configuration = new Configuration()

    return (
        <>
            <Menu.Item onClick={onClickShow}>
                <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
                <Button as="a" href={configuration.LoginUrl} inverted>
                    Войти
                </Button>
            </Menu.Item>
        </>
    )
}
