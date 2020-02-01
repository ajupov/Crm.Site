import { Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'
import { MobileMenu, MobileSidebarMenu } from './MobileMenu'
import React, { FC, useState } from 'react'

import { FooterSegment } from '../FooterSegment/FooterSegment'

interface IMobileContainerProps {
    children?: JSX.Element | JSX.Element[]
}

export const MobileContainer: FC<IMobileContainerProps> = ({ children }) => {
    const [isSidebarMenuVisible, setSidebarMenuVisible] = useState(false)

    const showMenu = (): void => {
        setSidebarMenuVisible(true)
    }

    const hideMenu = (): void => {
        setSidebarMenuVisible(false)
    }

    return (
        <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar
                as={Menu}
                inverted
                vertical
                animation="overlay"
                visible={isSidebarMenuVisible}
                onHide={hideMenu}
                style={{ backgroundColor: '#37474F' }}
            >
                <MobileSidebarMenu />
            </Sidebar>
            <Sidebar.Pusher dimmed={isSidebarMenuVisible}>
                <Segment inverted vertical style={{ backgroundColor: '#263238' }}>
                    <Menu inverted pointing secondary>
                        <MobileMenu onClickShow={showMenu} />
                    </Menu>
                </Segment>
                {children}
                <FooterSegment />
            </Sidebar.Pusher>
        </Responsive>
    )
}
