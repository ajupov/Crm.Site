import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { NewsItem } from './NewsItem/NewsItem'

export const NewsSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <NewsItem />
            <NewsItem />
        </Container>
    </Segment>
)
