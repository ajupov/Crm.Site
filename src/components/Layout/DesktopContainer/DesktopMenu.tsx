import { Button, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import { Configuration } from '../../../configuration/Configuration'

export const DesktopMenu: FC = () => (
    <>
        <ActiveMenuItem path="/">Главная</ActiveMenuItem>
        <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
        <Menu.Item position="right">
            <Button inverted as="a" href={Configuration.AuthUrl}>
                Войти
            </Button>
            <Button inverted as="a" href={Configuration.AuthUrl} style={{ marginLeft: '0.5em' }}>
                Зарегистрироваться
            </Button>
        </Menu.Item>
    </>
)
