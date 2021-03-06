import React, { FC, useEffect } from 'react'

import { AboutSegment } from './AboutSegment/AboutSegment'
import { BannerSegment } from './BannerSegment/BannerSegment'
import { Layout } from '../../components/Layout/Layout'
import { MissionSegment } from './MissionSegment/MissionSegment'

export const Home: FC = () => {
    useEffect(() => {
        document.title = 'Lite CRM'
    })

    return (
        <Layout>
            <BannerSegment />
            <AboutSegment />
            <MissionSegment />
        </Layout>
    )
}
