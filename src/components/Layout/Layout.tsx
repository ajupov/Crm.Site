import React, { FC } from 'react'

import { DesktopContainer } from './DesktopContainer/DesktopContainer'
import { MobileContainer } from './MobileContainer/MobileContainer'

interface ILayoutProps {
    children?: JSX.Element | JSX.Element[]
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
)
