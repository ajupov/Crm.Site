import React, { FC, useEffect } from 'react'

import { InfosSegment } from './InfosSegment/InfosSegment'
import { Layout } from '../../components/Layout/Layout'

export const About: FC = () => {
    useEffect(() => {
        document.title = 'О нас'
    })

    return (
        <Layout>
            <InfosSegment />
        </Layout>
    )
}
