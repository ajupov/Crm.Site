import { Button, Icon, Menu } from 'semantic-ui-react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import { Configuration } from '../../../configuration/settings'
import React from 'react'

interface IMobileMenuProps {
    onClickShow: () => void
}

export const MobileSidebarMenu = () => (
    <>
        <ActiveMenuItem path="/">Главная</ActiveMenuItem>
        <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
        <Menu.Item as="a" href={Configuration.MainUrl}>
            Войти
        </Menu.Item>
        <Menu.Item as="a" href={Configuration.MainUrl}>
            Зарегистрироваться
        </Menu.Item>
    </>
)

export const MobileMenu = ({ onClickShow }: IMobileMenuProps) => (
    <>
        <Menu.Item onClick={onClickShow}>
            <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item position="right">
            <Button as="a" href={Configuration.MainUrl} inverted>
                Войти
            </Button>
            <Button as="a" href={Configuration.MainUrl} inverted style={{ marginLeft: '0.5em' }}>
                Зарегистрироваться
            </Button>
        </Menu.Item>
    </>
)
