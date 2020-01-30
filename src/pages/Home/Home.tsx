import React, { FC, useEffect } from 'react'

import { AboutSegment } from './AboutSegment/AboutSegment'
import { BannerSegment } from './BannerSegment/BannerSegment'
import { FooterSegment } from './FooterSegment/FooterSegment'
import { Layout } from '../../components/Layout/Layout'
import { MissionSegment } from './MissionSegment/MissionSegment'
import { NewsSegment } from './NewsSegment/NewsSegment'

export const Home: FC = () => {
    useEffect(() => {
        document.title = 'Lite CRM'
    })

    return (
        <Layout>
            <BannerSegment />
            <MissionSegment />
            <AboutSegment />
            <NewsSegment />
            <FooterSegment />
        </Layout>
    )
}
