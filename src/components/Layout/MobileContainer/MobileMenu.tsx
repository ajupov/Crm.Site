import { Button, Icon, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import Configuration from '../../../config/Configuration'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu: FC = () => {
    const configuration = new Configuration()

    return (
        <>
            <ActiveMenuItem path="/">Главная</ActiveMenuItem>
            <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
            <Menu.Item as="a" href={configuration.AuthUrl}>
                Войти
            </Menu.Item>
            <Menu.Item as="a" href={configuration.AuthUrl}>
                Зарегистрироваться
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
                <Button as="a" href={configuration.AuthUrl} inverted>
                    Войти
                </Button>
                <Button as="a" href={configuration.AuthUrl} inverted style={{ marginLeft: '0.5em' }}>
                    Зарегистрироваться
                </Button>
            </Menu.Item>
        </>
    )
}
