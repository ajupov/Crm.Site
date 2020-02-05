import { Button, Menu } from 'semantic-ui-react'
import React, { FC } from 'react'

import { ActiveMenuItem } from '../../../components/ActiveMenuItem/ActiveMenuItem'
import Configuration from '../../../config/Configuration'

export const DesktopMenu: FC = () => {
    const configuration = new Configuration()

    return (
        <>
            <ActiveMenuItem path="/">Главная</ActiveMenuItem>
            <ActiveMenuItem path="/about">О нас</ActiveMenuItem>
            <Menu.Item position="right">
                <Button inverted as="a" href={configuration.LoginUrl}>
                    Войти
                </Button>
            </Menu.Item>
        </>
    )
}
