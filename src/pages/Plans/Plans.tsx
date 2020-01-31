import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'
import { PlansSegment } from './PlansSegment/PlansSegment'

export const Plans: FC = () => {
    useEffect(() => {
        document.title = 'Наши планы'
    })

    return (
        <Layout>
            <PlansSegment />
        </Layout>
    )
}
