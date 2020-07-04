import React, { FC } from 'react'

import { Header } from 'semantic-ui-react'

export const InfoItem: FC = () => (
    <>
        <Header as="h3" style={{ fontSize: '2em' }}>
            О нас
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            Мы небольшая компания, которая хочет облегчить операционную деятельность таких же небольших компаний
        </p>
        <p style={{ fontSize: '1.33em' }}>
            Мы хотим быстро и гибко предоставлять новые возможности для автоматизации и тем самым принося им ценность
        </p>
    </>
)
