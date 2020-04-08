import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { InfoItem } from './InfoItem/InfoItem'

export const InfosSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <InfoItem />
            <InfoItem />
            <InfoItem />
            <InfoItem />
            <InfoItem />
        </Container>
    </Segment>
)
