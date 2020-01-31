import React, { FC, useEffect } from 'react'

import { ApiSegment } from './ApiSegment/ApiSegment'
import { Layout } from '../../components/Layout/Layout'

export const Api: FC = () => {
    useEffect(() => {
        document.title = 'API'
    })

    return (
        <Layout>
            <ApiSegment />
        </Layout>
    )
}
