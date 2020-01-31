import { Container, Menu, Responsive, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { DesktopMenu } from './DesktopMenu'
import { FooterSegment } from '../FooterSegment/FooterSegment'

interface IDesktopContainerProps {
    children?: JSX.Element | JSX.Element[]
}

export const DesktopContainer: FC<IDesktopContainerProps> = ({ children }) => (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment inverted vertical style={{ backgroundColor: '#263238' }}>
            <Container>
                <Menu inverted pointing secondary style={{ borderWidth: 0 }}>
                    <DesktopMenu />
                </Menu>
            </Container>
        </Segment>
        {children}
        <FooterSegment />
    </Responsive>
)
