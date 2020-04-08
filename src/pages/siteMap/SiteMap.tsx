import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'
import { MapSegment } from './MapSegment/MapSegment'

export const SiteMap: FC = () => {
    useEffect(() => {
        document.title = 'Карта сайта'
    })

    return (
        <Layout>
            <MapSegment />
        </Layout>
    )
}
