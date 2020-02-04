import { Button, Icon, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import { Configuration } from '../../../configuration/Configuration'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu: FC = () => (
    <>
        <ActiveMenuItem path="/">Главная</ActiveMenuItem>
        <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
        <Menu.Item as="a" href={Configuration.AuthUrl}>
            Войти
        </Menu.Item>
        <Menu.Item as="a" href={Configuration.AuthUrl}>
            Зарегистрироваться
        </Menu.Item>
    </>
)

export const MobileMenu: FC<IMobileMenuProps> = ({ onClickShow }) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Button as="a" href={Configuration.AuthUrl} inverted>
                Войти
            </Button>
            <Button as="a" href={Configuration.AuthUrl} inverted style={{ marginLeft: '0.5em' }}>
                Зарегистрироваться
            </Button>
        </Menu.Item>
    </>
)
